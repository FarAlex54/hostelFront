import { React, useContext } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { AppContext } from '../App';
import CardForRooms from '../cards/CardForRooms';

//Модуль с номерами

const Rooms = () => {
  const roomsContext = useContext(AppContext);
  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  return (
    <Container className='card mt-1 cardsFor' style={{}}>

     <Row className='justify-content-center'>
      
     {roomsContext.rooms.map((objRoom,i)=>{
        return <Col key={i} className='py-2' xxl={4} xl={4} lg={4} md={5} sm={8} xs={9}>
                <CardForRooms
                  key={i}
                  id={objRoom.id} 
                  title={objRoom.title}
                  description={objRoom.description}
                  price={objRoom.price}
                  imgRooms={objRoom.imgRooms}
                  icons={objRoom.icons}
                  day={roomsContext.currentDate.day}
                  month={monthNames[roomsContext.currentDate.month-1]}
                />
                
                </Col>              
     })}
        
      </Row>

    </Container>
  )
}

export default Rooms