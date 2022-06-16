song1=""
song2=""
leftWristX=0
rightWristX=0
leftWristY=0
rightWristY=0
scoreLeftWrist = 0
scoreRightWrist = 0
status1= ""
status2= ""

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

    fill("red")
    stroke("blue")

   status1 = song1.isPlaying()   
   status2= song2.isPlaying()
    if(scoreLeftWrist > 0.2){
        circle(LeftWristX , LeftWristY , 20)

        song2.stop()

        if(status1 == false){
            song1.play()
            document.getElementById("song_name").innerHTML="song name: Peter Pan" 
        }
    }

    if(scoreRightWrist > 0.2){
        circle(RightWristX , RightWristY , 20)

        song1.stop()

        if(status2 == false){
            song2.play()
            document.getElementById("song_name").innerHTML="song name: Harry Potter theme song" 
        }
    }
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

        scoreLeftWrist= results[0].pose.leftWrist.confidence
        scoreRightWrist= results[0].pose.rightWrist.confidence

        console.log(scoreLeftWrist)
        console.log(scoreRightWrist)
    }
}
