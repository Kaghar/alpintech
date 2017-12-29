'use strict';

/******************** TESTIMONIALS CODE ****************************/

/******************** VAR SETS ****************************/

var previousNum;
var currNum = 1;
var rekOne = document.querySelector('#o-1');
var dotOne = document.querySelector('#a-1');
var current = document.querySelector('#o-1');
var currentDot = document.querySelector('#a-1');
var previous = document.querySelector('#o-2');
var previousDot = document.querySelector('#a-2');

/******************** PAGE LOAD FIRST TESTIMONIAL****************************/

dotOne.style.visibility = 'visible';
dotOne.style.opacity = '1';
rekOne.style.display = 'block';

/******************** CYCLE REPEAT ****************************/
function iff() {
    document.querySelector('#o-8').style.display = 'none';
    document.querySelector('#a-8').style.visibility = 'hidden';
}

/******************** PREV/NEXT BUTTON INIT ****************************/

function init() {
    rekOne.style.display = 'none';
    dotOne.style.visibility = 'hidden';
}

/******************** FULL BUTTON WORK ****************************/

function cycle() {
    halfCycle();
    previous = document.querySelector('#o-' + previousNum);
    previousDot = document.querySelector('#a-' + previousNum);
    previous.style.display = 'none';
    previousDot.style.visibility = 'hidden';
    previousDot.style.opacity = '0';
}

/******************** HALF OF BUTTON WORK ****************************/

function halfCycle() {
    current = document.querySelector('#o-' + currNum);
    currentDot = document.querySelector('#a-' + currNum);
    current.style.display = 'block';
    currentDot.style.visibility = 'visible';
    currentDot.style.opacity = '1';
}

/******************** BUTTON NEXT ****************************/

document.querySelector('.right').addEventListener('click', function () {
    init();
    currNum++;
    if (currNum > 8 || currNum === 0) {
        currNum = 1;
        iff();
    }
    previousNum = currNum - 1;
    if (previousNum > 8 || previousNum === 0) {
        previousNum = 2;
    }
    cycle();
});

/******************** BUTTON PREVIOUS ****************************/

document.querySelector('.left').addEventListener('click', function () {
    init();
    currNum--;
    if (currNum > 8 || currNum === 0) {
        currNum = 8;
        iff();
    }
    previousNum = currNum + 1;
    if (previousNum > 8 || previousNum === 0) {
        previousNum = 2;
    }
    cycle();
});

/******************** HOVER AND CLICK  ****************************/

function inside(hover) {
    hover.style.opacity = '1';
}
function outside(hover) {
    hover.style.opacity = '0';
}
function klik(x) {
    currNum = x;
    current.style.display = 'none';
    currentDot.style.visibility = 'hidden';
    halfCycle();
}

/******************** END  ****************************/
