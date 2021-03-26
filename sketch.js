var canvas;
var music;
var ball;
var redSurface,orangeSurface,magentaSurface,indigoSurface;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces

    redSurface=createSprite(100,600,190,50);
    redSurface.shapeColor="Red";
    orangeSurface=createSprite(300,600,190,50);
    orangeSurface.shapeColor="Orange";
    magentaSurface=createSprite(500,600,190,50);
    magentaSurface.shapeColor="Magenta";
    indigoSurface=createSprite(700,600,190,50);
    indigoSurface.shapeColor="Indigo";

    //create box sprite and give velocity
    ball=createSprite(random(20,780),100,20,20);
    ball.shapeColor="white";
    ball.velocityY=4;
    ball.velocityX=-1;

    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    //background("black");
    if (ball.isTouching(redSurface)||ball.isTouching(orangeSurface)||ball.isTouching(magentaSurface)) {
        music.play();
    }
    if(ball.isTouching(redSurface)&&ball.bounceOff(redSurface)) {
        ball.shapeColor="Red";
        //music.play();
    }

    if(ball.isTouching(orangeSurface)&&ball.bounceOff(orangeSurface)) {
        ball.shapeColor="Orange";
       // music.play();
    }

    if(ball.isTouching(magentaSurface)&&ball.bounceOff(magentaSurface)) {
        ball.shapeColor="Magenta";
        //music.play();
    }

    

    if(ball.isTouching(indigoSurface)) {
        ball.shapeColor="Indigo";
        ball.velocityY=0;
        ball.velocityX=0;
        music.stop();
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
