import moment from 'moment';

export default function Container({ data }) {
  let ports = []
  for (let [i, port] of data.ports.entries()) {
    if (i > 0)
      ports.push('\u00A0')
    ports.push(<a href={'http://prime.inf.santiago.usm.cl:' + port} target="_blank">{port}</a>)
  }

  // Define CSS classes for the status icon
  const statusIconClass = data.status === "running" ? "green-icon" : "red-icon";

  return (
    <div className='container'>
      <div className='grid'>
        <span style={{ fontSize: '1.5em' }}>{data.name}</span>
        <span>{ports}</span>
        <span><i>{data.status}</i>&nbsp;{moment(data.status_time).fromNow()}</span>
        <span className={statusIconClass}></span>
      </div>
    </div>
  )
}
