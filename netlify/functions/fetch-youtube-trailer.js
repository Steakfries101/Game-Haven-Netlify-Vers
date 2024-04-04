export async function fetchYoutubeTrailer(gameName) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=1&q=${gameName} game trailer&key=${youtubeKey}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch youtube data");
      }
      const youtubeData = await response.json();
      const videos = youtubeData.items;
      // console.log(youtubeData);
      return videos;
    } catch (error) {
      console.error("Error fetching youtube data");
    }
  }