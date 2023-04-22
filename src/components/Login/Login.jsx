import '../Login/Login.css'

const Login = () => {
    return(
        <div className="bg-login">
            <h4 className="title-1">Te damos la bienvenida a</h4>
            <h1 className="title-2">Dev MasterClass <b className='plus'>+</b></h1>
            <div className="card">
                    <form className="container" >
                        <h5 className='titulo-card'>INICIAR SESION</h5>
                        <input type="text" className='input_user' placeholder="Usuario" name="uname" required />
                        <input type="password" className='input_psw' placeholder="Contraseña" name="psw" required />
                        <button type="submit" className='btn_login'>Log in</button>
                        <a href="#" className='forgot_psw'>Olvidé mi contraseña</a>
                    </form>
            </div>
        </div>
    )
}

export default Login