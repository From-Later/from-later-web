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
  }, [])

  if (!entries) return null

  return (
    <div>
    {entries.map(entry => {
      return (
        <div className="dust-post" key={entry.id}>
          <div dangerouslySetInnerHTML={{__html: entry.content_html }} />
        </div>
      )
    })}
    </div>
  )
}
