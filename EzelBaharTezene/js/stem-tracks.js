var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: "cursor",
  colors: {
    waveOutlineColor: "#E0EFF1",
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200, //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000],
  exclSolo: true,
});

playlist
  .load([
    {
      src: "media/EzelBaharTezene_1.wav",
      name: "Ezel Bahar (Tezene) 1",
      soloed: true,
    },
    {
      src: "media/EzelBaharTezene_2.wav",
      name: "Ezel Bahar (Tezene) 2",
    },
    {
      src: "media/EzelBaharTezene_3.wav",
      name: "Ezel Bahar (Tezene) 3",
    },
    {
      src: "media/EzelBaharTezene_4.wav",
      name: "Ezel Bahar (Tezene) 4",
    },
    {
      src: "media/EzelBaharTezene_5.wav",
      name: "Ezel Bahar (Tezene) 5",
    },
    {
      src: "media/EzelBaharTezene_6.wav",
      name: "Ezel Bahar (Tezene) 6",
    },
    {
      src: "media/EzelBaharTezene_7.wav",
      name: "Ezel Bahar (Tezene) 7",
    },
    {
      src: "media/EzelBaharTezene_8.wav",
      name: "Ezel Bahar (Tezene) 8",
    },
    {
      src: "media/EzelBaharTezene_9.wav",
      name: "Ezel Bahar (Tezene) 9",
    },
    {
      src: "media/EzelBaharTezene_10.wav",
      name: "Ezel Bahar (Tezene) 10",
    },
  ])
  .then(function () {
    //can do stuff with the playlist.
  });
