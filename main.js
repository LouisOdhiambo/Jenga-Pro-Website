const screen = document.querySelector('#product-screen');
document.head.insertAdjacentHTML('beforeend', `<style>
  .flow-lines{left:300px;top:58px;width:220px;height:225px;opacity:1!important}
  .flow-lines i{display:none}
  .flow-lines i:nth-child(1){display:block;top:112px;right:0;width:220px;height:1px;background:linear-gradient(90deg,#4b7484,#7ab2c7);transform:none}
  .flow-lines i:nth-child(1):after{content:'';position:absolute;right:0;top:50%;width:7px;height:7px;border-top:1px solid #7ab2c7;border-right:1px solid #7ab2c7;transform:translateY(-50%) rotate(45deg)}
  .flow-core{z-index:2}
  @media(max-width:900px){.flow-lines{left:240px;transform:scale(.8);transform-origin:left center}}
  @media(max-width:600px){.flow-lines{display:none}.flow-core:before{content:'';position:absolute;width:42px;height:1px;background:#5a8798;right:100%;top:50%}}
</style>`);
const shots = {
  projects: 'Images/Screenshots/dashboard.png',
  sites: 'Images/Screenshots/dashboard.png',
  workforce: 'Images/Screenshots/daily-reports.png',
  materials: 'Images/Screenshots/inventory.png',
  reports: 'Images/Screenshots/reports.png'
};
function setShot(name) { screen.style.opacity = '0'; screen.style.transform = 'translateY(8px)'; setTimeout(() => { screen.style.backgroundImage = `url("${shots[name]}")`; screen.style.opacity = '1'; screen.style.transform = 'none'; }, 160); }
setShot('projects');
document.querySelectorAll('.tour-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelector('.tour-tab.active').classList.remove('active'); tab.classList.add('active'); setShot(tab.dataset.panel);
}));
const roles = {
  contractor:['FOR THE CONTRACTOR','See the bigger picture.','Bring projects, people and materials into one operational view — so you can lead with current information.','Active projects','03','On track','68%','People on site','48'],
  engineer:['FOR THE ENGINEER','Stay close to the work.','Keep assigned projects, site activity and progress within easy reach as work moves forward.','Assigned sites','03','Progress','68%','Reports today','03'],
  foreman:['FOR THE FOREMAN','Run the day with clarity.','Keep workers, attendance and materials connected to the site activity you manage every day.','Team present','22','Materials issued','04','Daily tasks','08'],
  accounts:['FOR ACCOUNTS','Keep operations organized.','Use current project and operational records to stay connected to the financial side of the work.','Project records','12','Items to review','02','Site updates','14']
};
const roleLabel=document.querySelector('#role-label'),roleTitle=document.querySelector('#role-title'),roleCopy=document.querySelector('#role-copy'),rolePreview=document.querySelector('#role-preview');
function paintRole(key){const r=roles[key];roleLabel.textContent=r[0];roleTitle.textContent=r[1];roleCopy.textContent=r[2];rolePreview.innerHTML=`<div class="role-data"><small>${r[3]}</small><b>${r[4]}</b></div><div class="role-data"><small>${r[5]}</small><b>${r[6]}</b></div><div class="role-data"><small>${r[7]}</small><b>${r[8]}</b></div>`}
paintRole('contractor');
document.querySelectorAll('.role').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.role.active').classList.remove('active');btn.classList.add('active');paintRole(btn.dataset.role)}));
const header=document.querySelector('.site-header');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>12),{passive:true});
const toggle=document.querySelector('.menu-toggle');toggle.addEventListener('click',()=>{header.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',header.classList.contains('menu-open'))});document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('menu-open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
