import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import ReactPlayer from "react-player";

const Banner = () => {
  return (
    <Container className='p-0' style={{position:'relative'}} fluid>
        <div className='banner m-0'></div>
        <Image className='banner_logo' src="./img/logo1.png"/>
        <div className=''>
            <ReactPlayer className='' width='100%' height="auto" url="./video/header.mp4" playing={true} muted loop={true}/>
        </div>
    </Container>
  )
}

export default Banner