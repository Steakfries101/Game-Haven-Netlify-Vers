export async function fetchYoutubePlaylist(gameName) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${gameName} intitle:ost|intitle:soundtrack &type=playlist&key=AIzaSyCsEU3Fe6wNACeFTvZQgKA46QnreQL12NI`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch youtube playlist data");
      }
      const youtubeData = await response.json();
      const videos = youtubeData.items;
      return videos;
    } catch (error) {
      console.error("Error fetching youtube playlist data");
    }
  }