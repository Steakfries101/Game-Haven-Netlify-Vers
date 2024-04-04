
export async function getPlaylist(gameName) {
  const encodePlaylist = encodeURIComponent(gameName);

  try {
    const response = await fetch(
      `/.netlify/functions/fetch-youtube-playlist?gameName=${encodePlaylist}`
    );
    const playlistData = await response.json();
    if (playlistData) {
      window.open(
        `//www.youtube.com/playlist?list=${playlistData[0].id.playlistId}`
      );
    }
  } catch (error) {
    alert("No soundtrack found");
    console.error("Unable to find playlist");
  }
}

export async function getTrailer(gameName) {
  let gameRename = gameName.includes("1") ? gameName : `${gameName} 1`;

  const encodeTrailer = encodeURIComponent(gameRename);
  try {
    // Replace 'fetch-youtube-trailer' with the actual path/name of your Netlify function
    const response = await fetch(
      `/.netlify/functions/fetch-youtube-trailer?gameName=${encodeTrailer}`
    );
    const trailerData = await response.json();
    const videoId = trailerData[0].id.videoId;
    window.open(`https://www.youtube.com/watch?v=${videoId}`);
  } catch (error) {
    console.error("Unable to find trailer:", error);
  }
}
