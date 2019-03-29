import React, { Component } from "react";
import JewelryCatalog from "./jewelryCatalog";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <JewelryCatalog message="secret message"/>
      </div>
    );
  }
}
