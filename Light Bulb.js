Status = "";
LightBulb_image = "";

function preload(){
    LightBulb_image = loadImage("lightbulb.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(LightBulb_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(LightBulb_image,0,0,640,350);
    if( status != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence *100);
            text(objects[i].label+""+percent+"%", objects[i].x+ 15, objects[i].y+ 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        }
    fill("#FF0000");
    text("lightbulb", 45, 75);
    noFill();
    stroke("#FF0000");
    rect( 30, 60, 450, 350 );
    }
    
    function back(){
        window.location = "index.html";
}