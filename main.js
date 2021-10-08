Webcam.set({
width:350,
height:200,
image_format: 'png',
png_quality=90
});

camera=document.getElementById("camera");

webcam.attach('#camera');

functionn take_snapshot()
{
    webcam.snap(function(data_url)  {
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_url+'"/>;
    });

console.log('m15 version;', m15.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

funtion modelLoaded () {
    console.log('model loaded');
}

function speak() {
    var synth=window.speechSynthesis;
    speak_data_1 =  "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is "+prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}

function check()
{
    img=document.getElementById('captured_image');
        classifier.classify(img, gotResult);
}

funtion gotresult(error, results) {
if (error)  {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction_1 =resluts[0].label;
    prediction_2 =resluts[1].label;
    speak();
    if (reults=[0].label=="happy")
    {
        document.getElementById("update_emoji").innerHTML ="&#128522;"
    }
    if (reults=[0].label=="sad")
    {
        document.getElementById("update_emoji").innerHTML ="&#128532;"
    }
    if (reults=[0].label=="angry")
    {
        document.getElementById("update_emoji").innerHTML ="&#128545;"
    }
    if (reults=[0].label=="happy")
    {
        document.getElementById("update_emoji").innerHTML ="&#128512;"
    }
    if (reults=[0].label=="sad")
    {
        document.getElementById("update_emoji").innerHTML ="&#128546;"
    }
    if (reults=[0].label=="angry")
    {
        document.getElementById("update_emoji").innerHTML ="&#128548;"
    }
}
}