import { React,useContext } from 'react'
import { Button, Carousel, Card } from 'react-bootstrap';
import { AppContext } from '../App';

const CardForRooms = (props) => {
  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const cardForRoomsContext = useContext(AppContext);
  
  return (
    <Card className='px-0 text-center cardForRoom'>
      <Carousel interval={null} controls={true}>
        {props.imgRooms.map((objImgRoom,i)=>{
          return  <Carousel.Item key={i+objImgRoom.path}>
                    <Card.Img variant="top" src={objImgRoom.path} />
                  </Carousel.Item> 
        })}
      </Carousel>
      <Card.Header className='p-0' style={{position:'absolute'}}>
        <div className='cardForRooms_header p-0 w-100'>
            {props.icons.map((objIcon,i) => {
              return <Card.Img key={i} style={{width:'10%'}} className='px-1' src={objIcon.path} title={objIcon.title}/>
            })}</div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <span className='text-danger'>от {props.price} &#8381;</span>
          <br />
          <span>за 1 ночь {props.day} {props.month}</span>
        </Card.Text>
        <Button variant="primary" key={props.id}
          onClick={()=>{console.log("Выбор = "+props.title)}}
          >Узнать цену на другие даты</Button>
      </Card.Body>
    </Card>
  )
}

export default CardForRooms