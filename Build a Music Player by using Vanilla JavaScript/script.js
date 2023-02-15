const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

//Song title

const songs = ["2", "3", "1"];

//keep track of songs

let songIndex = 2;

// Initially load song info DOM

loadSong(songs[songIndex]);

// update song details

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.png`;
}
function playSong() {
    musicContainer.classList.add("play");
    musicContainer.classList.remove("pause");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");
    audio.play()
}
function pauseSong() {
    musicContainer.classList.remove("play");
    musicContainer.classList.add("pause");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    audio.pause()
}
function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    playSong()
}
function nextSong(){
    songIndex++
    if(songIndex > songs.length -1){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    pauseSong()
}

function updateProgress(e){
    const{duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}
function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration

}
// Event Listeners
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change song events

prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)
audio.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener('click',setProgress)
audio.addEventListener('ended',nextSong)

