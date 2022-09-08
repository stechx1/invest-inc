/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const NewsArticle = ({thumbnail, title, width}) => {
  return (
    <div style={{display:'flex', flexDirection:'column', width:'min-content'}}>
        <img width={width} src={thumbnail}  />
          <span style={{paddingTop: "10px"}}>{title}</span>
        </div>
  )
}

export default NewsArticle