import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.join(__dirname, '../public/mockup.jpg');
const outDir = path.join(__dirname, '../public/assets');

async function findCards() {
  const meta = await sharp(input).metadata();
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  
  // Let's sample y = 780 across all x
  // and see where the pink color is!
  // Pink is roughly R: 230-250, G: 140-160, B: 190-215
  const y = 780;
  const pinkRegions = [];
  let inPink = false;
  let startX = 0;

  for (let x = 0; x < info.width; x++) {
    const idx = (y * info.width + x) * info.channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const isPink = (r > 200 && g > 120 && g < 180 && b > 170);
    if (isPink && !inPink) {
      inPink = true;
      startX = x;
    } else if (!isPink && inPink) {
      inPink = false;
      pinkRegions.push({ startX, endX: x, width: x - startX, center: Math.round((startX + x) / 2) });
    }
  }

  console.log('Detected Pink Card Banners at y=780:', pinkRegions);

  // Extract from the exact centers of each detected card
  for (let i = 0; i < pinkRegions.length; i++) {
    const reg = pinkRegions[i];
    const cropWidth = 120;
    const cropHeight = 85;
    const left = Math.round(reg.center - cropWidth / 2);
    const top = 750;

    await sharp(input)
      .extract({ left, top, width: cropWidth, height: cropHeight })
      .toFile(path.join(outDir, `icon-card-${i + 1}.png`));
    console.log(`Saved icon-card-${i + 1}.png at center x=${reg.center}`);
  }
}

findCards().catch(console.error);
