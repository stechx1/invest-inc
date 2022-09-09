export const ImageWithBg = ({backgroundUrl, height}) => {
  return (
    <div style={{background:`url(${backgroundUrl})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat', height}}></div>
  )
}