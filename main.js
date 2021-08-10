noseX=0
noseY=0
difference=0
rightWristX=0
leftWristX=0


function setup(){
  video= createCapture(VIDEO)
  video.size(550, 500)
  canvas=createCanvas(500, 500)
  canvas.position(560, 550)
  poseNet=ml5.poseNet(video,modelLoaded)
  poseNet.on('pose', gotPoses)
}
function draw(){
    background("grey");
  fill("blue")
  stroke("black")
  square(noseX, noseY, difference)
  image(video, noseX, noseY, 500, 500)
  

}

function modelLoaded(){
  console.log('posenet is initialized')
}
function gotPoses(results){
  if (results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
   console.log("noseX="+noseX+"noseY="+noseY)
   leftWristX=results[0].pose.leftWrist.x
   rightWristX=results[0].pose.rightWrist.x 
  difference=floor(leftWristX-rightWristX)
  }
}





