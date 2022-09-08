/* eslint-disable @next/next/no-img-element */
import React from 'react'

const NewsItem = ({thumbnail, shortName, percentChange, title}) => {
  return (
    <div style={{display: 'flex', justifyContent:'space-between', paddingRight: '12px'}}>
          <div>
            <img width={150} src={thumbnail} alt="news-item" />
          </div>
          <div style={{display: 'flex', flexDirection: 'column' }}>
          <span>{shortName} <span style={{color:'green'}}>{percentChange}</span></span>
            <span>{title}</span>
          </div>
        </div>
  )
}

export default NewsItem