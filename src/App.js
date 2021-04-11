import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Table } from 'react-bootstrap';

export default function App() {
  return (
    <div className="app-container container mt-3">
      <h1>Listado de activos</h1>
      <Router>
        <Switch>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Partida</th>
                <th>Descripción</th>
                <th>Aplicabilidad</th>
                <th>Cumplimiento controles</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </Table>
          {/*  component={Dashboard}*/}
          <Route path="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}
