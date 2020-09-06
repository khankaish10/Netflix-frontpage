var  plusBtn = document.querySelectorAll('.question i');
var questioncontent = document.querySelectorAll('.questioncontent');


Array.from(plusBtn).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        let quesActive = e.target.parentElement.parentElement.children[1];
        quesActive.classList.toggle('questioncontentActive');       
    });
})
