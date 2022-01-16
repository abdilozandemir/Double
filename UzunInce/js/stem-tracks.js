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
      src: "media/UzunInce_1.wav",
      name: "Uzun Ince 1",
      soloed: true,
    },
    {
      src: "media/UzunInce_2.wav",
      name: "Uzun Ince 2",
    },
    {
      src: "media/UzunInce_3.wav",
      name: "Uzun Ince 3",
    },
    {
      src: "media/UzunInce_4.wav",
      name: "Uzun Ince 4",
    },
    {
      src: "media/UzunInce_5.wav",
      name: "Uzun Ince 5",
    },
    {
      src: "media/UzunInce_6.wav",
      name: "Uzun Ince 6",
    },
    {
      src: "media/UzunInce_7.wav",
      name: "Uzun Ince 7",
    },
    {
      src: "media/UzunInce_8.wav",
      name: "Uzun Ince 8",
    },
    {
      src: "media/UzunInce_9.wav",
      name: "Uzun Ince 9",
    },
    {
      src: "media/UzunInce_10.wav",
      name: "Uzun Ince 10",
    },
  ])
  .then(function () {
    //can do stuff with the playlist.
  });
