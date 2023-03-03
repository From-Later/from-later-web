export async function getDustEntries () {
  const url = `https://api.are.na/v2/channels/${process.env.ARENA_DUST_CHANNEL_ID}?per=100`
  let response = await fetch(url)
  const data = await response.json()
  const entries = data.contents

  return entries
}