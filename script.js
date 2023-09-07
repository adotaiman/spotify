console.log("welcome to spotify");

let songIndex=0;
let audioElement= new Audio('songs/s1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progress_bar');
let gif=document.getElementById('gif');
let songs=[
    {songName:"True Love", filepath:"songs/s1.mp3", coverpath:"images/c1.jpg"},
    {songName:"uplifting", filepath:"songs/s2.mp3", coverpath:"images/c1.jpg"},
    {songName:"Electric Rock", filepath:"songs/s3.mp3", coverpath:"images/c1.jpg"},
    {songName:"Introvert", filepath:"songs/s4.mp3", coverpath:"images/c1.jpg"},
    {songName:"Calm my mind", filepath:"songs/s5.mp3", coverpath:"images/c1.jpg"}
]
//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
       // masterPlay.innerHTML="fa-circle-pause";
       masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
console.log('progress');
progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
audioElement.currentTime=progressbar.value * audioElement.duration/100;
}
)