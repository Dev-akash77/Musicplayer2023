let musicName=[
  {
  songName:'Cheques',
  artist:'Subha',
  musicPath:'/Musci-1.mp3',
  imagePath:'/img-1.jpg',
},
{
  songName:'Gangsta',
  artist:'Ghibrun',
  musicPath:'/Music-2.mp3',
  imagePath:'/img-2.jpg',
},
{
  songName: 'Poti Nai Poti',
  artist: 'Srikanta Acharya',
  musicPath: '/Musci-3.mp3',
  imagePath: '/img-3.jpg',
},
{
  songName: 'Eleveted',
  artist: 'Subha',
  musicPath: '/Musci-4.mp3',
  imagePath: '/img-1.jpg',
},
{
  songName: 'Mummy Miral',
  artist: 'Devid Guetta',
  musicPath: '/Musci-5.mp3',
  imagePath: '/img-5.jpg',
},
{
  songName: 'Tu-Tu-Tu',
  artist: 'Gal Costa',
  musicPath: '/Musci-6.mp3',
  imagePath: '/img-6.jpg',
},
{
  songName: 'Saka Saka',
  artist: 'Osman Mir',
  musicPath: '/Music-7.mp3',
  imagePath: '/img-7.jpg',
},

{
  songName: 'One Love',
  artist: 'Subha',
  musicPath: '/Musci-8.mp3',
  imagePath: '/img-1.jpg',
}
]

let play=document.querySelector('.play')
let playIcon=document.querySelector('.fa-play')
let song=document.querySelector('audio')
let img=document.querySelector('.imgdiv')
let artist=document.querySelector('.artist')
let songName=document.querySelector('.sname')
let songImage=document.querySelector('.image')

let range=document.querySelector('.mcontrol')
let depend=true;
function playMusic(){
  depend=false;
  song.play();
  playIcon.classList.replace('fa-play','fa-pause');
  img.classList.add('rotate')
  range.max=song.duration;
  range.value=song.currentTime;
}
if (song.play()) {
  setInterval(() => {
    range.value = song.currentTime;
  }, 50);
}
function pauseMusic(){
  depend = true;
  song.pause();
  playIcon.classList.replace('fa-pause', 'fa-play');
  img.classList.remove('rotate')
}
play.addEventListener('click',()=>{
  if (depend==true) {
    playMusic();
  } else {
    pauseMusic();
  }
})
let score=0;
const load=(mname)=>{
  songName.innerHTML=mname.songName;
  artist.innerHTML=mname.artist;
  song.src=mname.musicPath;
  songImage.src=mname.imagePath;
}
load(musicName[score]);

let previous=document.querySelector('.fa-backward')
let next=document.querySelector('.fa-forward')

next.onclick=()=>{
   score=(score+1)%musicName.length;
   load(musicName[score]);
   playMusic();
}
previous.onclick=()=>{
  score=(score-1%musicName.length)%musicName.length;
load(musicName[score]);
  playMusic();
}
range.onchange=()=>{
  song.currentTime=range.value;
  song.play();
}
