
nose_x = 0;
nose_y = 0;
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
function modelloaded(){
    console.log('poseNet is initialized');
}
function draw(){
    image(video, 0,0,300,300);
    image(clown_nose, nose_x, nose_y, 30, 30);
}
function take_snapshot(){
    save('image.png');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x-18;
        nose_y = results[0].pose.nose.y-18;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

