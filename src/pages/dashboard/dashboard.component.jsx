import React from "react";
import "./dashboard.styles.scss";
import web3 from "../../web3/web3";
import getBalance from "../../web3/balance";

const DAI_TOKEN_ADDRESS = "0xad6d458402f60fd3bd25163575031acdce07538d";
const KNC_TOKEN_ADDRESS = "0x4e470dc7321e84ca96fcaedd0c8abcebbaeb68c6";

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
    if (errorMessage) return <h2>{errorMessage}</h2>;
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>{account}</h2>
        <h3>{eth} ETH</h3>
        <h3>{dai} DAI</h3>
        <h3>{knc} KNC</h3>
      </div>
    );
  }
}

export default Dashboard;
