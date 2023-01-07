"use strict";

const querystring = require("querystring");

module.exports.getAll = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: [
          {
            estado: "vigente",
            gestor: "Fulanito de tal",
            fechaEntrada: "01/01/2023",
            fechaSalida: "01/02/2023",
            habitacion: "2",
            nochesPagadas: "3",
            nota: "esto es un ejemplo",
            tipo: "normal",
            huespedes: ["1", "2", "3"],
            noVuelo: "0123456789",
            aerolinea: "Cubana",
            horaSalida: "12:00",
            horaLlegada: "15:00",
          },
          {
            estado: "vigente",
            gestor: "Fulanito de tal",
            fechaEntrada: "01/01/2023",
            fechaSalida: "01/02/2023",
            habitacion: "2",
            nochesPagadas: "3",
            nota: "esto es un ejemplo",
            tipo: "normal",
            huespedes: ["1", "2", "3"],
            noVuelo: "0123456789",
            aerolinea: "Cubana",
            horaSalida: "12:00",
            horaLlegada: "15:00",
          },
          {
            estado: "vigente",
            gestor: "Fulanito de tal",
            fechaEntrada: "01/01/2023",
            fechaSalida: "01/02/2023",
            habitacion: "2",
            nochesPagadas: "3",
            nota: "esto es un ejemplo",
            tipo: "normal",
            huespedes: ["1", "2", "3"],
            noVuelo: "0123456789",
            aerolinea: "Cubana",
            horaSalida: "12:00",
            horaLlegada: "15:00",
          },
          {
            estado: "vigente",
            gestor: "Fulanito de tal",
            fechaEntrada: "01/01/2023",
            fechaSalida: "01/02/2023",
            habitacion: "2",
            nochesPagadas: "3",
            nota: "esto es un ejemplo",
            tipo: "normal",
            huespedes: ["1", "2", "3"],
            noVuelo: "0123456789",
            aerolinea: "Cubana",
            horaSalida: "12:00",
            horaLlegada: "15:00",
          },
          {
            estado: "vigente",
            gestor: "Fulanito de tal",
            fechaEntrada: "01/01/2023",
            fechaSalida: "01/02/2023",
            habitacion: "2",
            nochesPagadas: "3",
            nota: "esto es un ejemplo",
            tipo: "normal",
            huespedes: ["1", "2", "3"],
            noVuelo: "0123456789",
            aerolinea: "Cubana",
            horaSalida: "12:00",
            horaLlegada: "15:00",
          },
          {
            estado: "vigente",
            gestor: "Fulanito de tal",
            fechaEntrada: "01/01/2023",
            fechaSalida: "01/02/2023",
            habitacion: "2",
            nochesPagadas: "3",
            nota: "esto es un ejemplo",
            tipo: "normal",
            huespedes: ["1", "2", "3"],
            noVuelo: "0123456789",
            aerolinea: "Cubana",
            horaSalida: "12:00",
            horaLlegada: "15:00",
          },
          {
            estado: "vigente",
            gestor: "Fulanito de tal",
            fechaEntrada: "01/01/2023",
            fechaSalida: "01/02/2023",
            habitacion: "2",
            nochesPagadas: "3",
            nota: "esto es un ejemplo",
            tipo: "normal",
            huespedes: ["1", "2", "3"],
            noVuelo: "0123456789",
            aerolinea: "Cubana",
            horaSalida: "12:00",
            horaLlegada: "15:00",
          },
        ],

        input: event,
      },
      null,
      2
    ),
  };
};
module.exports.getOne = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: [
          {
            estado: "vigente",
            gestor: "Fulanito de tal",
            fechaEntrada: "01/01/2023",
            fechaSalida: "01/02/2023",
            habitacion: "2",
            nochesPagadas: "3",
            nota: "esto es un ejemplo",
            tipo: "normal",
            huespedes: ["1", "2", "3"],
            noVuelo: "0123456789",
            aerolinea: "Cubana",
            horaSalida: "12:00",
            horaLlegada: "15:00",
          },
        ],
        id: event.pathParameters.id,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.set = async (event) => {
  const body = querystring.parse(event["body"]);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: body.reservation,
        input: event,
      },
      null,
      2
    ),
  };
};
