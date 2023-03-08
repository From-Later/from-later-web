import { ARENA_CHANNELS_ENDPOINT, ARENA_DUST_CHANNEL_ID } from '@/utils/constants'

const baseUrl = `${ARENA_CHANNELS_ENDPOINT}${ARENA_DUST_CHANNEL_ID}`

export async function getDustEntries () {
  const entries = await fetchAllEntries()
  return entries.reverse()
}

const fetchAllEntries = async (pageNo=1, batch=[]) => {
  const url = `${baseUrl}?page=${pageNo}&per=100`
  console.log(`Fetching ${url}`)
  const response = await fetch(url)
  const data = await response.json()
  const entries = data.contents
  const allEntries = batch.concat(entries)

  if (allEntries.length < data.length) {
    return await fetchAllEntries(pageNo + 1, allEntries)
  }

  return allEntries
}