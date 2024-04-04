export async function fetchGameData(gameName) {
    try {
      const response = await fetch(`https://api.rawg.io/api/games${apiKey}&search=${gameName}&search_precise=true&ordering=name?parent_platforms=1`);
      if (!response.ok) {
        throw new Error("Failed to fetch game data");
      }
  
      const data = await response.json();
      const games = data.results;
      return games;
    } catch (error) {
      console.error("Error fetching game data", error);
    }
  }