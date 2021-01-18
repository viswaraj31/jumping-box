var canvas;
var music;
var box;
var p1,p2,p3,p4;
var w,w1,w2;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box = createSprite(400,300,20,20);
    box.velocityX=-6;
    box.velocityY=3;

    p1 = createSprite(80,580,160,20);
    p1.shapeColor="blue";

    p2 = createSprite(270,580,200,20);
    p2.shapeColor="red";

    p3 = createSprite(490,580,200,20);
    p3.shapeColor="green";

    p4 = createSprite(700,580,180,20);
    p4.shapeColor="black";

    w = createSprite(400,0,800,1);

    w1 = createSprite(0,400,10,800);

    w2 = createSprite(740,400,10,800);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(box.isTouching(p1)){
        box.shapeColor="blue";
    }

    if(box.isTouching(p2)){
        box.shapeColor="red";
    }

    if(box.isTouching(p3)){
        box.shapeColor="green";
    }

    if(box.isTouching(p4)){
        box.shapeColor="black";
    }

    if(box.isTouching(p1||p2||p3||p4)){
        music.play();
    }

    box.bounceOff(w);
    box.bounceOff(w1);
    box.bounceOff(w2);
    box.bounceOff(p1);
    box.bounceOff(p2);
    box.bounceOff(p3);
    box.bounceOff(p4);
    drawSprites();
}
