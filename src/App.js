import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment, useState } from "react";
import Embarcacion from "./components/Embarcacion";
import CarroDeCompras from "./components/CarroDeCompras";

function App() {
  const fecha = new Date().getFullYear();

  const [embarcaciones, setEmbarcacion] = useState([
    {
      id: 1,
      marca: "Canestrari",
      modelo: "208",
      precio: "50000",
      nombreImagen: "208",
      descripcion:
        "Innovador diseño de esta embarcación en su versión dentro fuera.",
    },
    {
      id: 2,
      marca: "Canestrari",
      modelo: "208 FB",
      precio: "60000",
      nombreImagen: "208fb",
      descripcion:
        "Innovador diseño de esta embarcación en su versión fuera de borda",
    },
    {
      id: 3,
      marca: "Canestrari",
      modelo: "325",
      precio: "80000",
      nombreImagen: "325",
      descripcion:
        "La combinación de una navegación rápida, estable y unos interiores diseñados para sentirse a gusto",
    },
    {
      id: 4,
      marca: "Canestrari",
      modelo: "280 Crossover",
      precio: "250000",
      nombreImagen: "280co",
      descripcion:
        "A su destacada línea de embarcaciones Cuddy Canestrari incorpora la nueva 180co.",
    },
  ]);

  const [carroDeCompras, setCarro] = useState([]);
  const [mostrarCarro, setMostrarCarro] = useState(false);
  const [cantidadItems, setCantidadItems] = useState(0);

  return (
    <div className="App">
      <Fragment>
        <Header
          mostrarCarro={mostrarCarro}
          setMostrarCarro={setMostrarCarro}
          cantidadItems={cantidadItems}
        />
        <main role="main" className="flex-shrink-0">
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            {embarcaciones.map((embarcacion) => (
              <Embarcacion
                key={embarcacion.id}
                embarcacion={embarcacion}
                embarcaciones={embarcaciones}
                carroDeCompras={carroDeCompras}
                setCarro={setCarro}
                setEmbarcacion={setEmbarcacion}
                cantidadItems={cantidadItems}
                setCantidadItems={setCantidadItems}
              />
            ))}

            <CarroDeCompras
              carroDeCompras={carroDeCompras}
              setCarro={setCarro}
              setEmbarcacion={setEmbarcacion}
              mostrarCarro={mostrarCarro}
              setMostrarCarro={setMostrarCarro}
              cantidadItems={cantidadItems}
              setCantidadItems={setCantidadItems}
            />
          </div>
        </main>

        <Footer fecha={fecha} />
      </Fragment>
    </div>
  );
}

export default App;
