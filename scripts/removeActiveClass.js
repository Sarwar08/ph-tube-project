
function removeActiveClass (){
    const activeButtons = document.getElementsByClassName('active');
    // console.log(activeButtons);
    for (const btn of activeButtons){
        btn.classList.remove('active');
    }
}