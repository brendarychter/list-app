import React, { useState, useEffect } from 'react';
import partidas from '../.././utils/db.json';
import MaterialTable from 'material-table';
import fetchData from "./client";

export default function Dashboard() {
  const [tableData, setTableData] = useState([]),
    columns = [
      { title: 'Partida', field: 'partida' },
      { title: 'Descripción', field: 'descripcion' },
      { title: 'Ver', field: 'download' }
    ];

  const getCsvByName = (id) => {
    const url = 'https://jsonplaceholder.typicode.com/users',
      params = {
        method: 'POST',
        headers: { 'Content-Type': 'x-www-form-urlencoded' },
        body: JSON.stringify({ filename: id })
      };
    const response = fetchData(url, params);
    console.log(response);
    // setTableData(response);
    //

    const fetchDataFromItem = async () => {
      try {
        const response = await fetch(url, params);
        const json = await response.json();
        console.log(json);
        // setTableData(json.tableData);
      } catch (error) {
        console.log('error', error);
      }
    };
     // fetchDataFromItem();
  };

  const loadItems = () => {
    partidas.map((item) => {
      item['download'] = (
        <button onClick={() => getCsvByName(item.id)} className={'download-button'}>
          Descargar
        </button>
      );
    });
  };

  const loadCapitals = () => {
    const url = '/calcularCapitales',
      params = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: 'listado.csv' })
      };

    //TODO: refactor one only api call for all the services
    const fetchList = async () => {
      try {
        const response = await fetch(url, params);
        const json = await response.json();
        // Aca vendria el tableData
        //Nombre de la partida y el total. cargar la tabl
        // setData(json.data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchList();
  };

  useEffect(() => {
    // loadCapitals();
    loadItems();
  }, []);

  return (
    <div className="app-container container mt-5">
      <h2 className="mb-4">Listado de activos</h2>
      <MaterialTable
        data={partidas}
        columns={columns}
        options={{
          search: false,
            showTitle: false
        }}
      />
    </div>
  );
}
