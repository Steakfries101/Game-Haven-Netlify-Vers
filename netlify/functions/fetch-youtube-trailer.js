const youtube_key = process.env.YOUTUBE_API;

export async function handler(event) {
  const gameName = event.queryStringParameters.gameName;
  // const encodedName = encodeURIComponent(gameName);

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=1&q=${gameName}%20game%20trailer&key=${youtube_key}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch youtube data");
    }
    const youtubeData = await response.json();
    const videos = youtubeData.items;
    // console.log(youtubeData);
    return {
      statusCode: 200,
      body: JSON.stringify(videos),
    };
  } catch (error) {
    console.error("Error fetching youtube data", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "failed to fetch youtube data" }),
    };
  }
}

A;
