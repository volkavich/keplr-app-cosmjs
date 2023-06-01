import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";
import ChainInfo from "../data/chainInfo";

let accounts, CosmWasmClient, queryHandler, gasPrice;

const getBalance = async () => {
  if (window["keplr"]) {
    if (window.keplr["experimentalSuggestChain"]) {
      await window.keplr.experimentalSuggestChain(ChainInfo);
      await window.keplr.enable(ChainInfo.chainId);
      const offlineSigner = await window.getOfflineSigner(ChainInfo.chainId);
      CosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
        ChainInfo.rpc,
        offlineSigner
      );

      // This async waits for the user to authorize your dApp
      // it returns their account address only after permissions
      // to read that address are granted
      accounts = await offlineSigner.getAccounts();

      queryHandler = CosmWasmClient.queryClient.wasm.queryContractSmart;
      // Gas price
      gasPrice = GasPrice.fromString("0.002uconst");

      console.log("Wallet connected", {
        offlineSigner: offlineSigner,
        CosmWasmClient: CosmWasmClient,
        accounts: accounts,
        chain: ChainInfo,
        queryHandler: queryHandler,
        gasPrice: gasPrice,
      });

      async function getAddressBalance(address) {
        try {
          let balance = await CosmWasmClient.getBalance(
            address,
            ChainInfo.currencies[0].coinMinimalDenom
          );
          console.log("Account balance", {
            user: address,
            balance: balance,
          });
          console.log(balance.amount);
        } catch (e) {
          console.warn("Error reading account balance", [e, address]);
        }
      }

      getAddressBalance(accounts[0].address);
    } else {
      console.warn(
        "Error accessing experimental features, please update Keplr"
      );
    }
  } else {
    console.warn("Error accessing Keplr, please install Keplr");
  }
};

export default getBalance;