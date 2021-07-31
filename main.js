Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,

    constaints:{
        facingMode:"environment"
    }
})

camera=document.getElementById("camera")
Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap (function(pic)
    {
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+pic+'"/>'
    })
 
}
console.log('ml5 version',ml5.version)
classifier=ml5.imageClassifier('MobileNet',modelLoaded)

function modelLoaded(){
  console.log ('Model Loaded!')
}
function check(){
   img= document.getElementById("captured_image")
   classifier.classify(img,gotResult)
}
function gotResult(error,result){
    if(error){
       console.error(error)
    }else{
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label
    }
}