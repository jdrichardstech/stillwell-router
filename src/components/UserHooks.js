import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(location);
    axios.get(`http://api.tvmaze.com/shows/${id}`).then((item) => {
      setData(item.data);
    });
  }, [id, location]);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>{data.summary}</p>
          <Link to={'/'}>Home</Link>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default User;
