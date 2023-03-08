import { getDustEntries } from '@/utils/dust'
import { useEffect, useState } from 'react'

export default function DustEntries() {
  const [entries, setEntries] = useState(null)

  useEffect(() => {
    const getEntries = async() => {
      const data = await getDustEntries()
      setEntries(data)
    }

    if (!entries) {
      getEntries()
    }
  })

  if (!entries) return null


  return (
    <div>
    {entries.map(entry => {
      const number = `00000${entry.position}`.slice(-5)
      return (
        <div className="dust-post" key={entry.id}>
          <h2>{entry.title}</h2>
          <h3>{`DUST${number}`}</h3>
          <div dangerouslySetInnerHTML={{__html: entry.content_html }} />
        </div>
      )
    })}
    </div>
  )
}
