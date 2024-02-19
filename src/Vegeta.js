import React, { Component } from "react";
import countHits from "./countHits";
import vegeta from "./vegeta.png";
import { Badge } from "react-bootstrap";

export class Vegeta extends Component {
  render() {
    const { name, addOneHit, hocState, life } = this.props;

    const lifeValue =
      life > 0 ? (
        <td>{life} %</td>
      ) : (
        <td>
          <Badge bg="danger">Mort !!!</Badge>
        </td>
      );

    const button =
      life > 0 ? (
        <button onClick={addOneHit} className="btn btn-success m-3">
          {name} Attaque !
        </button>
      ) : (
        <button className="btn btn-danger m-3 disabled">Mort</button>
      );

    return (
      <div className="col">
        <img src={vegeta} alt="vegeta" width={200} />
        <br />
        {button}
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Coups</th>
              <th scope="col">Vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Vegeta, 10);
