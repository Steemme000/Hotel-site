
const images = document.querySelectorAll('.slider .slider_line img');
const sliderline = document.querySelector('.slider_line');

let count = 0;
let width;
init();
function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderline.style.width = width * images.length +'px';
    images.forEach(item =>{
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider_prev').addEventListener('click', function(){
    count--;
    if(count < 0){
        count = images.length -1;
    }
    rollSlider();
});

document.querySelector('.slider_next').addEventListener('click', function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    sliderline.style.transform = 'translate(-'+count*width + 'px)';
}




// Получение модального окна
var modal = document.getElementById("myModal");

// Получение кнопки открытия формы
var btn = document.getElementById("myBtn");

// Получение кнопки закрытия
var span = document.getElementsByClassName("close")[0];

// При клике на кнопку, показать модальное окно
btn.onclick = function() {
  modal.style.display = "block";
}

// При клике на кнопку закрытия, скрыть модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// При клике за пределами модального окна, скрыть его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('myForm');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error ===0){
            form.classList.add('_sending');
            let response = await fetch('sendmail.php',{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            }else{
                alert('Ошибка');
                form.classList.remove('_sending');
            }
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index<formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else{
                if (input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\2+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

  });