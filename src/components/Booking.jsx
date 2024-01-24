import {React, useState, useContext } from 'react'
import { DtPicker } from 'react-calendar-datetime-picker'
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import 'react-calendar-datetime-picker/dist/style.css'
import { AppContext } from '../App';

//Модуль бронирования
const Booking = () => {
  const [dateIn, setDateIn] = useState(null);
  const [dateOut, setDateOut] = useState(null);
  const bookingContext = useContext(AppContext);

  return (
      <Container className='card my-3 p-xxl-2 p-xl-3 p-lg-1 p-md-3 cardForBooking'>
        <Row className='align-items-center justify-content-end'>
          <Col className='' /* xxl={5} xl={5} lg={5} */><h3>Бронирование номера</h3>
          </Col>
          <Col className="bg-success" xxl={2} xl={2} lg={2} md={3} sm={3} xs={4}>
            <DtPicker inputClass='' onCalenderHide={()=>console.log('Календарик закрыт')} onCalenderShow={()=>console.log('Календарик открыт')} headerClass='bg-info' onChange={setDateIn} placeholder='Дата заезда' minDate={bookingContext.currentDate} showWeekend/>
          </Col>
          <Col className="" xxl={2} xl={2} lg={2} md={3} sm={3} xs={4}>
            <DtPicker inputClass='' headerClass='bg-info' onChange={setDateOut} initValue={dateIn} minDate={dateIn} showWeekend isDisabled={(typeof dateIn === 'undefined' | dateIn === null )? true:false} placeholder='Дата выезда'/>
          </Col>
          <Col className='text-center bg-warning' xxl={1} xl={1} lg={1} md={3} sm={3} xs={12}>
            <Button size="sm">Гостей?</Button>
          </Col>
          <Col className=" text-center" xxl={2} xl={2} lg={2}>
            <Button size="lg">Поиск</Button>
          </Col>
        </Row>
      </Container>
  )
}

export default Booking