const menuToggle=document.querySelector('#menuToggle');
const navLinks=document.querySelector('#navLinks');
const themeToggle=document.querySelector('#themeToggle');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'✕':'☰';});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light-theme');themeToggle.textContent=document.body.classList.contains('light-theme')?'☾ Theme':'☼ Theme';});
document.querySelectorAll('.buy').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#cartNotice').textContent=`${button.dataset.product} selected. Checkout is a demo only.`;}));
document.querySelector('#recycleForm').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;document.querySelector('#formMessage').textContent='Thank you! Demo request validated. It has not been sent to a server.';form.reset();});
