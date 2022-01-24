import Banner from "./components/UI/Banner/Banner";
import "./home-component.css";
import Cards from "./components/UI/Card/Card";

export default function Root(props) {
  return (
    <>
      <Banner />
      <div className="Container">
        <div className="Title">
          <h1>Micro Front-Ends</h1>
        </div>
        <div className="Card-section">
          <Cards
            Title="About us"
            Img="https://media.istockphoto.com/photos/about-us-picture-id1303480001?k=20&m=1303480001&s=612x612&w=0&h=mUxyxKR1LCDOcUuBywv36Pn2q9JHrhJlbMGkYKp2UIA="
            Url="/about-us"
          />
          <Cards
            Title="FAQ"
            Img="https://media.istockphoto.com/photos/word-on-blue-computer-keyboard-key-picture-id1303479887?k=20&m=1303479887&s=612x612&w=0&h=ovZEbXUScZ9ql4LU_wQaNgqBDensmsC_cqRgfDp5OMM="
            Url="/faq"
          />
          <Cards
            Title="Login"
            Img="https://media.istockphoto.com/photos/login-word-and-lockpad-on-blue-computer-keyboard-key-picture-id1303995950?k=20&m=1303995950&s=612x612&w=0&h=ZioeRvx9vT1o2oDkC5T52g-oNjfg86fzQXOQW1p0qaQ="
            Url="/sign-in"
          />
        </div>
        <br />
        <div className="Definition">
          <h4>¿Qué son?</h4>
          La idea detrás de Micro Frontends es pensar en un sitio web o
          aplicación web como una composición de características que son
          propiedad de equipos independientes. Cada equipo tiene un área de
          negocio definida o misión de la que se preocupa y se especializa. Un
          equipo es cross functional y desarrolla sus características
          end-to-end, desde la base de datos hasta la interfaz de usuario.
        </div>
      </div>
    </>
  );
}
