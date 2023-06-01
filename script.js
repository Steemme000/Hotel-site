
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


///////////////////////////////////////

const images2 = document.querySelectorAll('.slider2 .slider_line2 img');
const sliderline2 = document.querySelector('.slider_line2');

let count2 = 0;
let width2;
init2();
function init2(){
    console.log('resize');
    width2 = document.querySelector('.slider2').offsetWidth;
    sliderline2.style.width = width2 * images2.length +'px';
    images2.forEach(item =>{
        item.style.width = width2 + 'px';
        item.style.height = 'auto';
    });
    rollSlider2();
}

window.addEventListener('resize', init2);
init2();

document.querySelector('.slider_prev2').addEventListener('click', function(){
    count2--;
    if(count2 < 0){
        count2 = images2.length -1;
    }
    rollSlider2();
});

document.querySelector('.slider_next2').addEventListener('click', function(){
    count2++;
    if(count2 >= images2.length){
        count2 = 0;
    }
    rollSlider2();
});

function rollSlider2(){
    sliderline2.style.transform = 'translate(-'+count2*width2 + 'px)';
}

///////////////////////////////
const images3 = document.querySelectorAll('.slider3 .slider_line3 img');
const sliderline3 = document.querySelector('.slider_line3');

let count3 = 0;
let width3;
init3();
function init3(){
    console.log('resize');
    width3 = document.querySelector('.slider3').offsetWidth;
    sliderline3.style.width = width3 * images3.length +'px';
    images3.forEach(item =>{
        item.style.width = width3 + 'px';
        item.style.height = 'auto';
    });
    rollSlider3();
}

window.addEventListener('resize', init3);
init3();

document.querySelector('.slider_prev3').addEventListener('click', function(){
    count3--;
    if(count3 < 0){
        count3 = images3.length -1;
    }
    rollSlider3();
});

document.querySelector('.slider_next3').addEventListener('click', function(){
    count3++;
    if(count3 >= images3.length){
        count3 = 0;
    }
    rollSlider3();
});

function rollSlider3(){
    sliderline3.style.transform = 'translate(-'+count3*width3 + 'px)';
}
/////////////////////////////
const images4 = document.querySelectorAll('.slider4 .slider_line4 img');
const sliderline4 = document.querySelector('.slider_line4');

let count4 = 0;
let width4;
init4();
function init4(){
    console.log('resize');
    width4 = document.querySelector('.slider4').offsetWidth;
    sliderline4.style.width = width4 * images4.length +'px';
    images4.forEach(item =>{
        item.style.width = width4 + 'px';
        item.style.height = 'auto';
    });
    rollSlider4();
}

window.addEventListener('resize', init4);
init4();

document.querySelector('.slider_prev4').addEventListener('click', function(){
    count4--;
    if(count4 < 0){
        count4 = images4.length -1;
    }
    rollSlider4();
});

document.querySelector('.slider_next4').addEventListener('click', function(){
    count4++;
    if(count4 >= images4.length){
        count4 = 0;
    }
    rollSlider4();
});

function rollSlider4(){
    sliderline4.style.transform = 'translate(-'+count4*width4 + 'px)';
}
/////////////////////////////
const images5 = document.querySelectorAll('.slider5 .slider_line5 img');
const sliderline5 = document.querySelector('.slider_line5');

let count5 = 0;
let width5;
init5();
function init5(){
    console.log('resize');
    width5 = document.querySelector('.slider5').offsetWidth;
    sliderline5.style.width = width5 * images5.length +'px';
    images5.forEach(item =>{
        item.style.width = width5 + 'px';
        item.style.height = 'auto';
    });
    rollSlider5();
}

window.addEventListener('resize', init5);
init5();

document.querySelector('.slider_prev5').addEventListener('click', function(){
    count5--;
    if(count5 < 0){
        count5 = images5.length -1;
    }
    rollSlider5();
});

document.querySelector('.slider_next5').addEventListener('click', function(){
    count5++;
    if(count5 >= images5.length){
        count5 = 0;
    }
    rollSlider5();
});

function rollSlider5(){
    sliderline5.style.transform = 'translate(-'+count5*width5 + 'px)';
}


/////////////////////////////
const images6 = document.querySelectorAll('.slider6 .slider_line6 img');
const sliderline6 = document.querySelector('.slider_line6');

let count6 = 0;
let width6;
init6();
function init6(){
    console.log('resize');
    width6 = document.querySelector('.slider6').offsetWidth;
    sliderline6.style.width = width6 * images6.length +'px';
    images6.forEach(item =>{
        item.style.width = width6 + 'px';
        item.style.height = 'auto';
    });
    rollSlider6();
}

window.addEventListener('resize', init6);
init6();

document.querySelector('.slider_prev6').addEventListener('click', function(){
    count6--;
    if(count6 < 0){
        count6 = images6.length -1;
    }
    rollSlider6();
});

document.querySelector('.slider_next6').addEventListener('click', function(){
    count6++;
    if(count6 >= images6.length){
        count6 = 0;
    }
    rollSlider6();
});

function rollSlider6(){
    sliderline6.style.transform = 'translate(-'+count6*width6 + 'px)';
}
////////////////////////////
const images7 = document.querySelectorAll('.slider7 .slider_line7 img');
const sliderline7 = document.querySelector('.slider_line7');

let count7 = 0;
let width7;
init7();
init7();
function init7(){
    console.log('resize');
    width7 = document.querySelector('.slider7').offsetWidth;
    sliderline7.style.width = width7 * images7.length +'px';
    images7.forEach(item =>{
        item.style.width = width7 + 'px';
        item.style.height = 'auto';
    });
    rollSlider7();
}

window.addEventListener('resize', init7);
init7();

document.querySelector('.slider_prev7').addEventListener('click', function(){
    count7--;
    if(count7 < 0){
        count7 = images7.length -1;
    }
    rollSlider7();
});

document.querySelector('.slider_next7').addEventListener('click', function(){
    count7++;
    if(count7 >= images7.length){
        count7 = 0;
    }
    rollSlider7();
});

function rollSlider7(){
    sliderline7.style.transform = 'translate(-'+count7*width7 + 'px)';
}
////////////////////////////


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



var btn = document.getElementById("myBtn2");
btn.onclick = function() {
  modal.style.display = "block";
}


var btn = document.getElementById("myBtn3");
btn.onclick = function() {
  modal.style.display = "block";
}


var btn = document.getElementById("myBtn4");
btn.onclick = function() {
  modal.style.display = "block";
}


var btn = document.getElementById("myBtn5");
btn.onclick = function() {
  modal.style.display = "block";
}


var btn = document.getElementById("myBtn6");
btn.onclick = function() {
  modal.style.display = "block";
}


var btn = document.getElementById("myBtn7");
btn.onclick = function() {
  modal.style.display = "block";
}

var btn = document.getElementById("myBtn8");
btn.onclick = function() {
  modal.style.display = "block";
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