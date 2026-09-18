const fs = require('fs');
const https = require('https');
const path = require('path');

const dataPath = path.join(__dirname, 'components', 'data', 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const publicCoursesDir = path.join(__dirname, 'public', 'courses');
if (!fs.existsSync(publicCoursesDir)) {
  fs.mkdirSync(publicCoursesDir, { recursive: true });
}

let downloaded = 0;
const courses = data.common.coursesPage.courses;
let pending = courses.length;

courses.forEach((course, index) => {
  const imageUrl = course.image;
  if (imageUrl.startsWith('http')) {
    const fileName = `course-${index + 1}.jpg`;
    const dest = path.join(publicCoursesDir, fileName);
    
    const download = (url, destFile) => {
      https.get(url, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          download(response.headers.location, destFile);
        } else if (response.statusCode === 200) {
          const file = fs.createWriteStream(destFile);
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            course.image = `/courses/${fileName}`;
            downloaded++;
            checkDone();
          });
        } else {
          console.error(`Failed to download ${url}: ${response.statusCode}`);
          downloaded++;
          checkDone();
        }
      }).on('error', (err) => {
        console.error(`Error downloading ${url}:`, err.message);
        downloaded++;
        checkDone();
      });
    };
    
    download(imageUrl, dest);
  } else {
    downloaded++;
    checkDone();
  }
});

function checkDone() {
  if (downloaded === pending) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    console.log('Done downloading and updating data.json!');
  }
}
