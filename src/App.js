import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment, useState } from "react";
import Embarcacion from "./components/Embarcacion";
import CarroDeCompras from "./components/CarroDeCompras";

function App() {
  const fecha = new Date().getFullYear();

  const [embarcaciones, setEmbarcacion] = useState([
    { id: 1, marca: "Canestrari", modelo: "208", precio: "50000" },
    { id: 2, marca: "Canestrari", modelo: "208 FB", precio: "60000" },
    { id: 3, marca: "Canestrari", modelo: "325", precio: "80000" },
    { id: 4, marca: "Canestrari", modelo: "280 Crossover", precio: "250000" },
  ]);

  const [carroDeCompras, setCarro] = useState([]);

  return (
    <div className="App">
      <Fragment>
        <Header />
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
              />
            ))}

            <CarroDeCompras
              carroDeCompras={carroDeCompras}
              setCarro={setCarro}
              setEmbarcacion={setEmbarcacion}
            />
          </div>
        </main>

        <Footer fecha={fecha} />
      </Fragment>
    </div>
  );
}

export default App;
