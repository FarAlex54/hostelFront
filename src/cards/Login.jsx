import { React, useContext, useState } from 'react';
import { Button, OverlayTrigger, Tooltip, Modal, Tab, Tabs, Row, Col, Container, Nav, InputGroup, Form  } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { AppContext } from '../App';

export const Login = () => {
    const loginContext = useContext(AppContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [activeTab, setActiveTab] =useState('Login');
    const handleShow = () => {
        setShow(true);
        loginContext.setAuthenticated(!loginContext.isAuthenticated);
    }
    const handleSelect = (key) => {
        key==='Login'? setActiveTab('Login'):setActiveTab('Sign')
    }
    console.log('Выбран = ' + activeTab);

  return (
    <>
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip>{!loginContext.isAuthenticated? 'Вход в личный кабинет':'Выход из личного кабинета'}</Tooltip>}>
        {({ ref, ...triggerHandler }) => (
        <Button className='m-0' ref={ref} {...triggerHandler} onClick={handleShow}>
            {loginContext.isAuthenticated? 
                <div>
                    <Icon.ArrowLeft/>
                    <Icon.DoorOpen/>
                </div>:
                <div>
                    <Icon.ArrowRight/>
                    <Icon.DoorClosed/>
                </div>
            }
         
        </Button>

        )}

    </OverlayTrigger>

    <Modal contentClassName='modal_main'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
            <Tabs
                defaultActiveKey="Login"
                id=""
                fill
                className="mb-3 d-flex flex-row text-black fw-bolder modal_tabs"
                variant='tabs'
                isActive
                onSelect={(e)=>handleSelect(e)}
            >
                <Tab
                    tabClassName={activeTab==='Login'? 'coloredTab':''}
                    eventKey="Login"
                    title="Вход"
                >
                    <Form>
                        <Form.Group className="mx-3 mb-3" controlId="login">
                            <Form.Control type="text" placeholder="Login" />
                        </Form.Group>
                        <Form.Group className="mx-3 mb-3" controlId="password_login">
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Row className='align-items-center mb-3'>
                            <Col className='ms-3 text-start'>
                                <a className='text-light' href="" onClick={()=>setShow(false)}>закрыть</a>
                            </Col>
                            <Col className='me-3 text-end'>
                                <a className='me-3 text-dark' href="">не помню пароль</a>
                                <Button type="submit">Войти</Button>
                            </Col>
                        </Row>
                    </Form>
                </Tab>
                <Tab
                    tabClassName={activeTab==='Sign'? 'coloredTab':''}
                    eventKey="Sign"
                    title="Регистрация"
                >
                    <Form>
                        <Form.Group className="mx-3 mb-3" controlId="name">
                            <Form.Control type="text" placeholder="Ваше имя" />
                        </Form.Group>
                        <Form.Group className="mx-3 mb-3" controlId="sign">
                            <Form.Control type="text" placeholder="Login" />
                        </Form.Group>
                        <Form.Group className="mx-3 mb-3" controlId="password_sign">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mx-3 mb-3" controlId="phone">
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mx-3 mb-3" controlId="email">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>
                        <Row className='align-items-center mb-3'>
                            <Col className='ms-3 text-start'>
                                <a className='text-light' href="" onClick={()=>setShow(false)}>закрыть</a>
                            </Col>
                            <Col className='me-3 text-end'>
                                <Button type="submit">Зарегистрировать</Button>
                            </Col>
                        </Row>
                    </Form>
                </Tab>
            </Tabs>
    </Modal>   
    </>
  )
}