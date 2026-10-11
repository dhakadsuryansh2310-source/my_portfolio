import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, '../public/assets');

// High-fidelity SVG banner for Card 4: DSA & C++
const svgBanner = `
<svg width="240" height="190" viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg">
  <!-- Pink Background -->
  <rect width="240" height="190" fill="#F294C8"/>
  
  <!-- Horizontal Black Guideline -->
  <line x1="0" y1="95" x2="240" y2="95" stroke="#121212" stroke-width="4"/>
  
  <!-- 3D Isometric C++ Algorithm Cube -->
  <g transform="translate(120, 95)">
    <!-- Shadow -->
    <polygon points="0,55 55,25 0,-5 -55,25" fill="#121212" opacity="0.3" transform="translate(6, 6)"/>
    
    <!-- Top Face (Cream / Off-white) -->
    <polygon points="0,-48 48,-24 0,0 -48,-24" fill="#FFFDF0" stroke="#121212" stroke-width="5" stroke-linejoin="round"/>
    
    <!-- Left Face (Yellow #F2C230) -->
    <polygon points="-48,-24 0,0 0,48 -48,24" fill="#F2C230" stroke="#121212" stroke-width="5" stroke-linejoin="round"/>
    
    <!-- Right Face (Orange #F27830) -->
    <polygon points="0,0 48,-24 48,24 0,48" fill="#F27830" stroke="#121212" stroke-width="5" stroke-linejoin="round"/>

    <!-- C++ and Code Details -->
    <!-- Front Left Text: C++ -->
    <text x="-24" y="22" font-family="'Fredoka', 'Arial Black', sans-serif" font-weight="900" font-size="22" fill="#121212" text-anchor="middle" transform="skewY(26)">C++</text>
    
    <!-- Front Right Symbol: & / {} -->
    <text x="24" y="22" font-family="'Space Mono', monospace" font-weight="900" font-size="20" fill="#121212" text-anchor="middle" transform="skewY(-26)">&lt;/&gt;</text>

    <!-- Top Face Algorithm Tree Nodes -->
    <circle cx="0" cy="-24" r="5" fill="#121212"/>
    <circle cx="-20" cy="-14" r="4" fill="#F27830" stroke="#121212" stroke-width="2"/>
    <circle cx="20" cy="-14" r="4" fill="#F2C230" stroke="#121212" stroke-width="2"/>
    <line x1="0" y1="-24" x2="-20" y2="-14" stroke="#121212" stroke-width="3"/>
    <line x1="0" y1="-24" x2="20" y2="-14" stroke="#121212" stroke-width="3"/>
  </g>
</svg>
`;

async function makeBanner() {
  const buf = Buffer.from(svgBanner);
  await sharp(buf)
    .resize(240, 190)
    .png()
    .toFile(path.join(outDir, 'card-4-dsa.png'));
  console.log('Saved card-4-dsa.png successfully!');
}

makeBanner().catch(console.error);
