import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.join(__dirname, '../public/mockup.jpg');
const outDir = path.join(__dirname, '../public/assets');

async function extractExact() {
  // Card 1 Lightning: center 200, top 745
  await sharp(input)
    .extract({ left: 140, top: 745, width: 120, height: 95 })
    .toFile(path.join(outDir, 'card-1-lightning.png'));

  // Card 2 Paper airplane: center 383, top 745
  await sharp(input)
    .extract({ left: 323, top: 745, width: 120, height: 95 })
    .toFile(path.join(outDir, 'card-2-airplane.png'));

  // Card 3 Eye: center 565, top 745
  await sharp(input)
    .extract({ left: 505, top: 745, width: 120, height: 95 })
    .toFile(path.join(outDir, 'card-3-eye.png'));

  console.log('Successfully saved exact card headers!');
}

extractExact().catch(console.error);
