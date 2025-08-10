/* AppLiQ — one-by-one selection version */

const OPTIONS = [
  "React", "React Native", "Angular", "Vue", "Java", "C++", "Python",
  "Data Analysis", "Machine Learning", "Cloud", "DevOps", "Networking",
  "DSA", "Software Engineer", "Cybersecurity", "UI/UX", "R", "SQL"
];

const likesList = [];
const dislikesList = [];

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

function populateSkillOptions(){
  OPTIONS.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt;
    o.text = opt;
    skillSelect.appendChild(o);
  });
}

function renderLists(){
  likesContainer.innerHTML = likesList.map(skill => `<span class="pill like">${skill}</span>`).join(' ');
  dislikesContainer.innerHTML = dislikesList.map(skill => `<span class="pill dislike">${skill}</span>`).join(' ');
}

likeBtn.addEventListener('click', () => {
  const val = skillSelect.value;
  if(val && !likesList.includes(val) && !dislikesList.includes(val)){
    likesList.push(val);
    renderLists();
  }
});

dislikeBtn.addEventListener('click', () => {
  const val = skillSelect.value;
  if(val && !likesList.includes(val) && !dislikesList.includes(val)){
    dislikesList.push(val);
    renderLists();
  }
});

function drawTricolorBackground(){
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = '#ff7f2a';
  ctx.beginPath();
  ctx.moveTo(0,0); ctx.lineTo(w,0); ctx.lineTo(w*0.95,h*0.18); ctx.lineTo(0,h*0.08); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#138a2a';
  ctx.beginPath();
  ctx.moveTo(0,h); ctx.lineTo(w,h); ctx.lineTo(w*0.95,h*0.88); ctx.lineTo(0,h*0.92); ctx.closePath(); ctx.fill();
}

function drawSafeZone(){
  const w = canvas.width, h = canvas.height;
  const zone = {x:w*0.07, y:h*0.16, width:w*0.86, height:h*0.68};
  ctx.fillStyle = '#fff'; ctx.fillRect(zone.x,zone.y,zone.width,zone.height);
  ctx.save();
  ctx.strokeStyle = 'rgba(0,0,0,0.08)'; ctx.setLineDash([8,6]); ctx.lineWidth=2;
  ctx.strokeRect(zone.x+12, zone.y+12, zone.width-24, zone.height-24);
  ctx.restore();
  return zone;
}

function drawTextColumns(zone, name, dislikes, likes){
  const padding = 28;
  const leftX = zone.x + padding;
  const rightX = zone.x + zone.width/2 + padding/2;
  const startY = zone.y + 40;
  const lineHeight = 34;

  ctx.fillStyle = '#111'; ctx.font = 'bold 28px Inter, system-ui, Arial';
  ctx.textAlign = 'center';
  ctx.fillText(name || 'Your Name', zone.x + zone.width/2, zone.y + 34);

  ctx.font = '600 18px Inter, Arial'; ctx.textAlign = 'left';
  ctx.fillText('Dislikes', leftX, startY - 6);
  ctx.fillText('Likes', rightX, startY - 6);

  ctx.font = '15px Inter, Arial';
  const maxItems = 8;
  for(let i=0;i<maxItems;i++){
    const y = startY + i*lineHeight;
    if(dislikes[i]){
      const text = '- ' + dislikes[i];
      const tw = ctx.measureText(text).width;
      ctx.fillStyle = '#e53935';
      roundRect(ctx, leftX, y-18, tw+20, 26, 4, true, false);
      ctx.fillStyle = 'white';
      ctx.fillText(text, leftX+10, y);
    }
    if(likes[i]){
      const text = likes[i];
      const tw = ctx.measureText(text).width;
      ctx.fillStyle = '#c7ff5a';
      roundRect(ctx, rightX, y-18, tw+18, 26, 4, true, false);
      ctx.fillStyle = '#0c0c0c';
      ctx.fillText(text, rightX+9, y);
    }
  }
}

function roundRect(ctx, x, y, w, h, r, fill, stroke){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  if(fill) ctx.fill();
  if(stroke) ctx.stroke();
}

function drawDecorations(zone){
  const x = zone.x + 18, y = zone.y + 18, w = 80, h = 12;
  ctx.fillStyle = '#ff7f2a'; ctx.fillRect(x,y,w,h/3);
  ctx.fillStyle = '#ffffff'; ctx.fillRect(x,y+h/3,w,h/3);
  ctx.fillStyle = '#138a2a'; ctx.fillRect(x,y+(2*h/3),w,h/3);
}

function generateImage(){
  drawTricolorBackground();
  const zone = drawSafeZone();
  drawTextColumns(zone, nameInput.value, dislikesList, likesList);
  drawDecorations(zone);
  downloadBtn.disabled = false;
}

function downloadImage(){
  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = url;
  a.download = (nameInput.value ? nameInput.value.replace(/\s+/g,'_') : 'appliq') + '_career.png';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

window.addEventListener('load', ()=>{
  populateSkillOptions();
  generateImage();
  generateBtn.addEventListener('click', generateImage);
  downloadBtn.addEventListener('click', downloadImage);
});
