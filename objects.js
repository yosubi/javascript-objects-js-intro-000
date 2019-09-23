var playlist = {
  'Mel Torme':'When Sunny Gets Blue'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
