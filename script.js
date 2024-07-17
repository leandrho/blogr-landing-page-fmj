const menuoc = document.querySelector('.menu-oc');
menuoc.addEventListener('click',(e)=>{
    console.log('click')
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show-navbar');
});

const navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach((link)=>{
    link.addEventListener('focusout',(e)=>{
        e.preventDefault();
        const menus = document.querySelectorAll('.menu');
        menus.forEach((m)=>{
                m.classList.remove('active');
        });
    });
    link.addEventListener('click',(e)=>{
        const li = link.closest('li');
        const curmenu = li.querySelector('.menu');
        if(curmenu)
            curmenu.classList.toggle('active');
    })
   
});