/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Row, Col} from 'antd'
import ImageWithBg from 'src/components/Image/ImageWithBg'
import { Container } from 'src/components/Container'
import NewsItem from './NewsItem'
import NewsArticle from '../NewsArticle'

export const LatestNews = () => {
  return (
    <Container>
      <h1>Latest News</h1>

    <div style={{display: 'flex', gap:'24px',justifyContent:'center'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <ImageWithBg backgroundUrl={"/mock-images/mock-1.png"} height="50vh"/>
        <span style={{paddingTop: "12px"}}>A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks Nvidia On Post-Earnings</span>
        <span>AMD <span style={{color:'green'}}>+5</span></span>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap:'30px'}}>

        <NewsItem thumbnail={"/mock-images/mock-3.png"} shortName="AMD" percentChange={"+5"} title="A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks and set apart in A Look At Advanced" />
        <NewsItem thumbnail={"/mock-images/mock-2.png"} shortName="AMD" percentChange={"+5"} title="A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks Nvidia On Post-Earnings" />
        <NewsItem thumbnail={"/mock-images/mock-4.png"} shortName="AMD" percentChange={"+5"} title="A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks Nvidia On Post-Earnings" />

      </div>
    </div>

    <div>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: "60px"}} >
      <Col span={8}>
        <NewsArticle thumbnail={"/mock-images/mock-11.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"/mock-images/mock-12.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"/mock-images/mock-13.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: "60px"}} >
      <Col span={8}>
        <NewsArticle thumbnail={"/mock-images/mock-5.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"/mock-images/mock-14.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"/mock-images/mock-7.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: "60px"}} >
      <Col span={8}>
        <NewsArticle thumbnail={"/mock-images/mock-8.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"/mock-images/mock-9.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"/mock-images/mock-10.png"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
    </Row>
    </div>
    </Container>
  )
}