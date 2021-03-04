const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//var

var engine, world;
var drops = [];
var rand;

var maxDrops=100;


function preload(){
}   

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    drawSprites();

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }   
    }


    

