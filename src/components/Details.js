import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Details({ info }) {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
        );

        if (!response.ok) {
          throw new Error("");
        }
        const data = await response.json();
        setDetail(data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [info]);

  if (detail.length === 0) return;

  return (
    <>
      <div className="details">
        {loading && <p>Loading...</p>}
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