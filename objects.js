var playlist = {
  'Mel Torme':'When Sunny Gets Blue'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistNAme
  return playlist
}
