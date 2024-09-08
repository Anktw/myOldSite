function showSideBar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.classList.toggle('show-sidebar');
}
function hideSideBar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}