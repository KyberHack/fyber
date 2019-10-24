import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, history, collectionId }) => {
  const { id, name, price, imageUrl, token } = item;

  return (
    <div
      className="collection-item"
      onClick={() => history.push(`${collectionId}/${id}`)}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">
          {price} {token}
        </span>
      </div>
      {/* <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton> */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collectionId: ownProps.match.params.collectionId
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CollectionItem)
);
