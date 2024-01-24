import {React, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons';

const Footer = () => {
  const [clrbk, setClrbk]=useState({ytb:'',tg:'',vk:'',wtsp:''});
  return (
    <Container className='border-top' fluid>
        <Row>
          <Col xxl={5} xl={5} lg md sm xs className=''>©2023 – НАО «Клуб путешественников» – Официальный сайт Отеля Клуб путешественников
          </Col>
          <Col className='justify-content-around'>
{/*             <Icon.ArrowRight />
            <Icon.DoorOpenFill/> */}
            <Row className='justify-content-around align-items-center'>
              <SocialIcon className='' style={{ height: 30, width: 30}} onMouseEnter={()=>setClrbk({ytb:'red'})} onMouseLeave={() => setClrbk({ytb:''})} bgColor={clrbk.ytb} url="www.youtube.com" />
              <SocialIcon onMouseEnter={()=>setClrbk({tg:'red'})} onMouseLeave={() => setClrbk({tg:''})} bgColor={clrbk.tg} url="www.telegram.com" />
              <SocialIcon onMouseEnter={()=>setClrbk({vk:'red'})} onMouseLeave={() => setClrbk({vk:''})} bgColor={clrbk.vk} url="www.vk.com" />
              <SocialIcon onMouseEnter={()=>setClrbk({wtsp:'red'})} onMouseLeave={() => setClrbk({wtsp:''})} bgColor={clrbk.wtsp} url="www.whatsapp.com" />
            </Row>
          </Col>
          <Col className='' xxl={2} xl={2} lg md sm xs>Сайт разработан - FarAlex</Col>
        </Row>
    </Container>
  )
}

export default Footer