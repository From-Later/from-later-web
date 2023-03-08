import { ARENA_CHANNELS_ENDPOINT, ARENA_WORK_CHANNEL_ID } from '@/utils/constants'

const baseUrl = `${ARENA_CHANNELS_ENDPOINT}${ARENA_WORK_CHANNEL_ID}`

export async function getProjects () {
  try {
    const projects = await fetchAllProjects()
    return { items: projects.reverse() }
  } catch (err) {
    return { msg: "Error fetching data", err }
  }
}

const fetchAllProjects = async (pageNo=1, batch=[]) => {
  const url = `${baseUrl}?page=${pageNo}&per=100`
  console.log(`Fetching ${url}`)
  const response = await fetch(url)

  if (response.status !== 200) {
    throw Error(`API call failed: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  const projects = data.contents
  const allProjects = batch.concat(projects)

  if (allProjects.length < data.length) {
    return await fetchAllProjects(pageNo + 1, allProjects)
  }

  return allProjects
}