/*console.log("welcome to spotify");

let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progress_bar');
let gif=document.getElementById('gif');
let songItems = document.getElementsByClassName('songItem');
let songItemPlay = document.querySelector('.songItemPlay'); // Fix the selector
let audioElement = new Audio('songs/s1.mp3');



let songs=[
    {songName:"True Love", filePath:"songs/s1.mp3", coverPath:"images/c1.jpg"},
    {songName:"uplifting", filePath:"songs/s2.mp3", coverPath:"images/c2.jpg"},
    {songName:"Electric Rock", filePath:"songs/s3.mp3", coverPath:"images/c3.jpg"},
    {songName:"Introvert", filePath:"songs/s4.mp3", coverPath:"images/c4.jpg"},
    {songName:"Calm my mind", filePath:"songs/s5.mp3", coverPath:"images/c5.jpg"}
]
Array.from(songItems).forEach((element, i) =>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('song_name')[0].innerText = songs[i].songName;

})
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


let songItems = document.getElementsByClassName('songItem');
let songItemPlay = document.querySelector('songItemPlay');
let audioElement= new Audio('songs/s1.mp3');

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
   index=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src=`songs/${index+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause');

  
})
})
  */

console.log("welcome to spotify");

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progress_bar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songItem');
let songItemPlay=document.getElementById('songItemPlay');
let audioElement = new Audio();
let songs = [
    { songName: "True Love", filePath: "songs/s1.mp3", coverPath: "images/c1.jpg" },
    { songName: "Uplifting", filePath: "songs/s2.mp3", coverPath: "images/c2.jpg" },
    { songName: "Electric Rock", filePath: "songs/s3.mp3", coverPath: "images/c3.jpg" },
    { songName: "Introvert", filePath: "songs/s4.mp3", coverPath: "images/c4.jpg" },
    { songName: "Calm my Mind", filePath: "songs/s5.mp3", coverPath: "images/c5.jpg" }
];

Array.from(songItems).forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('song_name')[0].innerText = songs[i].songName;
});

function loadSong(index) {
    audioElement.src = songs[index].filePath;
    audioElement.load();
    audioElement.play();
    gif.style.opacity = 1;
}

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        loadSong(songIndex);
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressbar.value = progress;
});

progressbar.addEventListener('change', () => {
    audioElement.currentTime = (progressbar.value / 100) * audioElement.duration;
});

Array.from(songItems).forEach((element, i) => {
    element.querySelector('.songItemPlay').addEventListener('click', () => {
        songIndex = i;
        loadSong(songIndex);
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause');
        songItemPlay.classList.remove('fa-circle-play');
        songItemPlay.classList.add('fa-circle-pause');
    });
});
