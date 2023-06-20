let input1 = document.querySelector("#inputSleeve")
let input2 = document.querySelector("#inputChest")
let button = document.querySelector("#update")
let span1 = document.querySelector(".sleevT")
let span2 = document.querySelector(".chestT")
let img = document.querySelector("#jacket")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let color3 = document.querySelector(".color3")
let divs = document.querySelectorAll(".sizes")


button.addEventListener("click", function() {
    console.log(input1.value)

})


input1.addEventListener("input", function(){
    span1.textContent = this.value + "cm";
})
input2.addEventListener("input", function(){
    span2.textContent = this.value + "cm";
})

function change1(){
    img.src = "./assets/jacket1.png"
    color1.classList.add("selected")
    color2.classList.remove("selected")
    color3.classList.remove("selected")
}
function change2(){
    img.src = "./assets/jacket3.png"
    color1.classList.remove("selected")
    color2.classList.add("selected")
    color3.classList.remove("selected")
}
function change3(){
    img.src = "./assets/jacket2.png"
    color1.classList.remove("selected")
    color2.classList.remove("selected")
    color3.classList.add("selected")
}

