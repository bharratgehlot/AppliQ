/* ----- Section 1 --- I for India and B for Bharat ----- */

const OPTIONS = [
  "React", // 1
  "React Native", // 2
  "Angular", // 3
  "Vue", // 4
  "Java", // 5
  "C++", // 6
  "Python", // 7
  "Data Analysis", // 8
  "Machine Learning", // 9
  "JavaScript", // 10
  "Node.js", // 11
  "ASP.NET", // 12
  //"API Development", // 13
  //"Docker", // 14
  //"Kubernetes", // 15
  "Swift", // 16
  "Rust", // 17
  "Cloud Computing", // 18
  "DevOps", // 19
  "Networking", // 20
  //"Redux", // 21
  //"Ansible", // 22
  "Flask", // 23
  "Solution Architect", // 24
  "Django", // 25
  "HR", // 26
  //"Project Management", // 27
  "Artificial Intelligence", // 28
  //"Prompt Engineering", // 29
  "TypeScript", // 30
  //"Next.js", // 31
  "Terraform", // 32
  "NumPy", // 33
  "Pandas", // 34
  "Penetration Testing", // 35
  //"WebAssembly (Wasm)", // 36
  "FastAPI", // 37
  "Express.js", // 38
  "Hadoop", // 39
  "Apache Spark", // 40
  "PostgreSQL", // 41
  //"ServiceNow", // 42
  //"Asana", // 43
  //"Zapier", // 44
  "Figma", // 45
  "Git", // 46
  // "GitHub", // 47
  //"GitLab", // 48
  //"Slack", // 49
  //"Salesforce", // 50
  //"Jira", // 51
  "Flutter", // 52
  //"CI/CD", // 53
  "Scrum Master", // 54
  "MongoDB", // 55
  //"Tableau", // 56
  //"Unity", // 57
  "Site Reliability Engineering", // 58
  "Data Visualization (Tableau, Power BI)", // 59
  //"GraphQL", // 60
  //"Natural Language Processing", // 61
  "ETL Engineer", // 62
  "DSA", // 63
  "Gen AI", // 64
  "Golang", // 65
  "Blockchain", // 66
  "Ruby on Rails", // 67
  "Agentic AI", // 68
  "Testing", // 69
  "Software Engineer", // 70
  "Ruby", // 71
  "Cybersecurity", // 72
  "UI/UX", // 73
  "Spring Boot", // 74
  "Data Engineering", // 75
  "R", // 76
  "Big Data", // 77
  "SQL", // 78
  //"Internet of Things (IoT)" // 79
];

/* 79 Because its 79th Independance Day */
/*Not using all beacuse it will create a lot of confusion

/* ----- Section 2 --- Empty arrays for Data storage ----- */


const likesList = [];
const dislikesList = [];



/* ----- Section 3 --- Variabled to be used in code and their names ----- */



const nameInput = document.getElementById('nameInput');
const skillSelect = document.getElementById('skillSelect');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likesContainer = document.getElementById('likesContainer');
const dislikesContainer = document.getElementById('dislikesContainer');
const generateBtn = document.getElementById('generate');
const downloadBtn = document.getElementById('download');
const canvas = document.getElementById('outputCanvas');
const ctx = canvas.getContext('2d');



/* ----- Section 4 --- function to populate skills selections I guess ----- */



function populateSkillOptions() {
  OPTIONS.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt;
    o.text = opt;
    skillSelect.appendChild(o);
  });
}


/* ----- Section 5 --- function to render skills ----- */


function renderLists() {
  likesContainer.innerHTML = likesList.map(skill => `<span class="pill like">${skill}</span>`).join(' ');
  dislikesContainer.innerHTML = dislikesList.map(skill => `<span class="pill dislike">${skill}</span>`).join(' ');
}


/* ----- Section 6 --- Append like button ----- */


function showToast(message, type = 'warning') {
  const toast = document.createElement('div');
  toast.textContent = message;

  const isMobile = window.innerWidth <= 440;

  toast.style.cssText = `
    position: fixed; 
     top: ${isMobile ? '10px' : '20px'}; 
    right: ${isMobile ? '10px' : '20px'}; 
    z-index: 1000;
     padding: ${isMobile ? '8px 12px' : '12px 20px'};
    border-radius: 8px; 
    font-size: ${isMobile ? '13px' : '14px'};
    color: white;
    background: ${type === 'error' ? '#e53935' : '#ff6f00'};
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease;
  `;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(),
    3000);
}


// Replace your alert with:

function playSound() {
  const sound = document.getElementById('buttonSound');
  sound.currentTime = 0;
  sound.play().catch(e => console.log('Sound play failed:', e));
}



likeBtn.addEventListener('click', () => {
  const val = skillSelect.value;
  if (val && !likesList.includes(val) && !dislikesList.includes(val)) {

    if (likesList.length < 7) {
      likesList.push(val);
      renderLists();
      playSound();
    } else {
      showToast('Maximum 7 likes can be added');
    }
  }
});


/* ----- Section 7 --- Append dislike button ----- */


dislikeBtn.addEventListener('click', () => {
  const val = skillSelect.value;
  if (val && !likesList.includes(val) && !dislikesList.includes(val)) {

    if (dislikesList.length < 7) {
      dislikesList.push(val);
      renderLists();

       playSound();

    } else {
      showToast('Maximum 7 dislikes can be added');
    }
  }
}
);

/* ----- Section 8 --- function to draw tricolor flag ----- */


function drawTricolorBackground1() {
  const w = canvas.width, h = canvas.height;
  const margin = 50; // margin to trim left and right

  ctx.clearRect(0, 0, w, h);

/*
  // Top Level

  ctx.fillStyle = '#ff7f2a';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w, 0);
  ctx.lineTo(w, h * 0.18);
  ctx.lineTo(0, h * 0.08);
  ctx.closePath();
  ctx.fill();


  // Middle One 

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(0, h * 0.08);
  ctx.lineTo(w, h * 0.18);
  ctx.lineTo(w, h * 0.92);
  ctx.lineTo(0, h * 0.82);
  ctx.closePath();
  ctx.fill();


  // Bottom Level

  ctx.fillStyle = '#138a2a';
  ctx.beginPath();
  ctx.moveTo(w, h);
  ctx.lineTo(0, h);
  ctx.lineTo(0, h * 0.82);
  ctx.lineTo(w, h * 0.92);
  ctx.closePath();
  ctx.fill();

*/

// Top Level

  ctx.fillStyle = '#ff7f2a';
  ctx.beginPath();
  ctx.moveTo(margin, 0);
  ctx.lineTo(w - margin, 0);
  ctx.lineTo(w - margin, h * 0.18);
  ctx.lineTo(margin, h * 0.08);
  ctx.closePath();
  ctx.fill();

  // Middle One 
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(margin, h * 0.08);
  ctx.lineTo(w - margin, h * 0.18);
  ctx.lineTo(w - margin, h * 0.92);
  ctx.lineTo(margin, h * 0.82);
  ctx.closePath();
  ctx.fill();

  // Bottom Level
  ctx.fillStyle = '#138a2a';
  ctx.beginPath();
  ctx.moveTo(w - margin, h);
  ctx.lineTo(margin, h);
  ctx.lineTo(margin, h * 0.82);
  ctx.lineTo(w - margin, h * 0.92);
  ctx.closePath();
  ctx.fill();
}


function drawTricolorBackground() {
  const w = canvas.width, h = canvas.height;
  const margin = 50; // margin to trim left and right
  ctx.clearRect(0, 0, w, h);

  // Top Level (Orange)
  ctx.fillStyle = '#ff7f2a';
  ctx.beginPath();
  ctx.moveTo(margin, 0);
  ctx.lineTo(w - margin, 0);
  ctx.lineTo(w - margin, h * 0.25);
  ctx.lineTo(margin, h * 0.15);
  ctx.closePath();
  ctx.fill();

// Middle One (White)
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.moveTo(margin, h * 0.15);
ctx.lineTo(w - margin, h * 0.25);
ctx.lineTo(w - margin, h * 0.85);  // Connect to green top-right
ctx.lineTo(margin, h * 0.75);      // Connect to green top-left
ctx.closePath();
ctx.fill();


  // Bottom Level (Green) - inverted of orange
  ctx.fillStyle = '#138a2a';
  ctx.beginPath();
  ctx.moveTo(margin, h);
  ctx.lineTo(w - margin, h);
  ctx.lineTo(w - margin, h * 0.85);  // Higher on right
  ctx.lineTo(margin, h * 0.75);  // Lower on left
  ctx.closePath();
  ctx.fill();
}



/* ----- Section 9 --- Draw safezone ----- */


function drawSafeZone() {
  const w = canvas.width, h = canvas.height;
  const margin = 50;
  const sideMargin = 100;  

  // Calculate safe area within white section
  const topY = Math.max(h * 0.25, h * 0.15) + 5; // Below orange
  const bottomY = Math.min(h * 0.75, h * 0.85) - 5; // Above green

 const zone = { 
    x: margin + sideMargin, 
    y: topY, 
    width: (w - margin * 2) - (sideMargin * 2), 
    height: bottomY - topY 
  };

  ctx.fillStyle = '#ffffffff';
  ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
  ctx.save();

 // ctx.strokeStyle = 'rgba(0,0,0,0.08)';
 // ctx.setLineDash([8, 6]);
 // ctx.lineWidth = 2;
 // ctx.strokeRect(zone.x + 12, zone.y + 12, zone.width - 24, zone.height - 24);
  ctx.restore();
  return zone;
}

/* ----- Section 10 --- To draw text area ----- */


function drawTextColumns(zone, name, dislikes, likes) {
  // amazonq-ignore-next-line
  const padding = 28;

  //const leftX = zone.x + padding;
  //const rightX = zone.x + zone.width / 2 + padding / 2;

  const leftColumnCenter = zone.x + zone.width / 4;
  const rightColumnCenter = zone.x + (zone.width * 3) / 4;

  const startY = zone.y + 100;
  const lineHeight = 34;

  // amazonq-ignore-next-line
  ctx.fillStyle = '#111'; ctx.font = 'bold 28px Inter, system-ui, Arial';
  ctx.textAlign = 'center';
  ctx.fillText(name || 'Your Name', zone.x + zone.width / 2, zone.y + 34);

  ctx.font = '600 18px Inter, Arial'; ctx.textAlign = 'center';


  //ctx.fillText('Likes', leftX, startY - 30);
  //ctx.fillText('Dislikes', rightX, startY - 30);

  ctx.fillText('Likes', leftColumnCenter, startY - 30);
  ctx.fillText('Dislikes', rightColumnCenter, startY - 30);


  

  ctx.font = '15px Inter, Arial';
  const maxItems = 8;

  for (let i = 0; i < maxItems; i++) {
    const y = startY + i * lineHeight;


    if (likes[i]) {
      const text = likes[i];
      const tw = ctx.measureText(text).width;
      ctx.fillStyle = '#c7ff5a';
      const pillX = leftColumnCenter - (tw + 18) / 2;


      roundRect(ctx, pillX, y - 18, tw + 18, 26, 4, true, false);
      ctx.fillStyle = '#0c0c0c';
      ctx.textAlign = 'center';
      ctx.fillText(text, leftColumnCenter, y);
      //ctx.fillText(text, leftX + 9, y);
    }

    if (dislikes[i]) {
      const text = '- ' + dislikes[i];
      const tw = ctx.measureText(text).width;
      ctx.fillStyle = '#e53935';

      const pillX = rightColumnCenter - (tw + 20) / 2;

      roundRect(ctx, pillX, y - 18, tw + 20, 26, 4, true, false);
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.fillText(text, rightColumnCenter, y);
    }
  }
}


/*

function drawTextColumns(zone, name, dislikes, likes) {
  // Layout constants
  const COLUMN_PADDING = 28;
  const HEADER_OFFSET = 100;
  const ITEM_HEIGHT = 34;
  const PILL_VERTICAL_OFFSET = 18;
  const PILL_HORIZONTAL_PADDING = 20;
  const PILL_BORDER_RADIUS = 4;
  const COLUMN_GAP = 180; // Increased gap for more space
  
  const centerX = zone.x + zone.width / 2;
  const leftColumnX = centerX - COLUMN_GAP / 2;
  const rightColumnX = centerX + COLUMN_GAP / 2;
  const startY = zone.y + HEADER_OFFSET;
  const maxItems = 8;

  // Draw name header
  ctx.fillStyle = '#111';
  ctx.font = 'bold 28px Inter, system-ui, Arial';
  ctx.textAlign = 'center';
  ctx.fillText(name || 'Your Name', centerX, zone.y + 34);

  // Draw column headers (flipped)
  ctx.font = '600 18px Inter, Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Likes', leftColumnX, startY - 30);
  ctx.fillText('Dislikes', rightColumnX, startY - 30);

  // Draw items
  ctx.font = '15px Inter, Arial';
  for (let i = 0; i < maxItems; i++) {
    const y = startY + i * ITEM_HEIGHT;
    
    // Draw likes (left side - right-aligned to center gap)
    if (likes[i]) {
      const text = likes[i];
      const textWidth = ctx.measureText(text).width;
      const pillX = leftColumnX - textWidth - 18;
      
      ctx.fillStyle = '#c7ff5a';
      roundRect(ctx, pillX, y - PILL_VERTICAL_OFFSET, textWidth + 18, 26, PILL_BORDER_RADIUS, true, false);
      
      ctx.fillStyle = '#0c0c0c';
      ctx.textAlign = 'left';
      ctx.fillText(text, pillX + 9, y);
    }
    
    // Draw dislikes (right side - left-aligned from center gap)
    if (dislikes[i]) {
      const text = '- ' + dislikes[i];
      const textWidth = ctx.measureText(text).width;
      
      ctx.fillStyle = '#e53935';
      roundRect(ctx, rightColumnX, y - PILL_VERTICAL_OFFSET, textWidth + PILL_HORIZONTAL_PADDING, 26, PILL_BORDER_RADIUS, true, false);
      
      ctx.fillStyle = 'white';
      ctx.textAlign = 'left';
      ctx.fillText(text, rightColumnX + 10, y);
    }
  }
}

 ----- Section 10 --- Draw decorations ----- */


/* ----- Section 11 --- What this code even do ?? ----- */


function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}


/* ----- Section 13 --- function to generate image  ----- */


function generateImage() {
  drawTricolorBackground();
  const zone = drawSafeZone();
  drawTextColumns(zone, nameInput.value, dislikesList, likesList);
  //drawDecorations(zone);
  downloadBtn.disabled = false;
}

/* ----- Section 14 --- function to download image  ----- */


function downloadImage() {
  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = url;
  a.download = (nameInput.value ? nameInput.value.replace(/\s+/g, '_') : 'appliq') + '_career.png';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

window.addEventListener('load', () => {
  populateSkillOptions();
  generateImage();
  generateBtn.addEventListener('click', generateImage);
  downloadBtn.addEventListener('click', downloadImage);
});


/* ----- Section 15 --- Plays sound when clicking like and dislikes ----- */





