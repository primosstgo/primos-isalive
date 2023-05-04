import moment from 'moment';

export default function Container({data}) {
  console.log(data)
  return (
    <tr>
      <td>{data.name}</td>
      <td>
        {data.ports.map( (port, i) =>
          <span>
            {i > 0 && '\u00A0'}
            <a href={'http://prime.inf.santiago.usm.cl:' + port} target="_blank">{port}</a>
          </span>
        )}
      </td>
      <td><i>{data.status}</i>&nbsp;{moment(data.status_time).fromNow()}</td>
    </tr>
  )
}
