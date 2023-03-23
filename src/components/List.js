import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Details from "./Details";

function List() {
  const [data, setList] = useState([]);
  const [info, setInfo] = useState();

  const fetchApi = () =>
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    );
  useEffect(() => {
    fetchApi()
      .then((response) => response.json())
      .then((response) => {
        setList(response);
      });
  }, []);

  const handleClick = (e) => {
    const pick = data.find((item) => item.name === e.target.outerText);
    setInfo(pick);
    let listItemColor = document.querySelector(".list-item-color");
    if (listItemColor === null) {
      e.target.classList.add("list-item-color");
    } else {
      let listItemColorRemove = document.querySelector(".list-item-color");
      listItemColorRemove.classList.remove("list-item-color");
      e.target.classList.add("list-item-color");
    }
  };

  return (
    <div className="container-result">
      <ul className="list">
        {data.map((user) => (
          <li className="list-item" key={user.id} onClick={handleClick}>
            {user.name}
          </li>
        ))}
      </ul>
      {info && <Details info={info} />}
    </div>
  );
}

export default List;
