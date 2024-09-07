//Dark and light mode
const body = document.body;
const lightModeToggle=document.getElementById('lightModeToggle')
lightModeToggle.addEventListener('click',()=>{
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
});