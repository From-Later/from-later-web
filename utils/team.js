
export async function getTeammates () {
  try {
    const teamUrl = `https://api.are.na/v2/channels/${process.env.ARENA_TEAM_CHANNEL_ID}?per=100`
    const gifsUrl = `https://api.are.na/v2/channels/${process.env.ARENA_TEAM_GIFS_CHANNEL_ID}?per=100`
    
    const teamResponse = await fetch(teamUrl)
    const teamData = await teamResponse.json()
    const teammates = teamData.contents
    const teammatesWithImages = teammates.filter(t => t.image)
    
    const gifsResponse = await fetch(gifsUrl)
    const gifsData = await gifsResponse.json()
    const gifs = gifsData.contents

    if (Boolean(teammatesWithImages.length) && Boolean(gifs.length)) {
      const teammatesWithGifs = teammatesWithImages.map(t => {
        const name = t.title
        const gif = gifs.find(g => g.title === t.title)
        return { ...t, gif: gif?.image }
      })
      return teammatesWithGifs.reverse()
    }

    return teammatesWithImages.reverse()
  } catch (err) {
    return { msg: "Error fetching data", err }
  }
}

