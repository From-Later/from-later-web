import Link from 'next/link'

export default function SummaryBox({ children }){
  return (
    <div className="label">
      {children}
    </div>
  )
}

// {children.map((child, i) => {
//   const text = child.props?.children || ""
//   const [label, description] = text.split(':')
//   return (
//     <div key={`item-${i}`}>
//       <span className="label-intro">{`${label}: `}</span>
//       {description}
//     </div>
//   )
// })}