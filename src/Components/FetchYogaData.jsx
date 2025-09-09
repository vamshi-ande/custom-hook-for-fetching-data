import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchYogaData = () => {
  // Use the custom hook to fetch data from the Yoga API.
  const [data, loading] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
  return (
  <div>
    <h1 className="usefetch_heading">Yoga Benefits</h1>
    <br />
    {loading && <p className='loader'></p>}
    <ul className="list_data_main">
      {data && data.map((e,index) => (
        <li className="list_data" key={index}>
          <h3>{e.name}</h3>
          <p><strong>Benefits: </strong>{e.benefits}</p>
          <p><strong>Duration: </strong>{e.time_duration}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default FetchYogaData;