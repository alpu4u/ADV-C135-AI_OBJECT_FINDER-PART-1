objectName = "";
statusModel = "";
function preload()
{
    video = createCapture(VIDEO);
    video.hide();
}
function setup()
{ 
    canvas= createCanvas(480, 380);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
    objectName = document.getElementById("objName").value;   
}

function modelLoaded()
{
    console.log('Model Loaded');
    statusModel = true; 
}