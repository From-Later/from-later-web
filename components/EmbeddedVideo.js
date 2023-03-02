import Link from 'next/link'

export default function EmbeddedVideo({ url, title, iframeProps, iframeStyles }){

  const style = {
    position:"absolute",
    left:0,
    top:0,
    width:"100%",
    height:"100%",
    pointerEvents:"auto",
    ...iframeStyles
  }

  return (
    <div style={{paddingTop:"56.17021276595745%"}} class="w-embed-youtubevideo">
      <iframe 
        src={url} 
        title={title}
        frameborder="0" 
        style={style} 
        allow="autoplay; encrypted-media" 
        allowfullscreen="" 
        { ...iframeProps }
      />
    </div>
  )
}