import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="principal">
        <nav>
          <p className="brand block">
            Dev ClassMaster <b>+</b>
          </p>

          <div className="search-container">
            <input
              type="search"
              className="search"
              name="search"
              id="search"
              placeholder="Buscar"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="menu-nav">
            <a href="#" className="cursos block">
              Cursos
            </a>
            <a href="#" className="entrar block">
              Entrar
            </a>
            <button className="signup block">
              <p>Crear cuenta</p>
            </button>
          </div>
        </nav>

        <div className="main">
          <h1 className="title-main">
            ¿Preparado para <b>vivir</b> el codding?
          </h1>
          <p className="subtitle-main">
            ¡Bienvenido a Dev Masterclass! ¿Estás buscando aprender habilidades
            de programación de alta demanda que te ayuden a impulsar tu carrera
            en tecnología? <p>¡Estás en el lugar correcto!</p>
          </p>

          <input
            type="submit"
            className="btn-submit-course"
            value="Ver Cursos"
          />
        </div>

        <div className="partners">
          <h1 className="title-partners">Partners</h1>
          <div className="wrap-partners">
            <div>
              <img
                className="container-partners"
                src="https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277"
                alt=""
              />
              <p className="name-partner">Microsoft</p>
            </div>
            <div>
              <img
                className="container-partners"
                src="https://img.freepik.com/vector-gratis/instagram-nuevo-icono_1057-2227.jpg?w=1380&t=st=1682213553~exp=1682214153~hmac=4eefbf36775022f884a7f47e9c9c787addafa355a2281a24e5f0bffd4f89c307"
                alt=""
              />
              <p className="name-partner-2">Instagram</p>
            </div>
            <div>
              <img
                className="container-partners"
                src="https://logowik.com/content/uploads/images/379_twitch.jpg"
                alt=""
              />
              <p className="name-partner-3">Twitch</p>
            </div>
            <div>
              <img
                className="container-partners"
                src="https://img.freepik.com/fotos-premium/logotipo-youtube-reproductor-video-diseno-3d-o-interfaz-reproductor-medios-video_41204-12379.jpg?w=1800"
                alt=""
              />
              <p className="name-partner-4">Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
