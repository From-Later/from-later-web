// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const getProjects = async () => {
  const url = `https://api.are.na/v2/channels/${process.env.ARENA_WORK_CHANNEL_ID}`
  const response = await fetch(url)

  if (response.status === 200) {
    const json = await response.json()
    return json
  } else {
    console.log(response)
    throw Error(`Are.na error code: ${response.status}`)
  }
}

export default async (req, res) => {

  try {
    const projects = await getProjects()
    res.statusCode = 200;
    return res.json(projects)

  } catch (err) {
    console.log(err)
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong', error: err });
  }
};