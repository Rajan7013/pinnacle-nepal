const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images/hero');
const outputDir = inputDir;

if (!fs.existsSync(inputDir)) {
    console.error(`Input directory not found: ${inputDir}`);
    process.exit(1);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = path.join(inputDir, file);
            const outputFilename = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            const outputPath = path.join(outputDir, outputFilename);

            sharp(inputPath)
                .resize({ width: 1920, withoutEnlargement: true }) // Resize to max 1920px width
                .webp({ quality: 80 }) // Convert to WebP with 80% quality
                .toFile(outputPath)
                .then(info => {
                    const originalSize = fs.statSync(inputPath).size / 1024;
                    const newSize = info.size / 1024;
                    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
                    console.log(`✅ Compressed ${file}: ${originalSize.toFixed(1)}KB -> ${newSize.toFixed(1)}KB (${savings}% savings)`);
                })
                .catch(err => {
                    console.error(`❌ Error compressing ${file}:`, err);
                });
        }
    });
});
