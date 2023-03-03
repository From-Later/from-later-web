
export async function getProjects () {
  const url = `https://api.are.na/v2/channels/${process.env.ARENA_WORK_CHANNEL_ID}?per=100`
  const response = await fetch(url)
  const data = await response.json()
  const projects = data.contents

  return projects.reverse().slice(0,20)
}

