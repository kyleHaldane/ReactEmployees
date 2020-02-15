import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item">
          <div className="container">
            <div className="row">
              <div className="col photo">
                <img alt={result.name.last} className="img-fluid" src={result.picture.large} />
              </div>
              <div className="col last-name">
                {result.name.last}
              </div>
              <div className="col first-name">
                {result.name.first}
              </div>
              <div className="col email">
                {result.email}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;