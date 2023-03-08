import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function SummaryBox({ meta }){
  const labels = meta.label

  if (!labels) {
    return null
  }

  return (
    <div className="label">
      {labels.map((label, i) => {
        return (
          <div key={`label-${i}`} className="label-item">
            <span className="label-intro">{`${label.name}: `}</span>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{label.value}</ReactMarkdown>
          </div>
        )
      })}
    </div>
  )
}
