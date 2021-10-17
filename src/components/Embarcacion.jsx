import React, { Fragment } from "react";

const Embarcacion = ({
  embarcacion,
  embarcaciones,
  carroDeCompras,
  setCarro,
  setEmbarcacion,
}) => {
  const { id, marca, modelo, precio } = embarcacion;

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }

    return false;
  }

  const registrarCompra = (id) => {
    const embarcacion = embarcaciones.filter(
      (embarcacion) => embarcacion.id === id
    )[0];

    if (!containsObject(embarcacion, carroDeCompras)) {
      setCarro([...carroDeCompras, embarcacion]);
    }
  };

  const deshacerCompra = (id) => {
    const arrayActualizado = carroDeCompras.filter(
      (embarcacion) => embarcacion.id !== id
    );

    setCarro(arrayActualizado);
  };

  return (
    <Fragment>
      <br />
      <div className="card">
        <h5 className="card-header"> Marca : {marca} </h5>
        <div className="card-body">
          <h5 class="card-title">Modelo : {modelo} </h5>
        </div>
        {embarcaciones ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => registrarCompra(id)}
          >
            Comprar
          </button>
        ) : (
          <button
            classNameme="btn btn-primary"
            type="button"
            onClick={() => deshacerCompra(id)}
          >
            Deshacer
          </button>
        )}
      </div>
      <br />
    </Fragment>
  );
};

export default Embarcacion;
