import React, { useState, useEffect } from "react";
import api from "../../services/api";
import DisplayTable from "../../components/DisplayTable/DisplayTable";
import "./styles.css";

function Landing() {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    (async () => {
      const profile = await api.get(`${userName}`);
      const profileJson = await profile.data;
      console.log("user data:::", profileJson);
      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      console.log("repo data:: ", repoJson);
      if (profileJson) {
        setUserData(profileJson);
        setRepos(repoJson);
      }
    })();
  }, [userName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target.username.value);
  };

  return (
    <>
      <div className="background-image">
        <div className="background-image__overlay">
          <form onSubmit={handleSubmit} data-testid="form">
            <div className="box-center">
              <div className="title">
                <h1 className="text-light">Search GitHub Users</h1>
              </div>
              <div className="input-box-container">
                <input
                  className="input-box"
                  placeholder="Enter a username to fetch a user's profile info and repos.
                  (Ex- Rohit-081)"
                  id="username"
                  type="text"
                  data-testid="search-input"
                  autoComplete="off"
                />
                <button type="submit" className="button" data-testid="button">
                  Search User
                </button>
              </div>
              <div className="Flex-table">
                {!repos.length ? (
                  <p></p>
                ) : (
                  <DisplayTable data={userData} repositories={repos} />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Landing;
