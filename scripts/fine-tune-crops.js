import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.join(__dirname, '../public/mockup.jpg');
const outDir = path.join(__dirname, '../public/assets');

async function fineTuneCrops() {
  // Let's crop the actual icon areas:
  // Card 1 is roughly from x: 114 to 286, y: 735 to 985
  // Card 1 header pink box: x: 130 to 270, y: 745 to 840. The lightning bolt is at x: 175 to 225, y: 755 to 830
  await sharp(input)
    .extract({ left: 165, top: 755, width: 85, height: 80 })
    .toFile(path.join(outDir, 'icon-lightning-precise.png'));

  // Card 2 airplane: x: 420 to 500, y: 760 to 830
  await sharp(input)
    .extract({ left: 420, top: 760, width: 95, height: 75 })
    .toFile(path.join(outDir, 'icon-airplane-precise.png'));

  // Card 3 eye: x: 670 to 750, y: 760 to 830
  await sharp(input)
    .extract({ left: 665, top: 760, width: 90, height: 75 })
    .toFile(path.join(outDir, 'icon-eye-precise.png'));

  console.log('Precise icons extracted!');
}

fineTuneCrops().catch(console.error);
