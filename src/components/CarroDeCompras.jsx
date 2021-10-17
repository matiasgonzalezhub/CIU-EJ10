import React, { Fragment } from "react";
import Embarcacion from "./Embarcacion";

const CarroDeCompras = ({
  carroDeCompras,
  setCarro,
  setEmbarcacion,
}) => {


  return (
    <Fragment>
      <div className="">
        <h3> Lista de compras </h3>

        {carroDeCompras.length === 0
          ? null
          : carroDeCompras.map((embarcacion) => (
              <Embarcacion
                key={embarcacion.id}
                embarcacion={embarcacion}
                carroDeCompras={carroDeCompras}
                setCarro={setCarro}
                setEmbarcacion={setEmbarcacion}
              />
            ))}
      </div>
    </Fragment>
  );
};

export default CarroDeCompras;
