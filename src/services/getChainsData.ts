import { ChainData } from "../types";

export async function getChainsData(): Promise<ChainData[]> {
  return [
    {
      chainId: "1",
      name: "Ethereum",
      blockExplorerUrl: "https://etherscan.io/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg",
    },
    {
      chainId: "42161",
      name: "Arbitrum",
      blockExplorerUrl: "https://arbiscan.io/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arb.svg",
    },
    {
      chainId: "10",
      name: "optimism",
      blockExplorerUrl: "https://optimistic.etherscan.io/",
      logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png",
    },
    {
      chainId: "59144",
      name: "linea",
      blockExplorerUrl: "https://lineascan.build/",
      logoUrl:
        "https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/linea.logo.svg",
    },
    {
      chainId: "8453",
      name: "base",
      blockExplorerUrl: "https://basescan.org/",
      logoUrl:
        "https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/base.logo.svg",
    },
    {
      chainId: "43114",
      name: "Avalanche",
      blockExplorerUrl: "https://avascan.info/blockchain/c/",
      logoUrl:
        "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/avalanche.svg",
    },
    {
      chainId: "137",
      name: "Polygon",
      blockExplorerUrl: "https://polygonscan.com/",
      logoUrl:
        "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg",
    },
    {
      chainId: "56",
      name: "binance",
      blockExplorerUrl: "https://bscscan.com/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg",
    },
    {
      chainId: "250",
      name: "Fantom",
      blockExplorerUrl: "https://ftmscan.com/",
      logoUrl:
        "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg",
    },
    {
      chainId: "1284",
      name: "Moonbeam",
      blockExplorerUrl: "https://moonscan.io/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg",
    },
    {
      chainId: "5000",
      name: "mantle",
      blockExplorerUrl: "https://mantlescan.info/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wmnt.svg",
    },
    {
      chainId: "534352",
      name: "scroll",
      blockExplorerUrl: "https://scrollscan.com/",
      logoUrl:
        "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/scroll.svg",
    },
    {
      chainId: "42220",
      name: "celo",
      blockExplorerUrl: "https://celoscan.io/",
      logoUrl:
        "https://celoscan.io/images/svg/brands/mainbrand-1.svg?v=23.5.4.0",
    },
    {
      chainId: "2222",
      name: "kava",
      blockExplorerUrl: "https://kavascan.com/",
      logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/4846.png",
    },
    {
      chainId: "81457",
      name: "blast",
      blockExplorerUrl: "https://blastscan.io/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/blast.svg",
    },
    {
      chainId: "252",
      name: "fraxtal",
      blockExplorerUrl: "https://fraxscan.com/",
      logoUrl:
        "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fraxtal.svg",
    },
    {
      chainId: "osmosis-1",
      name: "osmosis",
      blockExplorerUrl: "https://www.mintscan.io/osmosis/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg",
    },
    {
      chainId: "cosmoshub-4",
      name: "cosmoshub",
      blockExplorerUrl: "https://www.mintscan.io/cosmos/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/atom.svg",
    },
    {
      chainId: "dydx-mainnet-1",
      name: "dydx",
      blockExplorerUrl: "https://www.mintscan.io/dydx/",
      logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/11156.png",
    },
    {
      chainId: "celestia",
      name: "celestia",
      blockExplorerUrl: "https://www.mintscan.io/celestia/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg",
    },
    {
      chainId: "kaiyo-1",
      name: "kujira",
      blockExplorerUrl: "https://finder.kujira.network/kaiyo-1/",
      logoUrl: "https://axelarscan.io/logos/chains/kujira.svg",
    },
    {
      chainId: "neutron-1",
      name: "neutron",
      blockExplorerUrl: "https://www.mintscan.io/neutron/",
      logoUrl: "https://axelarscan.io/logos/chains/neutron.svg",
    },
    {
      chainId: "stargaze-1",
      name: "stargaze",
      blockExplorerUrl: "https://www.mintscan.io/stargaze/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stars.svg",
    },
    {
      chainId: "axelar-dojo-1",
      name: "axelarnet",
      blockExplorerUrl: "https://www.mintscan.io/axelar/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg",
    },
    {
      chainId: "noble-1",
      name: "noble",
      blockExplorerUrl: "https://mintscan.io/noble/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/providers/noble.svg",
    },
    {
      chainId: "umee-1",
      name: "umee",
      blockExplorerUrl: "https://www.mintscan.io/umee/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/umee.svg",
    },
    {
      chainId: "secret-4",
      name: "secret-snip",
      blockExplorerUrl: "https://www.mintscan.io/secret/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/scrt.svg",
    },
    {
      chainId: "core-1",
      name: "persistence",
      blockExplorerUrl: "https://www.mintscan.io/persistence/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg",
    },
    {
      chainId: "sommelier-3",
      name: "sommelier",
      blockExplorerUrl: "https://www.mintscan.io/sommelier/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/somm.svg",
    },
    {
      chainId: "stride-1",
      name: "stride",
      blockExplorerUrl: "https://www.mintscan.io/stride/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/strd.svg",
    },
    {
      chainId: "injective-1",
      name: "injective",
      blockExplorerUrl: "https://www.mintscan.io/injective/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/inj.svg",
    },
    {
      chainId: "crescent-1",
      name: "crescent",
      blockExplorerUrl: "https://www.mintscan.io/crescent/",
      logoUrl: "https://static-resources.crescent.network/CRE.png",
    },
    {
      chainId: "phoenix-1",
      name: "terra-2",
      blockExplorerUrl: "http://finder.terra.money/mainnet/",
      logoUrl:
        "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/1c761075a4ae672089c2b1cf25739c6368e97bb7/public/images/chains/terra-2.svg",
    },
    {
      chainId: "juno-1",
      name: "juno",
      blockExplorerUrl: "https://www.mintscan.io/juno/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/juno.svg",
    },
    {
      chainId: "evmos_9001-2",
      name: "evmos",
      blockExplorerUrl: "https://www.mintscan.io/evmos/",
      logoUrl:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
    },
    {
      chainId: "dymension_1100-1",
      name: "dymension",
      blockExplorerUrl: "https://explorer.nodestake.org/dymension/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dym.svg",
    },
    {
      chainId: "pacific-1",
      name: "sei",
      blockExplorerUrl: "https://www.mintscan.io/sei/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sei.svg",
    },
    {
      chainId: "carbon-1",
      name: "carbon",
      blockExplorerUrl: "https://scan.carbon.network/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/swth.svg",
    },
    {
      chainId: "regen-1",
      name: "regen",
      blockExplorerUrl: "https://www.mintscan.io/regen/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/regen.svg",
    },
    {
      chainId: "agoric-3",
      name: "agoric",
      blockExplorerUrl: "https://agoric.bigdipper.live/",
      logoUrl: "https://axelarscan.io/logos/chains/agoric.svg",
    },
    {
      chainId: "chihuahua-1",
      name: "chihuahua",
      blockExplorerUrl: "https://mintscan.io/chihuahua/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg",
    },
    {
      chainId: "akashnet-2",
      name: "akash",
      blockExplorerUrl: "https://www.mintscan.io/akash/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/akt.svg",
    },
    {
      chainId: "comdex-1",
      name: "comdex",
      blockExplorerUrl: "https://www.mintscan.io/comdex/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/cmdx.svg",
    },
    {
      chainId: "archway-1",
      name: "archway",
      blockExplorerUrl: "https://mintscan.io/archway/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arch.svg",
    },
    {
      chainId: "quicksilver-2",
      name: "quicksilver",
      blockExplorerUrl: "https://www.mintscan.io/quicksilver/",
      logoUrl:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png",
    },
    {
      chainId: "omniflixhub-1",
      name: "omniflixhub",
      blockExplorerUrl: "https://www.mintscan.io/omniflix/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/flix.svg",
    },
    {
      chainId: "coreum-mainnet-1",
      name: "coreum",
      blockExplorerUrl: "https://www.mintscan.io/coreum/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/coreum.svg",
    },
    {
      chainId: "migaloo-1",
      name: "migaloo",
      blockExplorerUrl: "https://atomscan.com/migaloo/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/migaloo.svg",
    },
    {
      chainId: "mars-1",
      name: "mars",
      blockExplorerUrl: "https://www.mintscan.io/mars-protocol/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/mars.svg",
    },
    {
      chainId: "columbus-5",
      name: "terra",
      blockExplorerUrl: "https://finder.terra.money/classic/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lunc.svg",
    },
    {
      chainId: "mantle-1",
      name: "assetmantle",
      blockExplorerUrl: "https://www.mintscan.io/asset-mantle/",
      logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/19686.png",
    },
    {
      chainId: "gravity-bridge-3",
      name: "gravitybridge",
      blockExplorerUrl: "https://www.mintscan.io/gravity-bridge/",
      logoUrl:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
    },
    {
      chainId: "bitcanna-1",
      name: "bitcanna",
      blockExplorerUrl: "https://www.mintscan.io/bitcanna/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bcna.svg",
    },
    {
      chainId: "bitsong-2b",
      name: "bitsong",
      blockExplorerUrl: "https://www.mintscan.io/bitsong/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/btsg.svg",
    },
    {
      chainId: "cheqd-mainnet-1",
      name: "cheqd",
      blockExplorerUrl: "https://bigdipper.live/cheqd/",
      logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/12256.png",
    },
    {
      chainId: "mainnet-3",
      name: "decentr",
      blockExplorerUrl: "https://explorer.decentr.net/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dec.svg",
    },
    {
      chainId: "desmos-mainnet",
      name: "desmos",
      blockExplorerUrl: "https://www.mintscan.io/desmos/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dsm.svg",
    },
    {
      chainId: "irishub-1",
      name: "irisnet",
      blockExplorerUrl: "https://www.mintscan.io/iris/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/iris.svg",
    },
    {
      chainId: "ixo-5",
      name: "impacthub",
      blockExplorerUrl: "https://www.mintscan.io/ixo/",
      logoUrl:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png",
    },
    {
      chainId: "jackal-1",
      name: "jackal",
      blockExplorerUrl: "https://ping.pub/jackal/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/jkl.svg",
    },
    {
      chainId: "likecoin-mainnet-2",
      name: "likecoin",
      blockExplorerUrl: "https://www.mintscan.io/likecoin/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/like.svg",
    },
    {
      chainId: "lum-network-1",
      name: "lumnetwork",
      blockExplorerUrl: "https://www.mintscan.io/lum/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lum.svg",
    },
    {
      chainId: "sentinelhub-2",
      name: "sentinel",
      blockExplorerUrl: "https://www.mintscan.io/sentinel/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dvpn.svg",
    },
    {
      chainId: "pirin-1",
      name: "nolus",
      blockExplorerUrl: "https://explorer.nolus.io/pirin-1/",
      logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/27307.png",
    },
    {
      chainId: "kava_2222-10",
      name: "kava-ibc",
      blockExplorerUrl: "https://www.mintscan.io/kava/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kava.svg",
    },
    {
      chainId: "teritori-1",
      name: "teritori",
      blockExplorerUrl: "https://www.mintscan.io/teritori/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg",
    },
    {
      chainId: "humans_1089-1",
      name: "humans",
      blockExplorerUrl: "https://www.mintscan.io/humans/",
      logoUrl:
        "https://raw.githubusercontent.com/0xsquid/assets/3adbe7521e6e4230e1839d31ca078d30ee2a5798/images/tokens/heart-dark-mode.svg",
    },
  ];
}
