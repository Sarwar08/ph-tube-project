// console.log(document.getElementById('html').attributes[2]);

document.getElementById('theme-control').addEventListener('click', (event) => {
    // event.preventDefault();
    const parentHtml = document.getElementById('html');
    const attrValue = parentHtml.attributes[2];
    
    if(attrValue.value === 'dark'){
        attrValue.value = 'light';
    }
    else{
        attrValue.value = 'dark';
    }
    // console.log(event.target);
})
