// --------nav toggle----------

let navBtn = document.getElementById('nav-toggle');
let links = document.getElementById('nav-links');


navBtn.addEventListener("click", ()=> {
    links.classList.toggle("show-links");
});

// ----------smooth scroll-----------

let scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link =>{

    link.addEventListener("click", e =>{
        // e.preventDefault();
        link.classList.remove("show-links")
        
        let id = e.target.getAttribute("href").slice(1);
        let element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });

    });
});