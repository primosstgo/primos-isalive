import moment from 'moment';
import './../style/containerStatus.css';

export default function Container({ data }) {
  let ports = [];
  for (let [i, port] of data.ports.entries()) {
    if (i > 0)
      ports.push('\u00A0')
    ports.push(<a href={'http://prime.inf.santiago.usm.cl:' + port} target="_blank">{port}</a>)
  }

  // Define CSS classes for the status icon
  const statusIconClass = data.status === "running" ? "green-icon" : "red-icon";

  const handleReset = () => {
    fetch(`/reset-container/${data.id}`, { method: 'POST' })
      .then(() => window.location.reload());
  };

  return (
    <div className='container'>
      <table className='container-table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Puertos</th>
            <th>Estado</th>
            <th>Tiempo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{ports}</td>
            <td>{data.status}</td>
            <td>{moment(data.status_time).fromNow()}</td>
            <td>
              <span className={statusIconClass}></span>
              <button onClick={handleReset} class="button">Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
