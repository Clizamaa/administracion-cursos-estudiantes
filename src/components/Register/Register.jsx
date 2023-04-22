import "../Register/Register.css";

const Register = () => {
  return (
    <div className="bg-register">
      <h4 className="title-1">Te damos la bienvenida a</h4>
      <h1 className="title-2">
        Dev MasterClass <b className="plus">+</b>
      </h1>
      <div className="card-register">
        <form className="container-register">
          <h5 className="titulo-card-register">REGISTRATE</h5>
          <input
            type="email"
            className="input_email"
            placeholder="Correo electrónico"
            name="email"
            required
          />
          <input
            type="text"
            className="input_name"
            placeholder="Nombre y apellido"
            name="name"
            required
          />
          <input
            type="password"
            className="input_psw-register"
            placeholder="Crear contraseña"
            name="psw"
            required
          />
          <input
            type="password"
            className="input_psw_2"
            placeholder="Confirme su contraseña"
            name="re-psw"
            required
          />
          <input
            type="number"
            className="input_phone"
            placeholder="Número de telefono"
            name="phone"
            required
          />
          <button type="submit" className="btn-register">
            Registrate
          </button>
          <span className="terms">
            Al crear una cuenta estás aceptando los Terminos de Servicio y
            Privacidad
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
