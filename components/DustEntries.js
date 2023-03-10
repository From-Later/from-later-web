import { getDustEntries } from '@/utils/dust'
import { useEffect, useState } from 'react'

export default function DustEntries() {
  const [entries, setEntries] = useState(null)

  useEffect(() => {
    const getEntries = async() => {
      const { items, err } = await getDustEntries()
      if (err) {
        console.log(err)
      }

      if (items) {
        setEntries(items)
      }
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
            <h3 className="label-intro">{`DUST${number} ⦁ added by ${entry.user.username}`}</h3>
            <div dangerouslySetInnerHTML={{__html: entry.content_html }} />
          </div>
        )
      })}
    </div>
  )
}
