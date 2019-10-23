import React from "react";
import { connect } from "react-redux";

import "./collection-details.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { selectCollectionById } from "../../redux/shop/shop.selectors";

const CollectionDetails = ({ itemId, collectionId, collectionItem }) => {
  const { name, imageUrl, price } = collectionItem;

  return (
    <div className="collection-detail">
      <div className="collection-image">
        <img src={imageUrl} alt="item" height="auto" width="500" />
      </div>
      <div className="collection-info">
        <h1 className="collection-name">{name}</h1>
        <h1>${price}</h1>
        <CustomButton onClick={() => console.log("buy")} inverted>
          Buy Now
        </CustomButton>
        <CustomButton onClick={() => console.log("borrow")}>
          Borrow using Compound
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  const collectionId = ownProps.match.params.collectionId;
  return {
    collectionItem: selectCollectionById(collectionId, itemId)(state)
  };
};

export default connect(mapStateToProps)(CollectionDetails);
