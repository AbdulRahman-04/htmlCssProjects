const profession = document.getElementById('profession');
const list = ["Software Engineer", "Full Stack Web Devoloper", "Full Stack App Devoloper"]
let currentIndex = 0;
const newVar = document.getElementById('newVar')

function changeProfession(){
    profession.style.opacity = 0;
    setTimeout(()=>{
        profession.textContent = list[currentIndex];
        profession.style.opacity = 1;
        currentIndex = (currentIndex+1) % list.length;
    }, 500)
}

profession.textContent = list[currentIndex]
profession.style.opacity = 1;

setInterval(changeProfession, 3000)