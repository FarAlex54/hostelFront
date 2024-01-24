import { React, useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <Container>
      <Row>
{/*         <Col>
          <h3>МЕНЮ</h3>
          <Link className='aLink' to={'/about'}><p class="text-danger">Об отеле</p></Link>
          <a class="text-decoration-none" href='#'><p class="text-danger">Номера</p></a>
          <Link className='aLink' to={'/restoran'}><p class="text-danger">Ресторан</p></Link>
          <a class="text-decoration-none" href='#'><p class="text-danger">Услуги</p></a>
          <a class="text-decoration-none" href='#'><p class="text-danger">Мероприятия</p></a>
          <Link className='aLink' to={'/gallery'}><p class="text-danger">Фотогалерея</p></Link>
          <Link className='aLink' to={'/contacts'}><p class="text-danger">Контакты</p></Link>
        </Col> */}
        <Col>
          <h3>КОНТАКТЫ</h3>
          <p className="text-danger">Адрес:</p><p>Краснодарский край, село Бжид, ул. Лазурная, 10</p>
          <p className="text-danger">Телефон:</p><p>+7 (495) 888 88 88</p>
          <p className="text-danger">Email:</p><p>Raimov88@yandex.ru</p>
        </Col>
        <Col className='bg-info w-100'>
          <YMaps>
              <Map className='' defaultState={{ center: [44.326060, 38.639837], zoom: 15 }} modules={["control.ZoomControl", "control.FullscreenControl"]}>
                <Placemark 
                  modules={["geoObject.addon.balloon"]}
                  defaultGeometry={[44.326060, 38.639837]}
                  properties={{
                    balloonContentBody:
                      "Бжид, ул.Лазурная, 10",
                  }}/>
              </Map>
          </YMaps>
        </Col>
      </Row>
    </Container>
  )
}

export default Contacts