export default function AudioPlayer({ src, title, playerStyles }){

  const style = {
    width:"100%",
    ...playerStyles
  }

  return (
    <div className="audio-player w-embed">
      <audio style={style} controls="true" preload="auto" onPlay={`ga('send', 'event', 'Audio', 'play', ${title})`}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}