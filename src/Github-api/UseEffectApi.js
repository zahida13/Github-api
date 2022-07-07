import React, { useState, useEffect } from "react";

const UseEffectApi = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-fluid">
      {users.map((user) => {
        return (
          <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img
                    src={user.avatar_url}
                    className="rounded"
                    style={{
                      width: "135px",
                      height: "120px",
                    }}
                    key={user.id}
                  />
                </div>
                <div className="ml-3 w-100">
                  <h4
                    className="mb-0 mt-0 textLeft"
                    style={{ color: "#222222" }}
                  >
                    {user.login}
                  </h4>
                  <span className="text-left" style={{ color: "#666666" }}>
                    {user.type}
                  </span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column">
                      <span className="articles">Articles</span>{" "}
                      <span className="number1">38</span>{" "}
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>{" "}
                      <span className="number2">980</span>{" "}
                    </div>
                    <div className="d-flex flex-column">
                      <span className="rating">Rating</span>{" "}
                      <span className="number3">8.9</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectApi;
