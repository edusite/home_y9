


// Music 

//     name: "Here is the music name",
//     img: "image name here - img must be in .jpg formate and it's inside the ../img2 folder of this project folder",
//     src: "music name here - img must be in .mp3 formate and it's inside the ../media folder of this project folder"

let allMusic = [
    {
        name: "Ambient piano",
        img: "music-1",
        src: "music-1"
    },
    {
        name: "Peaceful piano",
        img: "music-2",
        src: "music-2"
    },
    {
        name: "Jazz cafe",
        img: "music-3",
        src: "music-3"
    },
    {
        name: "Jazzy abstract beat",
        img: "music-4",
        src: "music-4"
    },
    {
        name: "Night jazz",
        img: "music-5",
        src: "music-5"
    },
    {
        name: "Lofi-study",
        img: "music-6",
        src: "music-6"
    },
    {
        name: "Lofi chill",
        img: "music-7",
        src: "music-7"
    },
    {
        name: "Lofi vintage",
        img: "music-8",
        src: "music-8"
    },
    {
        name: "Relaxed vlog night street",
        img: "music-9",
        src: "music-9"
    },
    {
        name: "Relaxing and light",
        img: "music-10",
        src: "music-10"
    },
    {
        name: "Mindfulness relaxation - meditation",
        img: "music-11",
        src: "music-11"
    },
    {
        name: "Soft gentle piano - relaxation",
        img: "music-12",
        src: "music-12"
    },
    {
        name: "Life of a butterfly",
        img: "music-13",
        src: "music-13"
    },
    {
        name: "Waves and tears - sad piano music",
        img: "music-14",
        src: "music-14"
    },
    {
        name: "Ocean waves - 1",
        img: "music-15",
        src: "music-15"
    },
    {
        name: "Ocean waves - 2",
        img: "music-16",
        src: "music-16"
    },
    {
        name: "Ocean waves - 3",
        img: "music-17",
        src: "music-17"
    },
    {
        name: "Lake waves",
        img: "music-18",
        src: "music-18"
    },
    {
        name: "Lake waves lapping gently against rocks",
        img: "music-19",
        src: "music-19"
    },
    {
        name: "Lake waves lapping on the shore",
        img: "music-20",
        src: "music-20"
    },
    {
        name: "Lake waves lapping gently on the beach",
        img: "music-21",
        src: "music-21"
    },
    {
        name: "Water stream",
        img: "music-22",
        src: "music-22"
    },
    {
        name: "Relaxing mountains rivers streams running water",
        img: "music-23",
        src: "music-23"
    },
    {
        name: "River in icelandic nature ambience",
        img: "music-24",
        src: "music-24"
    },
    {
        name: "Dripping water cave",
        img: "music-25",
        src: "music-25"
    },
    {
        name: "Waterfall",
        img: "music-26",
        src: "music-26"
    },
    {
        name: "Waterfall ambient sounds",
        img: "music-27",
        src: "music-27"
    },
    {
        name: "Waterfall 2",
        img: "music-28",
        src: "music-28"
    },
    {
        name: "What midnight sounds like",
        img: "music-29",
        src: "music-29"
    },
    {
        name: "Nature background in the woods",
        img: "music-30",
        src: "music-30"
    },
    {
        name: "Windy forest ambience",
        img: "music-31",
        src: "music-31"
    },
    {
        name: "Smoke",
        img: "music-32",
        src: "music-32"
    },
    {
        name: "Wind",
        img: "music-33",
        src: "music-33"
    },
    {
        name: "Wind breeze",
        img: "music-34",
        src: "music-34"
    },
    {
        name: "Wind gust",
        img: "music-35",
        src: "music-35"
    },
    {
        name: "Wind artic cold",
        img: "music-36",
        src: "music-36"
    },
    {
        name: "Footsteps in deep snow",
        img: "music-37",
        src: "music-37"
    },
    {
        name: "Hurricane",
        img: "music-38",
        src: "music-38"
    },
    {
        name: "Heavy rain",
        img: "music-39",
        src: "music-39"
    },
    {
        name: "Rain and thunder nature sounds",
        img: "music-40",
        src: "music-40"
    },
    {
        name: "Windy forest ambience",
        img: "music-41",
        src: "music-41"
    },
    {
        name: "Rain Drips",
        img: "music-42",
        src: "music-42"
    },
    {
        name: "Rain sounds relaxing noise and sound of summer rain",
        img: "music-43",
        src: "music-43"
    },

];


const musicWrapper = document.querySelector(".musicWrapper"),
musicImg = musicWrapper.querySelector(".img-area img"),
musicName = musicWrapper.querySelector(".song-details .name"),
playPauseBtn = musicWrapper.querySelector(".play-pause"),
prevBtn = musicWrapper.querySelector("#prev"),
nextBtn = musicWrapper.querySelector("#next"),
mainAudio = musicWrapper.querySelector("#main-audio"),
progressArea = musicWrapper.querySelector(".progress-area"),
progressBar = progressArea.querySelector(".progress-bar"),
musicList = musicWrapper.querySelector(".music-list"),
moreMusicBtn = musicWrapper.querySelector("#more-music"),
closemoreMusic = musicList.querySelector("#close");

let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    playingSong(); 
});

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    
    musicImg.src = `../img2/${allMusic[indexNumb - 1].src}.jpg`;
    mainAudio.src = `../media/${allMusic[indexNumb - 1].src}.mp3`;
}

//play music function
function playMusic(){
    musicWrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

//pause music function
function pauseMusic(){
    musicWrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

//prev music function
function prevMusic(){
    musicIndex--; //decrement of musicIndex by 1
    //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong(); 
}

//next music function
function nextMusic(){
    musicIndex++; //increment of musicIndex by 1
    //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong(); 
}

// play or pause button event
playPauseBtn.addEventListener("click", ()=>{
    const isMusicPlay = musicWrapper.classList.contains("paused");
    //if isPlayMusic is true then call pauseMusic else call playMusic
    isMusicPlay ? pauseMusic() : playMusic();
    playingSong();
});

//prev music button event
prevBtn.addEventListener("click", ()=>{
    prevMusic();
});

//next music button event
nextBtn.addEventListener("click", ()=>{
    nextMusic();
});

// update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = musicWrapper.querySelector(".current-time"),
    musicDuartion = musicWrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", ()=>{
        // update song total duration
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if(totalSec < 10){ //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });
    // update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){ //if sec is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth; //getting width of progress bar
    let clickedOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration
    
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); //calling playMusic function
    playingSong();
});

//change loop, shuffle, repeat icon onclick
const repeatBtn = musicWrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", ()=>{
    let getText = repeatBtn.innerText; //getting this tag innerText
    switch(getText){
        case "repeat":
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
        break;
        case "repeat_one":
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title", "Playback shuffled");
        break;
        case "shuffle":
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title", "Playlist looped");
        break;
    }
});

//code for what to do after song ended
mainAudio.addEventListener("ended", ()=>{
  // we'll do according to the icon means if user has set icon to
  // loop song then we'll repeat the current song and will do accordingly
    let getText = repeatBtn.innerText; //getting this tag innerText
    switch(getText){
        case "repeat":
            nextMusic(); //calling nextMusic function
        break;
        case "repeat_one":
            mainAudio.currentTime = 0; //setting audio current time to 0
            loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
            playMusic(); //calling playMusic function
        break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1); //genereting random index/numb with max range of array length
            do{
              randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            }while(musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
            musicIndex = randIndex; //passing randomIndex to musicIndex
            loadMusic(musicIndex);
            playMusic();
            playingSong();
        break;
    }
});

//show music list onclick of music icon
moreMusicBtn.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
});
closemoreMusic.addEventListener("click", ()=>{
    moreMusicBtn.click();
});

const ulTag = musicWrapper.querySelector("ul");
// create li tags according to array length for list
for (let i = 0; i < allMusic.length; i++) {
    // pass the song name, artist from the array
    let liTag = `<li li-index="${i + 1}">
                    <div class="row">
                        <span>${allMusic[i].name}</span>
                    </div>
                    <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                    <audio class="${allMusic[i].src}" src="../media/${allMusic[i].src}.mp3"></audio>
                </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag); //inserting the li inside ul tag

    let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
    liAudioTag.addEventListener("loadeddata", ()=>{
        let duration = liAudioTag.duration;
        let totalMin = Math.floor(duration / 60);
        let totalSec = Math.floor(duration % 60);
        if(totalSec < 10){ //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        };
      liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`; //passing total duation of song
      liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); //adding t-duration attribute with total duration value
    });
}

//play particular song from the list onclick of li tag
function playingSong(){
    const allLiTag = ulTag.querySelectorAll("li");
  
    for (let j = 0; j < allLiTag.length; j++) {
        let audioTag = allLiTag[j].querySelector(".audio-duration");
    
        if(allLiTag[j].classList.contains("playing")){
            allLiTag[j].classList.remove("playing");
            let adDuration = audioTag.getAttribute("t-duration");
            audioTag.innerText = adDuration;
        }

        //if the li tag index is equal to the musicIndex then add playing class in it
        if(allLiTag[j].getAttribute("li-index") == musicIndex){
            allLiTag[j].classList.add("playing");
            audioTag.innerText = "Playing";
        }

        allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
}

//particular li clicked function
function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; //updating current song index with clicked li index
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

