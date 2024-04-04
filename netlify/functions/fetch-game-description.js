export async function handler(event) {
  const gameId = event.queryStringParameters.gameId;
  try {
    const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Failed to fetch game description data");
    }
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ description: data.description }),
    };
  } catch (error) {
    console.error("Error fetching game descriptions ERROR: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch game description" }),
    };
  }
}
