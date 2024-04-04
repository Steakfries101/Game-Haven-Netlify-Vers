export async function handler(event) {
  const apiKey = process.env.RAWG_API;
  const gameId = event.queryStringParameters.gameId;

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games/${gameId}?key=${apiKey}` // Correctly formatted API URL
    );
    if (!response.ok) {
      throw new Error("Failed to fetch game description data");
    }
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ description: data.description }), // Returning the description in the response body
    };
  } catch (error) {
    console.error("Error fetching game descriptions ERROR: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch game description" }),
    };
  }
}
