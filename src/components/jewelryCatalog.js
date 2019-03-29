import React, { Component } from "react";
import { jsonData } from "../db";
import { addToCart, removeFromCart } from "../Actions/index";
import styles from "../styles.css";
import { connect } from "react-redux";

export class JewelryCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { message } = this.props;

    return Object.values(jsonData.necklaces).map(necklace => {
      return (
        <div>
          <p>{message}</p>
          <p>{necklace.name}</p>
          <p>{necklace.price}</p>
          <img src={necklace.image} />
          <button onClick={() => this.props.dispatchAddToCart(necklace)}>
            Add
          </button>
          <button onClick={() => this.props.dispatchRemoveToCart(necklace)}>
            Remove
          </button>
          ;
        </div>
      );
    });
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddToCart: necklace => dispatch(addToCart(necklace)),
    dispatchRemoveToCart: necklace => dispatch(removeFromCart(necklace))
  };
};

const mapStateToProps = dispatch => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JewelryCatalog);
