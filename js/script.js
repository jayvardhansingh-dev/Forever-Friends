const btn=document.getElementById("enterBtn");

const loader=document.querySelector(".loader");

const music=document.getElementById("bgMusic");

btn.onclick=()=>{

music.play();

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

}

