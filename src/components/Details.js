// import React from "react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Details({ info }) {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      console.log(loading);
      const fetchApiDetails = () =>
        fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
        );

      fetchApiDetails()
        .then((response) => response.json())
        .then((response) => {
          setDetail(response);
        });
    } finally {
      setLoading(false);
    }
  }, [info]);

  if (detail.length === 0) return;

  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="details">
        <img
          className="banner"
          src={detail.avatar}
          key={detail.id}
          alt="banner"
        />
        <div className="name">{detail.name}</div>
        <div className="city">City: {detail.details.city}</div>
        <div className="company">Company: {detail.details.company}</div>
        <div className="position">Position: {detail.details.position}</div>
      </div>
    </>
  );
}

export default Details;
