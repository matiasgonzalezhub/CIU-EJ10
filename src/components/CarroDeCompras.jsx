import React, { Fragment } from "react";
import Embarcacion from "./Embarcacion";

const CarroDeCompras = ({
  carroDeCompras,
  setCarro,
  setEmbarcacion,
  mostrarCarro,
  setMostrarCarro,
  cantidadItems,
  setCantidadItems
}) => {
  return (
    <Fragment>
      <div className={mostrarCarro ? "carrito" : null}>
        {carroDeCompras.length === 0 || !mostrarCarro
          ? null
          : carroDeCompras.map((embarcacion) => (
              <Embarcacion
                key={embarcacion.id}
                embarcacion={embarcacion}
                carroDeCompras={carroDeCompras}
                setCarro={setCarro}
                setEmbarcacion={setEmbarcacion}
                setMostrarCarro={setMostrarCarro}
                cantidadItems={cantidadItems}
                setCantidadItems={setCantidadItems}
              />
            ))}
      </div>
    </Fragment>
  );
};

export default CarroDeCompras;
