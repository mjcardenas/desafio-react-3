import React from 'react'
import { Container, Form, Navbar } from "react-bootstrap"

const Header = ({ setValorDeLaCaja }) => {
    return (
        <Navbar bg="dark" variant="dark" className='mb-3'>
            <Container fluid>
                <Navbar.Brand>
                    Buscador de Colaboradores
                </Navbar.Brand>
                <Form>
                    <Form.Control
                        type="seach"
                        placeholder='Busca un colaborador'
                        aria-label='Search'
                        className='my-2'

                        onChange={(e) => setValorDeLaCaja(e.target.value)}
                    />
                </Form>
            </Container>

        </Navbar>
    )
}

export default Header