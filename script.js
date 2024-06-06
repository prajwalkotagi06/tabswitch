let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.content_box');
tabs.forEach((tab1, index) => {
    tab1.addEventListener('click', ()=>{
        tabs.forEach(tab1 => {tab1.classList.remove('active')});
        tab1.classList.add('active');
        content.forEach(content => {(content.style.display = 'none')});
        content[index].style.display = 'block';
    })
    
});
