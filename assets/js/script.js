//Dark and light mode
const body = document.body;
const icon=document.getElementById('mode-icon');
let isOriginalIcon=true;
const lightModeToggle=document.getElementById('lightModeToggle')
lightModeToggle.addEventListener('click',()=>{
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
  const darkicon = "assets/images/icons/dark-mode.svg";
  const lighticon="assets/images/icons/light-mode.svg"
  if(isOriginalIcon){
    icon.src=darkicon;
    isOriginalIcon=false;
  }
  else{
    icon.src=lighticon;
    isOriginalIcon=true;
  }
});