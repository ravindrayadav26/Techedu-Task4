let song = document.querySelector(".songName");
let singer = document.querySelector(".singerName");
let movie = document.querySelector(".movieName");
let duration = document.querySelector(".Duration");
let songimage = document.querySelector(".img");

let previousbtn = document.querySelector(".prev");
let next = document.querySelector(".next");
let playpauseBtn = document.querySelector(".play-pause");

let index_num = 0;
let playing = false;

let track = document.createElement("audio");

let track_list = [
    {
        name: "Stay",
        path: "Music/m1.mp3",
        artist: "Justin Bieber, The Kid Laroi",
        im: "images/m1.jpg",
        movie: "Stay",
        duration: "02:22",
    },
    {
        name: "Raataan Lambiyan",
        path: "Music/m2.mp3",
        artist: "Jubin Nautiyal, Asees Kaur",
        im: "images/m2.jpg",
        movie: "Shershaah",
        duration: "02:31",
    },
    {
        name: "Ve Mahi",
        path: "Music/m3.mp3",
        artist: "Arijit Singh, Asees Kaur",
        im: "images/m3.jpg",
        movie: "Kesari",
        duration: "03:44",
    },
    {
        name: "Psycho Saiyaan",
        path: "Music/m4.mp3",
        artist: "Sachet Tandon, Dhvani Bhanushali",
        im: "images/m4.jpg",
        movie: "Saaho",
        duration: "02:46",
    },
    {
        name: "Blinding Lights",
        path: "Music/m5.mp3",
        artist: "The Weekend",
        im: "images/m5.jpg",
        movie: "After Hours",
        duration: "03:19",
    },
    {
        name: "Bachpan Ka Pyaar",
        path: "Music/m6.mp3",
        artist: "Sahadev Dirdo, Badshah",
        im: "images/m6.jpg",
        movie: "Bachpan Ka Pyaar",
        duration: "03:04",
    },
];

function loadSong(index_num) {
    track.src = track_list[index_num].path;

    track.load();
    song.textContent = "Song Name: " + track_list[index_num].name;
    singer.textContent = "Singer Name: " + track_list[index_num].artist;
    songimage.src = track_list[index_num].im;
    movie.textContent = "Movie Name: " + track_list[index_num].movie;
    duration.textContent = "Duration: " + track_list[index_num].duration;
    track.addEventListener("ended", next);
}

loadSong(index_num);

playpauseBtn.addEventListener("click", () => {
    if (playing) {
        pausemusic();
    } else {
        playmusic();
    }
});

function playmusic() {
    track.play();
    playing = true;
    playpauseBtn.classList.replace("fa-play", "fa-pause");
}

function pausemusic() {
    track.pause();
    playing = false;
    playpauseBtn.classList.replace("fa-pause", "fa-play");
}

previousbtn.addEventListener("click", () => {
    if (index_num > 0) {
        index_num = index_num - 1;
    } else {
        index_num = track_list.length - 1;
    }

    loadSong(index_num);
    playmusic();
});

next.addEventListener("click", () => {
    if (index_num < track_list.length - 1) {
        index_num = index_num + 1;
    } else {
        index_num = 0;
    }

    loadSong(index_num);
    playmusic();
});

let so = document.getElementsByClassName("play-song");
for (let i = 0; i < so.length; i++) {
    so[i].addEventListener("click", () => {
        loadSong(i);
        playmusic();
    });
}
