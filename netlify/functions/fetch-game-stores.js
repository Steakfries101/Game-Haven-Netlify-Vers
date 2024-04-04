const apiKey = process.env.RAWG_API;

export async function handler(event) {
  const apiKey = process.env.RAWG_API; // Using the same environment variable as in fetch-game-description.js
  const gameId = event.queryStringParameters.gameId;
  console.log("game id: " + gameId);
  if (!gameId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "gameId is required as a query parameter.",
      }),
    };
  }

  try {
    const response = await fetch(`https://api.rawg.io/api/games/${gameId}/stores?key=${apiKey}`);
    console.log("Raw response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch game stores data");
    }

    const data = await response.json();
    console.log("Data returned:", data); // Log the data to see its structure

    // Directly return the array since the data is already an array of objects
    return {
      statusCode: 200,
      body: JSON.stringify(data), // No need to access data.results
    };
  } catch (error) {
    console.error("Error fetching game stores data: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch game stores data" }),
    };
  }
}
