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
      src: "media/EzelBaharSelpe_1.wav",
      name: "Ezel Bahar (Selpe) 1",
      soloed: true,
    },
    {
      src: "media/EzelBaharSelpe_2.wav",
      name: "Ezel Bahar (Selpe) 2",
    },
    {
      src: "media/EzelBaharSelpe_3.wav",
      name: "Ezel Bahar (Selpe) 3",
    },
    {
      src: "media/EzelBaharSelpe_4.wav",
      name: "Ezel Bahar (Selpe) 4",
    },
    {
      src: "media/EzelBaharSelpe_5.wav",
      name: "Ezel Bahar (Selpe) 5",
    },
    {
      src: "media/EzelBaharSelpe_6.wav",
      name: "Ezel Bahar (Selpe) 6",
    },
    {
      src: "media/EzelBaharSelpe_7.wav",
      name: "Ezel Bahar (Selpe) 7",
    },
    {
      src: "media/EzelBaharSelpe_8.wav",
      name: "Ezel Bahar (Selpe) 8",
    },
    {
      src: "media/EzelBaharSelpe_9.wav",
      name: "Ezel Bahar (Selpe) 9",
    },
    {
      src: "media/EzelBaharSelpe_10.wav",
      name: "Ezel Bahar (Selpe) 10",
    },
  ])
  .then(function () {
    //can do stuff with the playlist.
  });
