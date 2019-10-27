import React from "react";
import { connect } from "react-redux";

import "./collection-details.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { selectCollectionById } from "../../redux/shop/shop.selectors";
import executeKyberSwap from "../../web3/kyberswap";
import executeCompound from "../../web3/compound";
import {getBack} from "../../web3/compound";
import getBalance from "../../web3/balance";
import { KNC_TOKEN_ADDRESS } from "../../web3/address";
import imgS from '../../assets/status.png';
import moment from 'moment';



class CollectionDetails extends React.Component {
  state = { account: null, knc: null, errorMessage: "" , withdraw: false};
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

  getbackmoney(){
    this.setState()
  }

  render() {
    const { name, imageUrl, price, token } = this.props.collectionItem;
    const { account } = this.state;
    
    console.log("account",account)
    return (
      <div>
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
            <h5>
              Lend fees: {price / 4} {token}
            </h5>
            <h5>
              Security Deposit: {price} {token}
            </h5>
            <h6>
              You will get your entire security deposit back if you return the
              product
            </h6>
            <CustomButton onClick={() => console.log("borrow")}>
              Borrow using Compound
            </CustomButton>
          </div>
        </div>
        <div className="collection-info">
          <h1 className="collection-name">{name}</h1>
          <h1>
            {price} {token}
          </h1>
          <CustomButton onClick={() => executeKyberSwap(account)} inverted>
            Buy Now
          </CustomButton>
          <h5>Lend fees: {price/4} {token}</h5>
          <h5>Security Deposit: {price} {token}</h5>
          <h6>You will get your entire security deposit back if you return the product</h6>
          <CustomButton onClick={() => executeCompound(account)}>
           Borrow using Compound
          </CustomButton>
         
          <h6>This button becomes active when the trade between two people completes , the security deposit along with intrest gets returned </h6>
          <CustomButton id="bttHider" disabled onClick={() => getBack(account)}>
           Withdraw using Compound
          </CustomButton>
          <h3>Send shipping address securly using status.im, you need to have status installed, scan QR code after you pay</h3>
          <h4><img src={imgS}/></h4>
          <CustomButton onClick={() => console.log("dispute")}>
            Raise a dispute
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
