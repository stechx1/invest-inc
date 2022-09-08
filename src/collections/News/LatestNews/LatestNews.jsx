/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
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
        <ImageWithBg backgroundUrl={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} height="50vh"/>
        <span style={{paddingTop: "12px"}}>A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks Nvidia On Post-Earnings</span>
        <span>AMD <span style={{color:'green'}}>+5</span></span>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap:'30px'}}>

        <NewsItem thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} shortName="AMD" percentChange={"+5"} title="A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks Nvidia On Post-Earnings" />
        <NewsItem thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} shortName="AMD" percentChange={"+5"} title="A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks Nvidia On Post-Earnings" />
        <NewsItem thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} shortName="AMD" percentChange={"+5"} title="A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks Nvidia On Post-Earnings" />

      </div>
    </div>

    <div>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: "60px"}} >
      <Col span={8}>
        <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: "60px"}} >
      <Col span={8}>
        <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: "60px"}} >
      <Col span={8}>
        <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
      <Col span={8}>
      <NewsArticle thumbnail={"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} width="350px" title="A Look At Advanced Micro Devices (AMD) As The Stocks"/>
      </Col>
    </Row>
    </div>
    </Container>
  )
}