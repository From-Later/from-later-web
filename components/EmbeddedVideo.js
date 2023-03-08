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
    <div style={{paddingTop:"56.17021276595745%"}} className="w-embed-youtubevideo">
      <iframe 
        src={url} 
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