import '../style';
import { useState } from 'preact/hooks';
import Container from './container';

import moment from "moment";
import "moment/dist/locale/es";
moment.locale('es');

export default function App() {
  const [value, setValue] = useState([]);

  if (value.length == 0)
    fetch('http://localhost:8003/containers')
      .then( r => r.json())
      .then( r => setValue(r) )
  
  return (
	  <div class='app'>
      <table className='container-table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Puertos</th>
            <th>Estado</th>
            <th>Tiempo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {value.map( data => <Container data={data} />)}
        </tbody>
      </table>
		</div>
	)
};
