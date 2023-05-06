/*navbar scroll*/
const navEl=document.querySelector(".nav");
const headingEl=document.querySelector(".header-content");
const logoEl=document.getElementById("logo");

window.addEventListener("scroll",()=>{
    if(
        window.scrollY>
        headingEl.offsetTop-navEl.offsetHeight
        ){
        navEl.style.padding="12px 4%";
        logoEl.style.width="45px";
        logoEl.style.transition=".4s"
    }
    else{
        navEl.style.padding="20px 4%";
        logoEl.style.width="60px";
    }
})

/* navbar menu open and close*/

const menuOpenEl=document.querySelector(".fa-bars");
const downMenuEl=document.querySelector(".down-menu");
const closemenuel=document.getElementById("closemenu");

menuOpenEl.addEventListener("click",()=>{
    downMenuEl.style.display="flex";
    menuOpenEl.style.transition=".4s";
    menuOpenEl.style.display="none";
    closemenuel.style.display="flex";
})
closemenuel.addEventListener("click",()=>{
    downMenuEl.style.display="none";
    menuOpenEl.style.display="flex";
    closemenuel.style.display="none";
})

/*navbar scroll*/


/*youtube video player*/
const videoEl=document.getElementById("video");
const playEl=document.querySelector(".fa-play");
const closeEl=document.getElementById("close");

playEl.addEventListener("click",()=>{
    videoEl.style.display="flex";
})
closeEl.addEventListener("click",()=>{
    videoEl.style.display="none";
})

/* our philosophy family*/

const element1=document.querySelector(".element1");
const element2=document.querySelector(".element2");
const element3=document.querySelector(".element3");
const element4=document.querySelector(".element4");

const column1=document.querySelector(".six-column1");
const column2=document.querySelector(".six-column2");
const column3=document.querySelector(".six-column3");
const column4=document.querySelector(".six-column4");

element2.addEventListener("click",()=>{
    column2.style.display="flex";
    column1.style.display="none";
    column3.style.display="none";
    column4.style.display="none";
})

element3.addEventListener("click",()=>{
    column2.style.display="none";
    column1.style.display="none";
    column3.style.display="flex";
    column4.style.display="none";
})

element4.addEventListener("click",()=>{
    column2.style.display="none";
    column1.style.display="none";
    column3.style.display="none";
    column4.style.display="flex";
})

element1.addEventListener("click",()=>{
    column2.style.display="none";
    column1.style.display="flex";
    column3.style.display="none";
    column4.style.display="none";
})