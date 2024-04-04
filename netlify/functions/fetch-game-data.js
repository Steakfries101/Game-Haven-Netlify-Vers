const apiKey = process.env.RAWG_API;

export async function handler(event) {
  const gameName = event.queryStringParameters.gameName;

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&search=${gameName}&search_precise=true&ordering=name&parent_platforms=1`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch game data");
    }

    const data = await response.json();
    const games = data.results;
    return {
      statusCode: 200,
      body: JSON.stringify(games),
    };
  } catch (error) {
    console.error("Error fetching game data", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch game data" }),
    };
  }
}
