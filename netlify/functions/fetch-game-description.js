export async function getGameDescription(gameId) {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${gameId}${apiKey}`);
      if (!response.ok) {
        throw new Error("Failed to fetch game desc data");
      }
      const data = await response.json();
      return data.description;
    } catch (error) {
      console.error("Error fetching game descriptions ERROR: ", error);
    }
  }