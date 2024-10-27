import React from 'react';
import { useForm } from 'react-hook-form';


export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmitForm = async (data) => { /* Registra los usuarios */
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: data.nombre,
                    password: data.contrasena,
                }),
            });

            if (response.status === 201) {
                alert('Usuario registrado correctamente');

            } else if (response.status === 400) {
                alert('El usuario ya existe');
            } else {
                alert('Error al registrar usuario');
            }
        } catch (error) {
            alert('Hubo un error en la solicitud');
        }
    };

    return (
        <>
            <div className='container'>
            <h2 className='text-center'>Registro de usuario</h2>
                <form onSubmit={handleSubmit(onSubmitForm)}> {/* Formulario para capturar los datos */}
                    <div className="mb-3">
                        <label htmlFor="nombreUsuario" className="form-label">Crea tu nombre de usuario</label>
                        <input type="text" className="form-control" id="nombreUsuario" placeholder="usuarioEjemplo"{...register('nombre', {required: true})} />
                        {errors?.nombre?.type === "required" && <p>Este campo es requerido</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contrasenaUsuario" className="form-label">Crea tu contraseña</label>
                        <input type="password" className="form-control" id="contrasenaUsuario" placeholder="*****"{...register('contrasena', {required: true})} />
                        {errors?.contrasena?.type === "required" && <p>Este campo es requerido</p>}
                    </div>
                   
                    <button type='submit'  className="btn btn-success">Crear</button>
                </form>
            </div>
        </>
    );
}
