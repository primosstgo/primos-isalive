import moment from 'moment';
import './../style/container-status.css';

export default function Container({ data }) {
  let ports = [];
  for (let [i, port] of data.ports.entries()) {
    if (i > 0)
      ports.push('\u00A0')
    ports.push(<a href={'http://prime.inf.santiago.usm.cl:' + port} target="_blank">{port}</a>)
  }

  const statusIconClass = data.status === "running" ? "green-icon" : "red-icon";

  const handleReset = () => {
    fetch(`/reset-container/${data.id}`, { method: 'POST' })
      .then(() => window.location.reload());
  };

  return (
          <tr className={statusIconClass}>
            <td>{data.name}</td>
            <td>{ports}</td>
            <td>{data.status}</td>
            <td>{moment(data.status_time).fromNow()}</td>
            <td>
              {/*<span className={statusIconClass}></span>*/}
              <button onClick={handleReset} class="button">Reset</button>
            </td>
          </tr>
  );
}
