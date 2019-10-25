import React from "react";
import "./dashboard.styles.scss";
import web3 from "../../web3/web3";
import getBalance from "../../web3/balance";
import Header from "../../components/header/header.component";
import { DAI_TOKEN_ADDRESS, KNC_TOKEN_ADDRESS } from "../../web3/address";
import CustomButton from "../../components/custom-button/custom-button.component";
import heromediadark from "../../assets/landing-page/images/hero-media-dark.svg";
class Dashboard extends React.Component {
  state = { account: null, eth: null, dai: null, knc: null, errorMessage: "" };
  componentDidMount() {
    this.initialize();
  }

  async initialize() {
    try {
      const [account] = await window.ethereum.enable();
      const balance = await web3.eth.getBalance(account);
      const dai = await getBalance(account, DAI_TOKEN_ADDRESS);
      const knc = await getBalance(account, KNC_TOKEN_ADDRESS);

      this.setState({
        account,
        eth: web3.utils.fromWei(balance, "ether"),
        dai,
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
    const { account, eth, dai, knc, errorMessage } = this.state;
    if (errorMessage)
      return (
        <div className="main-container">
          <Header />
          <h2>{errorMessage}</h2>;
        </div>
      );
    return (
      <div className="main-container">
        <Header />
        <h1 className="center">Dashboard</h1>
        <h3 className="center">{account}</h3>
        <div className="card-container">
          <div className="card">
            <h3>{eth ? `${eth} ETH` : "0 ETH"}</h3>
          </div>
          <div className="card">
            <h3>{dai ? `${dai} DAI` : "0 DAI"}</h3>
          </div>
          <div className="card">
            <h3>{knc ? `${knc} KNC` : "0 KNC"}</h3>
          </div>
        </div>
        <div className="depositbtn">
          <CustomButton>Deposit earnings into compound</CustomButton>
        </div>
        <section className="cta section">
          <div className="container-sm">
            <div className="cta-inner section-inner">
              <div className="cta-header text-center">
                <p className="section-paragraph">
                  Powered by Kyber, Compound and Status
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
