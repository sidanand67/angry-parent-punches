const image = document.querySelector("#user-photo");
const leftHand = document.getElementById("left-hand"); 
const rightHand = document.getElementById("right-hand"); 
const fileInput = document.querySelector("#file-input"); 
const name = document.getElementById("name"); 
const bam = document.getElementById("bam"); 

document.querySelector("#submit-btn").addEventListener("click", function(){renderImage(fileInput)}); 

leftHand.addEventListener("click", function(){punch(0); yell();}); 
rightHand.addEventListener("click", function(){punch(1); yell();}); 


function renderImage(input){
    if(input.files && input.files[0] && name.value.length > 0){
        let reader = new FileReader(); 
        reader.onload = function(e){
            image.setAttribute("src", e.target.result); 
        }
        reader.readAsDataURL(input.files[0]); 
        document.querySelector('section').style.visibility = "visible"; 
        document.querySelector('footer').style.visibility = "visible"; 
    }
}

function punch(hand){
    if(hand === 0){
        leftHand.style.transform = "translate(250px, -70px)";
        bam.style.visibility = "visible"; 
        setTimeout(() => {
            leftHand.style.transform = "translate(0, 0)";
            bam.style.visibility = "hidden"; 
        }, 200);
    }
    else {
        rightHand.style.transform = "translate(-250px, -70px)"; 
        bam.style.visibility = "visible"; 
        setTimeout(() => {
            rightHand.style.transform = "translate(0, 0)";
            bam.style.visibility = "hidden"; 
        }, 200);
    }
}

function yell() {
    let music = new Audio("./assets/punch.wav");
    music.play(); 
}