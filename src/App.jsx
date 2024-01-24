import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner'
import Footer from './components/Footer'
import Rooms from './components/Rooms';
import Booking from './components/Booking';
import Destination from './components/Destination';
import Contacts from './components/Contacts';
import Admin from './pages/Admin';
import Restorant from './pages/Restorant';
import PersonalAccount from './pages/PersonalAccount';
import Feedback from './pages/Feedback';


export const AppContext = React.createContext({});
function App() {
  const [isAuthenticated,setAuthenticated] = useState(false);
  const date = new Date();
  const currentDate = {
    year: date.getFullYear(),
    month: date.getMonth()+1,
    day: date.getDate()
  };
  const rooms = [
    {
      id: 1,
      title: "Однокомнатный рум",
      description: "Номер Делюкс - однокомнатный комфортабельный номер, площадью 21 кв.метр c одной кроватью queen-size. В номере есть все необходимое – рабочая зона, бесплатный WIFI, набор для приготовления чая/кофе, отдельная ванная комната с банными принадлежностями. Также Вы сможете воспользоваться услугами фитнес-центра.",
      price: 10000,
      imgRooms:[{path:"./img/rooms/1.jpg"},{path:"./img/rooms/1-2.jpg"},{path:"./img/rooms/1-3.jpg"},{path:"./img/rooms/1-4.jpg"}],
      icons:[
        {title:'Кофемашина', path:'./img/icons/cofe.png'},
        {title:'Кондиционер', path:'./img/icons/conditioner.png'},
        {title:'Фен', path:'./img/icons/hair-dryer.png'},
        {title:'Минибар', path:'./img/icons/mini-bar.png'},
        {title:'Сейф', path:'./img/icons/seif.png'},
        {title:'Чайник', path:'./img/icons/teapot.png'},
        {title:'Телевизор', path:'./img/icons/tv.png'},
        {title:'Утюг', path:'./img/icons/utug.png'}
      ]
    },
    {
      id: 2,
      title: "Двухкомнатный рум",
      description: "Номер Делюкс - однокомнатный комфортабельный номер, площадью 21 кв.метр c одной кроватью queen-size. В номере есть все необходимое – рабочая зона, бесплатный WIFI, набор для приготовления чая/кофе, отдельная ванная комната с банными принадлежностями. Также Вы сможете воспользоваться услугами фитнес-центра.",
      price: 20000,
      imgRooms:[{path:"./img/rooms/2.jpg"},{path:"./img/rooms/2-2.jpg"},{path:"./img/rooms/2-3.jpg"},{path:"./img/rooms/2-4.jpg"}],
      icons:[
        {title:'Кофемашина', path:'./img/icons/cofe.png'},
        {title:'Кондиционер', path:'./img/icons/conditioner.png'},
        {title:'Фен', path:'./img/icons/hair-dryer.png'},
        {title:'Минибар', path:'./img/icons/mini-bar.png'},
        {title:'Сейф', path:'./img/icons/seif.png'},
        {title:'Чайник', path:'./img/icons/teapot.png'},
        {title:'Телевизор', path:'./img/icons/tv.png'},
        {title:'Утюг', path:'./img/icons/utug.png'}
      ]
    },
    {
      id: 3,
      title: "Трехкомнатный рум",
      description: "Номер Делюкс - однокомнатный комфортабельный номер, площадью 21 кв.метр c одной кроватью queen-size. В номере есть все необходимое – рабочая зона, бесплатный WIFI, набор для приготовления чая/кофе, отдельная ванная комната с банными принадлежностями. Также Вы сможете воспользоваться услугами фитнес-центра.",
      price: 30000,
      imgRooms:[{path:"./img/rooms/3.jpg"},{path:"./img/rooms/3-2.jpg"},{path:"./img/rooms/3-3.jpg"},{path:"./img/rooms/3-4.jpg"}],
      icons:[
        {title:'Кофемашина', path:'./img/icons/cofe.png'},
        {title:'Кондиционер', path:'./img/icons/conditioner.png'},
        {title:'Фен', path:'./img/icons/hair-dryer.png'},
        {title:'Минибар', path:'./img/icons/mini-bar.png'},
        {title:'Сейф', path:'./img/icons/seif.png'},
        {title:'Чайник', path:'./img/icons/teapot.png'},
        {title:'Телевизор', path:'./img/icons/tv.png'},
        {title:'Утюг', path:'./img/icons/utug.png'}
      ]
    },
    {
      id: 4,
      title: "Четырехкомнатный рум",
      description: "Номер Делюкс - однокомнатный комфортабельный номер, площадью 21 кв.метр c одной кроватью queen-size. В номере есть все необходимое – рабочая зона, бесплатный WIFI, набор для приготовления чая/кофе, отдельная ванная комната с банными принадлежностями. Также Вы сможете воспользоваться услугами фитнес-центра.",
      price: 40000,
      imgRooms:[{path:"./img/rooms/4.jpg"},{path:"./img/rooms/4-2.jpg"},{path:"./img/rooms/4-3.jpg"},{path:"./img/rooms/4-4.jpg"}],
      icons:[
        {title:'Кофемашина', path:'./img/icons/cofe.png'},
        {title:'Кондиционер', path:'./img/icons/conditioner.png'},
        {title:'Фен', path:'./img/icons/hair-dryer.png'},
        {title:'Минибар', path:'./img/icons/mini-bar.png'},
        {title:'Сейф', path:'./img/icons/seif.png'},
        {title:'Чайник', path:'./img/icons/teapot.png'},
        {title:'Телевизор', path:'./img/icons/tv.png'},
        {title:'Утюг', path:'./img/icons/utug.png'}
      ]
    },
    {
      id: 5,
      title: "Пятикомнатный рум",
      description: "Номер Делюкс - однокомнатный комфортабельный номер, площадью 21 кв.метр c одной кроватью queen-size. В номере есть все необходимое – рабочая зона, бесплатный WIFI, набор для приготовления чая/кофе, отдельная ванная комната с банными принадлежностями. Также Вы сможете воспользоваться услугами фитнес-центра.",
      price: 50000,
      imgRooms:[{path:"./img/rooms/5.jpg"},{path:"./img/rooms/5-2.jpg"},{path:"./img/rooms/5-3.jpg"},{path:"./img/rooms/5-4.jpg"}],
      icons:[
        {title:'Кофемашина', path:'./img/icons/cofe.png'},
        {title:'Кондиционер', path:'./img/icons/conditioner.png'},
        {title:'Фен', path:'./img/icons/hair-dryer.png'},
        {title:'Минибар', path:'./img/icons/mini-bar.png'},
        {title:'Сейф', path:'./img/icons/seif.png'},
        {title:'Чайник', path:'./img/icons/teapot.png'},
        {title:'Телевизор', path:'./img/icons/tv.png'},
        {title:'Утюг', path:'./img/icons/utug.png'}
      ]
    },
    {
      id: 6,
      title: "Люкс",
      description: "Номер Делюкс - однокомнатный комфортабельный номер, площадью 21 кв.метр c одной кроватью queen-size. В номере есть все необходимое – рабочая зона, бесплатный WIFI, набор для приготовления чая/кофе, отдельная ванная комната с банными принадлежностями. Также Вы сможете воспользоваться услугами фитнес-центра.",
      price: 60000,
      imgRooms:[{path:"./img/rooms/6.jpg"},{path:"./img/rooms/6-2.jpg"},{path:"./img/rooms/6-3.jpg"},{path:"./img/rooms/6-4.jpg"}],
      icons:[
        {title:'Кофемашина', path:'./img/icons/cofe.png'},
        {title:'Кондиционер', path:'./img/icons/conditioner.png'},
        {title:'Фен', path:'./img/icons/hair-dryer.png'},
        {title:'Минибар', path:'./img/icons/mini-bar.png'},
        {title:'Сейф', path:'./img/icons/seif.png'},
        {title:'Чайник', path:'./img/icons/teapot.png'},
        {title:'Телевизор', path:'./img/icons/tv.png'},
        {title:'Утюг', path:'./img/icons/utug.png'}
      ]
    }
  ];
  return (
    <AppContext.Provider
      value={{rooms, currentDate, isAuthenticated, setAuthenticated
      }}>
        <Container fluid className='p-0 body'>
          <Router>
            <Header/>
              <Routes>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/restorant' element={<Restorant/>}/>
                <Route path='/personal_account' element={<PersonalAccount/>}/>
                <Route path='/feedback' element={<Feedback/>}/>
              </Routes>
                <Banner/>
                <Booking/>
                <Rooms/>
                <Destination/>
                <Contacts/>
            <Footer/>
          </Router>
        </Container>
    </AppContext.Provider>
  );
}

export default App;
