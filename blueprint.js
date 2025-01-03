const title = document.querySelector(".title");
title.addEventListener("click",function(){
  window.location.href="Homepage.html";
})

document.querySelector(".day-night input").addEventListener("change", () => {
    document.querySelector("body").classList.add("toggle");
    setTimeout(() => {
        document.querySelector("body").classList.toggle("light");

        setTimeout(
            () => document.querySelector("body").classList.remove("toggle"),
            10
        );
    }, 5);
});

const play_button=document.querySelector(".play_space");
play_button.addEventListener("click",()=>{
    play_button.classList.toggle("selected_play_area");

})