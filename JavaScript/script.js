const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');

const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song titles
const songs = ['ALL_CAPS', 'burn_it_all_down', 'Enemy', 'sweet_home_chicago'];
// Keep track of song
let songIndex = 2;


// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `MUSICA/${song}.mp3`;
  cover.src = `IMMAGINI/${song}.png`;
}


// Play song
function playSong() {
  musicContainer.classList.add('play');
  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}



// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}




// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});




// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Song ends
audio.addEventListener('ended', nextSong);



