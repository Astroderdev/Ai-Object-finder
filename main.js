var status_check = "";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    background("lightblue");
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 640, 420);
}