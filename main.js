nosex=0;
nosey=0;
rwristx=0;
lwristx=0;
size=0;

function setup() {
    canvas=createCanvas(700,600);
    canvas.position(560,160);
    v=createCapture(VIDEO);
    v.size(500,400);
    q=ml5.poseNet(v,h);
    q.on('pose',ans);
}

function h() {
    console.log("poseNet is active");
}

function ans(result) {
    if (result.length>0) {
        console.log(result);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
        rwristx=result[0].pose.rightWrist.x;
        lwristx=result[0].pose.leftWrist.x;
        size=floor(lwristx-rwristx);
        console.log("nose x is ",nosex);
        console.log("nose y is ",nosey);
        console.log("leftwrist x is ",rwristx);
        console.log("rightwrist x is ",lwristx);
    }
}

function draw() {
    background("HotPink");
    document.getElementById("j").innerHTML="Width & Height of square is-" + size + "px";
    fill("Ivory");
    stroke("Tan");
    square(nosex,nosey,size);   
}