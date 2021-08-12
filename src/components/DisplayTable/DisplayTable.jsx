import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Repository from "../Repository/Repository";
import "./styles.css";
import { Scrollbars } from "react-custom-scrollbars";

const DisplayTable = ({ data, repositories }) => {
  const [data1, setData1] = useState([]);
  const [sortType, setSortType] = useState("albums");
  const [q, setQ] = useState("");
  const [searchParam] = useState(["open_issues_count", "name"]);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        Name: "name",
        Star: "stargazers_count",
        Open: "open_issues_count",
        Watchers: "watchers_count",
      };
      const sortProperty = types[type];
      const sorted = [...repositories].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData1(sorted);
    };

    sortArray(sortType);
  });

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div className="table-container">
      <div className="card-container">
        <Card
          name={data.name}
          username={data.login}
          avatar={data.avatar_url}
          bio={data.bio}
          url={data.html_url}
          public_repos={data.public_repos}
          followers={data.followers}
          following={data.following}
        />
      </div>
      <div className="repo-container">
        <h1 className="repo-title">Repositories</h1>
        <div className="repo-search">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              autoComplete="off"
              onChange={(e) => setQ(e.target.value)}
            />
          </label>

          <select
            className="search-select"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option className="search-option" value="Name">
              Repo Name
            </option>
            <option className="search-option" value="Star">
              Star
            </option>
            <option className="search-option" value="Open">
              Open Issue
            </option>
            <option className="search-option" value="Watchers">
              Watchers
            </option>
          </select>
        </div>

        <Scrollbars style={{ width: 800, height: 470 }}>
          {search(data1).map((repo) => {
            return (
              <Repository
                key={repo.html_url}
                name={repo.name}
                language={repo.language}
                html_url={repo.html_url}
                stargazers_count={repo.stargazers_count}
                open_issues_count={repo.open_issues_count}
                watchers_count={repo.watchers_count}
              />
            );
          })}
        </Scrollbars>
      </div>
    </div>
  );
};

export default DisplayTable;
