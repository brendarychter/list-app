import React, {useState, useEffect} from 'react';
import db from '../.././utils/db.json';
import schema from '../.././utils/schema';
import Table from "./Table";

export default function Dashboard() {
    const [ data, setData] = useState(null);
    // const columns = [
    //     {title:"Partida", field:"partida"},
    //     {title:"Descripción", field:"description"},
    //     {title:"Aplicabilidad", field:"aplicabilidad"},
    //     {title:"Cumplimiento", field:"cumplimiento"},
    //     {title:"Acción", field:"action"},
    // ]

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then( res =>res.json() )
        //     .then(res => setData(res))
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(db);
            }, 2000)
        }).then((result) => {
            setData(result);
        })
    });

    return (
        <div className="app-container container mt-5">
            <h2 className="mb-4">Listado de activos para: </h2>
            <Table headers={Object.keys(schema)} rows={data} />
        </div>
)}
