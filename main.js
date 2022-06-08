song1=""
song2=""
leftWristX=0
rightWristX=0
leftWristY=0
rightWristY=0

function preload(){
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}

function setup(){
canvas= createCanvas(500 , 400)
canvas.center()
video= createCapture(VIDEO)
video.hide()

posenet = ml5.poseNet(video , modelLoaded)
posenet.on("pose" , gotPoses)
}

function draw(){
    image(video , 0 , 0 , 500 , 400 )
}

function play(){
    song1.play()
}

function modelLoaded(){
    console.log("Posenet is initialized!")
}

function gotPoses(results){
    if(results.length > 0){

        console.log(results)

        leftWristX= results[0].pose.leftWrist.x
        rightWristX= results[0].pose.rightWrist.x
        leftWristY= results[0].pose.leftWrist.y
        rightWristY= results[0].pose.rightWrist.y

        console.log(leftWristX , rightWristX)
        console.log(leftWristY , rightWristY)
    }
}
