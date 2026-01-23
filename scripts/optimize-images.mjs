/**
 * Image Optimization Script
 * Converts images to WebP and generates multiple sizes for srcset
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';
const SIZES = [400, 800, 1200]; // srcset sizes
const QUALITY = 85; // WebP quality

const imagesToProcess = [
  'PP.jpeg',
  'VRAIS.png',
  'quickturn.png',
  'rootine.png',
  'logoquickturn.png'
];

async function processImage(filename) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const baseName = path.basename(filename, path.extname(filename));
  
  console.log(`Processing: ${filename}`);
  
  // Get original dimensions
  const metadata = await sharp(inputPath).metadata();
  console.log(`  Original: ${metadata.width}x${metadata.height}`);
  
  // Generate WebP at original size
  const webpName = `${baseName}.webp`;
  await sharp(inputPath)
    .webp({ quality: QUALITY })
    .toFile(path.join(PUBLIC_DIR, webpName));
  
  const originalStats = fs.statSync(inputPath);
  const webpStats = fs.statSync(path.join(PUBLIC_DIR, webpName));
  const savings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);
  console.log(`  WebP: ${webpName} (${savings}% smaller)`);
  
  // Generate responsive sizes
  for (const size of SIZES) {
    if (size < metadata.width) {
      const resizedName = `${baseName}-${size}w.webp`;
      await sharp(inputPath)
        .resize(size)
        .webp({ quality: QUALITY })
        .toFile(path.join(PUBLIC_DIR, resizedName));
      console.log(`  Generated: ${resizedName}`);
    }
  }
  
  console.log('');
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log('Converting to WebP and generating srcset variants...\n');
  
  for (const image of imagesToProcess) {
    try {
      await processImage(image);
    } catch (err) {
      console.error(`Error processing ${image}:`, err.message);
    }
  }
  
  console.log('✅ Done! Images optimized.');
}

main();
