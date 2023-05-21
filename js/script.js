let button = document.querySelector(".button");

button.addEventListener("click", ()=>{
    button.classList.add("active");

    setTimeout(() => {
        button.classList.remove("active"); //  remove class  "active" after 6 second
        document.querySelector("i").classList.replace("fa-cloud-arrow-down", "fa-check");
        document.querySelector(".button_text").innerText = "Completed";
    },6000)

})