import React, { useEffect, useState } from "react";
import User from "./components/User";
import "./App.css";

function App() {
  const [dataState, setDataState] = useState([]);
  const [pageState, setPageState] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    getData();
  }, [pageIndex]);
  const nextPageHandler = () => {
    if (pageState.total_pages > pageIndex) {
      setPageIndex(pageIndex + 1);
    }
  };
  const prevPageHandler = () => {
    if (pageIndex === 1) return;
    setPageIndex(pageIndex - 1);
  };
  const getData = async () => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${pageIndex}`
    );
    const data = await response.json();
    setDataState(data.data);
    setPageState(data);
    console.log(data);
  };

  return (
    <div className="App">
      <div className="pages">
        <button onClick={prevPageHandler}>&lt;</button>
        <p>{pageState.page}</p>
        <button onClick={nextPageHandler}>&gt;</button>
      </div>

      <h1>
        {dataState.map((user) => (
          <User
            email={user.email}
            avatar={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
            key={user.id}
          />
        ))}
      </h1>
    </div>
  );
}

export default App;
