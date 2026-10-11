import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extract() {
  const input = path.join(__dirname, '../public/mockup.jpg');
  const meta = await sharp(input).metadata();
  console.log('Metadata:', meta.width, 'x', meta.height);

  const safeExtract = async (opts, filename) => {
    const left = Math.max(0, Math.min(opts.left, meta.width - 1));
    const top = Math.max(0, Math.min(opts.top, meta.height - 1));
    const width = Math.min(opts.width, meta.width - left);
    const height = Math.min(opts.height, meta.height - top);
    await sharp(input)
      .extract({ left, top, width, height })
      .toFile(path.join(outDir, filename));
    console.log(`Saved ${filename}: ${width}x${height} from (${left},${top})`);
  };

  // Hero Robot (top right)
  await safeExtract({ left: 420, top: 40, width: 340, height: 310 }, 'hero-robot-raw.png');

  // About Robot (middle left)
  await safeExtract({ left: 40, top: 370, width: 450, height: 285 }, 'about-robot-raw.png');

  // Lightning icon banner
  await safeExtract({ left: 165, top: 740, width: 140, height: 100 }, 'icon-lightning-banner.png');

  // Airplane icon banner
  await safeExtract({ left: 405, top: 740, width: 140, height: 100 }, 'icon-airplane-banner.png');

  // Eye icon banner
  await safeExtract({ left: 645, top: 740, width: 115, height: 100 }, 'icon-eye-banner.png');

  // Star Speech Bubble (bottom left)
  await safeExtract({ left: 10, top: 895, width: 95, height: 95 }, 'doodle-star-bubble.png');

  // Flowchart diagram (middle right)
  await safeExtract({ left: 615, top: 590, width: 145, height: 120 }, 'doodle-flowchart.png');

  // Chevron down pill
  await safeExtract({ left: 470, top: 638, width: 45, height: 35 }, 'chevron-down.png');

  console.log('Extraction complete!');
}

extract().catch(console.error);
