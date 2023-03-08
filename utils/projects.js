import { ARENA_WORK_CHANNEL_ID } from '@/utils/constants'

const baseUrl = `https://api.are.na/v2/channels/${ARENA_WORK_CHANNEL_ID}`

export async function getProjects () {
  const projects = await fetchAllProjects()
  return projects.reverse()
}

const fetchAllProjects = async (pageNo=1, batch=[]) => {
  const url = `${baseUrl}?page=${pageNo}&per=100`
  console.log(`Fetching ${url}`)
  const response = await fetch(url)
  const data = await response.json()
  const projects = data.contents
  const allProjects = batch.concat(projects)

  if (allProjects.length < data.length) {
    return await fetchAllProjects(pageNo + 1, allProjects)
  }

  return allProjects
}