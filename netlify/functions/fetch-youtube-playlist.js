const youtube_key = process.env.YOUTUBE_API;

export async function handler(event) {
  const gameName = event.queryStringParameters.gameName;
  const encodedName = encodeURIComponent(gameName);
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodedName}%20intitle:ost|intitle:soundtrack%20&type=playlist&key=${youtube_key}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch youtube playlist data");
    }
    const youtubeData = await response.json();
    const videos = youtubeData.items;
    return {
      statusCode: 200,
      body: JSON.stringify(videos),
    };
  } catch (error) {
    console.error("Error fetching playlist data", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch playlist data" }),
    };
  }
}
