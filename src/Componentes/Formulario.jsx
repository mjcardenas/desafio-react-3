import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const Formulario = ({ lstColaboradores, setLstColaboradores }) => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");


    const agregarColaborador = (e) => {
        e.preventDefault();
        console.log(email);
        setLstColaboradores([...lstColaboradores, { nombre: nombre, correo: email }]);
    }

    return (
        <div className='p-2'>
            <form onSubmit={agregarColaborador}>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre del colaborador</Form.Label>
                    <Form.Control type="text" id="nombre" name="nombre" placeholder="Nombre Colaborador"
                        onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Correo del colaborador</Form.Label>
                    <Form.Control type="text" id="email" name="email" placeholder="Email Colaborador"
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Button variant='primary' type='submit'>
                    Agregar Colaborador
                </Button>
            </form>
        </div>
    )
}

export default Formulario