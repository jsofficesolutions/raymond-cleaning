const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file).toLowerCase() === '.png') {
      const inputPath = path.join(imagesDir, file);
      const outputName = path.basename(file, '.png') + '.webp';
      const outputPath = path.join(imagesDir, outputName);

      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(info => {
          const origSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
          const newSize = (info.size / 1024).toFixed(1);
          console.log(`Converted ${file} (${origSize} KB) -> ${outputName} (${newSize} KB)`);
        })
        .catch(err => {
          console.error(`Error converting ${file}:`, err);
        });
    }
  });
});
