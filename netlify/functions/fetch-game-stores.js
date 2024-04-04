export async function getGameStores(gameId) {
    try {
      const response = await fetch(`${baseUrl}/${gameId}/stores${apiKey}`);
  
      if (!response.ok) {
        throw new Error("Failed to fetch game stores data");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching game stores data ERROR: ", error);
    }
  }