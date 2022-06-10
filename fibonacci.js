const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1000;
let fibs = [1,1];
let scale = 1;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    angleMode(DEGREES);
    initFibs();
}

function draw() {
    background(200);
    translate(CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
    for(let i=0;i<fibs.length;i++){
        const fib = fibs[i]*scale;
        rect(0,0,fib,fib);
        arc(fib, 0,2*fib,2*fib,90,180);
        translate(fib,fib);
        rotate(-90);
    }
    scale *= 0.99;
}

function addFib() {
    const fibLen = fibs.length;
    fibs.push(fibs[fibLen-1]+fibs[fibLen-2]);
}

function initFibs(){
    for(let i=0;i<100;i++){
        addFib();
    }
}