import React from "react";
import { connect } from "react-redux";

import "./collection-details.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { selectCollectionById } from "../../redux/shop/shop.selectors";
import executeKyberSwap from "../../web3/kyberswap";
import getBalance from "../../web3/balance";
import { KNC_TOKEN_ADDRESS } from "../../web3/address";

class CollectionDetails extends React.Component {
  state = { account: null, knc: null, errorMessage: "" };
  componentDidMount() {
    this.initialize();
  }

  async initialize() {
    try {
      const [account] = await window.ethereum.enable();
      const knc = await getBalance(account, KNC_TOKEN_ADDRESS);

      this.setState({
        account,
        knc
      });
    } catch (error) {
      console.error(error);
      this.setState({
        errorMessage:
          "Error connecting to MetaMask! Please try reloading the page..."
      });
    }
  }

  render() {
    const { name, imageUrl, price, token } = this.props.collectionItem;
    const { account } = this.state;
    return (
      <div className="collection-detail">
        <div className="collection-image">
          <img src={imageUrl} alt="item" height="auto" width="500" />
        </div>
        <div className="collection-info">
          <h1 className="collection-name">{name}</h1>
          <h1>
            {price} {token}
          </h1>
          <CustomButton onClick={() => executeKyberSwap(account)} inverted>
            Buy Now
          </CustomButton>
          <CustomButton onClick={() => console.log("borrow")}>
            Borrow using Compound
          </CustomButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  const collectionId = ownProps.match.params.collectionId;
  return {
    collectionItem: selectCollectionById(collectionId, itemId)(state)
  };
};

export default connect(mapStateToProps)(CollectionDetails);
