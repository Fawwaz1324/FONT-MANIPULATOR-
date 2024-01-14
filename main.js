nosex = 0;
nosey = 0;

function setup()
{
    canvas = createCanvas(550, 550)
    canvas.position(750, 150);

    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);

        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}

function draw()
{
    background("#6d90c9");
    fill("#e6e393");
    textSize(60);
    text("Hello", nosex, nosey);
}