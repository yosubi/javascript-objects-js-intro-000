var playlist = {
  George Benson: "Breezin",
  'Mel Torme': "When Sunny Gets Blue"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
