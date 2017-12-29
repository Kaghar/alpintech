/******************** TESTIMONIALS CODE ****************************/

/******************** VAR SETS ****************************/

let numm;
let num = 1;
let rekOne = document.querySelector('#o-1');
let dotOne = document.querySelector('#a-1');
let current = document.querySelector('#o-1');
let currentDot = document.querySelector('#a-1');
let next = document.querySelector('#o-2');
let nextDot = document.querySelector('#a-2');

/******************** PAGE LOAD FIRST TESTIMONIAL****************************/

dotOne.style.visibility ='visible';
dotOne.style.opacity = '1';
rekOne.style.display ='block';



/******************** CYCLE REPEAT ****************************/

function iff(){
    document.querySelector('#o-8').style.display='none';
    document.querySelector('#a-8').style.visibility='hidden';
}

/******************** PREV/NEXT BUTTON INIT ****************************/

function init(){
    rekOne.style.display='none';
    dotOne.style.visibility='hidden';
}

/******************** FULL BUTTON WORK ****************************/

function cycle () {
    halfCycle();
    next = document.querySelector('#o-' + numm);
    nextDot = document.querySelector('#a-' + numm);
    next.style.display='none';
    nextDot.style.visibility='hidden';
    nextDot.style.opacity= '0';
}

/******************** HALF OF BUTTON WORK ****************************/

function halfCycle (){
    current = document.querySelector('#o-'+ num);
    currentDot = document.querySelector('#a-' + num);
    current.style.display ='block';
    currentDot.style.visibility ='visible';
    currentDot.style.opacity= '1';
}

/******************** BUTTON NEXT ****************************/

document.querySelector('.right').addEventListener('click',function (){
    init();
    num++;
    if (num > 8 || num === 0) {
        num = 1;
        
        iff();
    }
    numm = num - 1;
    if (numm >8 || numm === 0) {
        numm = 2;
    }
    cycle();
    
});

/******************** BUTTON PREVIOUS ****************************/

document.querySelector('.left').addEventListener('click',function (){
    init();
    num--;
    if (num > 8 || num === 0) {
        num = 8;
        iff();
    }
    numm = num + 1;
    if (numm >8 || numm === 0) {
        numm = 7;
    }
    cycle();
});


/******************** HOVER AND CLICK  ****************************/

function inside(hover){hover.style.opacity='1';}
function outside(hover){hover.style.opacity='0';}
function klik (x){
    num = x;
    current.style.display='none';
    currentDot.style.visibility='hidden';
    halfCycle();
}

/******************** END  ****************************/











