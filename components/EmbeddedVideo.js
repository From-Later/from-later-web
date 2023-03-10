export default function EmbeddedVideo({ src, title, iframeProps, iframeStyles }){

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
    <div style={{paddingTop:"56.17021276595745%"}} className="w-embed-youtubevideo">
      <iframe 
        src={src} 
        title={title}
        frameBorder="0" 
        style={style} 
        allow="autoplay; encrypted-media" 
        allowFullScreen={true} 
        { ...iframeProps }
      />
    </div>
  )
}