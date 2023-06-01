import { Bech32Address } from "@keplr-wallet/cosmos";

const ChainInfo = {
  rpc: "https://rpc-osmosis.blockapsis.com",
  rest: "https://lcd-osmosis.blockapsis.com",
  chainId: "osmosis-1",
  chainName: "Osmosis",
  stakeCurrency: {
    coinDenom: "OSMO",
    coinMinimalDenom: "uosmo",
    coinDecimals: 6,
    coinGeckoId: "osmosis",
    coinImageUrl: window.location.origin + "/public/assets/tokens/osmosis.svg",
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("osmo"),
  currencies: [
    {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      coinImageUrl:
        window.location.origin + "/public/assets/tokens/osmosis.svg",
    },
    {
      coinDenom: "ION",
      coinMinimalDenom: "uion",
      coinDecimals: 6,
      coinGeckoId: "ion",
      coinImageUrl: window.location.origin + "/public/assets/tokens/ion.png",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      coinImageUrl:
        window.location.origin + "/public/assets/tokens/osmosis.svg",
    },
  ],
  features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
  explorerUrlToTx: "https://www.mintscan.io/osmosis/txs/{txHash}",
};

export default ChainInfo;