/* ==========================================================
                    ELEMENTS
========================================================== */

const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");

const bell = document.getElementById("bell");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const backToTop = document.getElementById("backToTop");

/* ==========================================================
                    ENTER SCHOOL
========================================================== */

enterBtn.addEventListener("click", () => {

    bell.play();

    setTimeout(() => {

        loader.classList.add("hide");

        bgMusic.volume = 0.35;

        bgMusic.play().catch(() => {});

    }, 1500);

});

/* ==========================================================
                    MUSIC BUTTON
========================================================== */

let musicPlaying = true;

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();

        musicBtn.textContent = "🎵";

        musicPlaying = true;

    } else {

        bgMusic.pause();

        musicBtn.textContent = "🔇";

        musicPlaying = false;

    }

});

/* ==========================================================
                    MOBILE MENU
========================================================== */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ==========================================================
                    BACK TO TOP
========================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
                    LENIS SMOOTH SCROLL
========================================================== */

const lenis = new Lenis({

    duration: 1.2,

    smoothWheel: true

});

function raf(time) {

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

/* ==========================================================
                    GSAP HERO
========================================================== */

gsap.from(".hero-tag", {

    y: 50,

    opacity: 0,

    duration: 1,

    delay: 1

});

gsap.from(".hero h1", {

    y: 70,

    opacity: 0,

    duration: 1,

    delay: 1.2

});

gsap.from(".hero h2", {

    y: 70,

    opacity: 0,

    duration: 1,

    delay: 1.5

});

gsap.from(".hero p", {

    y: 70,

    opacity: 0,

    duration: 1,

    delay: 1.8

});

gsap.from(".hero-buttons", {

    y: 70,

    opacity: 0,

    duration: 1,

    delay: 2

});

/* ==========================================================
                    SCROLL ANIMATIONS
========================================================== */

gsap.utils.toArray(".section").forEach(section => {

    gsap.from(section, {

        opacity: 0,

        y: 80,

        duration: 1,

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        }

    });

});

/* ==========================================================
                    GALLERY LIGHTBOX
========================================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

const currentImage = document.getElementById("currentImage");
const totalImages = document.getElementById("totalImages");

let imageIndex = 0;

totalImages.textContent = galleryImages.length;

function openImage(index){

    imageIndex = index;

    lightbox.classList.add("active");

    lightboxImage.src = galleryImages[index].src;

    currentImage.textContent = index + 1;

    document.body.style.overflow = "hidden";

}

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        openImage(index);

    });

});

function updateImage(){

    lightboxImage.src = galleryImages[imageIndex].src;

    currentImage.textContent = imageIndex + 1;

}

nextImage.addEventListener("click",()=>{

    imageIndex++;

    if(imageIndex>=galleryImages.length){

        imageIndex=0;

    }

    updateImage();

});

prevImage.addEventListener("click",()=>{

    imageIndex--;

    if(imageIndex<0){

        imageIndex=galleryImages.length-1;

    }

    updateImage();

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

    document.body.style.overflow="auto";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

/* ==========================================================
                    KEYBOARD CONTROLS
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

        nextImage.click();

    }

    if(e.key==="ArrowLeft"){

        prevImage.click();

    }

    if(e.key==="Escape"){

        closeLightbox.click();

    }

});

/* ==========================================================
                    MOBILE SWIPE
========================================================== */

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].screenX;

    if(touchEndX < touchStartX - 60){

        nextImage.click();

    }

    if(touchEndX > touchStartX + 60){

        prevImage.click();

    }

});

/* ==========================================================
                    FRIEND MODAL
========================================================== */

const friendModal = document.getElementById("friendModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalText = document.getElementById("modalText");

const friendButtons = document.querySelectorAll(".friend-btn");

const friendData = [

{

name:"Lucky",

image:"assets/images/friends/lucky.jpeg",

memory:"Every lunch break with Lucky became a story worth remembering forever."

},

{

name:"Anurag",

image:"assets/images/friends/anurag.jpeg",

memory:"Our maths discussions were sometimes harder than the exams."

},

{

name:"Nishant",

image:"assets/images/friends/nishant.jpeg",

memory:"His jokes made every classroom brighter."

},

{

name:"Jai",

image:"assets/images/friends/jai.jpeg",

memory:"A loyal friend who always stood beside everyone."

},

{

name:"Kashish",

image:"assets/images/friends/kashish.jpeg",

memory:"Creative, positive and unforgettable."

},

{

name:"Gudiya",

image:"assets/images/friends/gudiya.jpeg",

memory:"Her kindness made school feel like home."

},

{

name:"Manshi",

image:"assets/images/friends/manshi.jpeg",

memory:"Always prepared, always supportive."

},

{

name:"Nitin",

image:"assets/images/friends/nitin.jpeg",

memory:"Sports, fun and endless energy."

},

{

name:"Aashu",

image:"assets/images/friends/aashu.jpeg",

memory:"The fun never stopped around him."

},

{

name:"Vishnu",

image:"assets/images/friends/vishnu.jpeg",

memory:"A smart friend with unforgettable memories."

},

{

name:"Nishant",

image:"assets/images/friends/nishant2.jpeg",

memory:"Tan-Tan for All."

}

];

friendButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        modalImage.src = friendData[index].image;

        modalName.textContent = friendData[index].name;

        modalText.textContent = friendData[index].memory;

        friendModal.classList.add("active");

        document.body.style.overflow="hidden";

    });

});

closeModal.addEventListener("click",()=>{

    friendModal.classList.remove("active");

    document.body.style.overflow="auto";

});

friendModal.addEventListener("click",(e)=>{

    if(e.target===friendModal){

        friendModal.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

/* ==========================================================
                    ACTIVE NAVIGATION
========================================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================================
                    MUSIC LOCAL STORAGE
========================================================== */

const savedMusic = localStorage.getItem("music");

if (savedMusic === "off") {

    bgMusic.pause();

    musicBtn.textContent = "🔇";

}

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        localStorage.setItem("music", "on");

    } else {

        localStorage.setItem("music", "off");

    }

});

/* ==========================================================
                    GUEST BOOK
========================================================== */

const memoryForm = document.querySelector(".memory-form");

if (memoryForm) {

    memoryForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = memoryForm.querySelector("input").value.trim();
        const message = memoryForm.querySelector("textarea").value.trim();

        if (!name || !message) {

            alert("Please fill in all fields.");

            return;

        }

        alert(
            "Thank you " +
            name +
            "! ❤️ Your memory has been recorded."
        );

        memoryForm.reset();

    });

}

/* ==========================================================
                    HERO PARALLAX
========================================================== */

window.addEventListener("scroll", () => {

    const heroBg = document.querySelector(".hero-bg");

    if (heroBg) {

        heroBg.style.transform =
            `translateY(${window.scrollY * 0.35}px)`;

    }

});

/* ==========================================================
                    FRIEND CARD ANIMATION
========================================================== */

gsap.utils.toArray(".friend-card").forEach((card, index) => {

    gsap.from(card, {

        opacity: 0,

        y: 80,

        duration: 0.8,

        delay: index * 0.05,

        scrollTrigger: {

            trigger: card,

            start: "top 85%"

        }

    });

});

/* ==========================================================
                    GALLERY ANIMATION
========================================================== */

gsap.utils.toArray(".gallery-grid img").forEach((image, index) => {

    gsap.from(image, {

        opacity: 0,

        scale: 0.8,

        duration: 0.6,

        delay: index * 0.04,

        scrollTrigger: {

            trigger: image,

            start: "top 90%"

        }

    });

});

/* ==========================================================
                    TIMELINE ANIMATION
========================================================== */

gsap.utils.toArray(".timeline-item").forEach(item => {

    gsap.from(item, {

        x: -80,

        opacity: 0,

        duration: 0.8,

        scrollTrigger: {

            trigger: item,

            start: "top 85%"

        }

    });

});

/* ==========================================================
                    FLOATING BUTTON ANIMATION
========================================================== */

gsap.to("#musicBtn", {

    y: -8,

    repeat: -1,

    yoyo: true,

    duration: 1.6,

    ease: "power1.inOut"

});

gsap.to(".back-to-top", {

    y: -6,

    repeat: -1,

    yoyo: true,

    duration: 1.5,

    ease: "power1.inOut"

});

/* ==========================================================
                    LOADER SAFETY
========================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 5000);

});

/* ==========================================================
                    CONSOLE MESSAGE
========================================================== */

console.log(
`🏫 H.S Public School Memories
Designed & Developed by Jayvardhan Singh ❤️`
);