import React, { useState, useEffect } from 'react';
import db from '../.././utils/db.json';
import MaterialTable from 'material-table';
import { saveAs } from 'file-saver';

export default function Dashboard() {
  const [data, setData] = useState([]),
    columns = [
      { title: 'Partida', field: 'partida' },
      { title: 'Descripción', field: 'descripcion' },
      { title: 'Ver', field: 'download' }
    ];

  const getCsvByName = (id) => {
    const url = 'http://localhost:80/obtenerArchivo',
      requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: id })
      };

    const fetchData = async () => {
      try {
        const response = await fetch(url, requestOptions);
        let blob = await response.blob();
        await saveAs(blob, 'partida');
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  };

  useEffect(() => {
    db.map((item) => {
      item['download'] = (
        <button onClick={() => getCsvByName(item.id)} className={'download-button'}>
          Descargar
        </button>
      );
    });
  }, []);

  return (
    <div className="app-container container mt-5">
      <h2 className="mb-4">Listado de activos</h2>
      <MaterialTable
        title="Nombre"
        data={db}
        columns={columns}
        options={{
          search: false
        }}
      />
    </div>
  );
}
