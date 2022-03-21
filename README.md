# SWAP TOKEN A to TOKEN B using chainlink price feedss

This project aims to achieve a swapping contract from TOKEN A(ENJ) to TOKEN B(USDT)

Try running some of the following tasks:

```shell
yarn hardhat compile
yarn hardhat run scripts/Pricefeed.ts- To run the swap scripts and fetch the price
```

## Environment Variables 
check `.env.example`
- `POLYGON_MAINNET_URL`: Mainnet url rpc can be gotten from moralis/alchemy or any rpc node provider
- `PRIVATE_KEY`: metamask private
- `ENJ_CONTRACT_ADDRESS`: ENJ Token contract address from polygonscan
- `ENJ_OWNER_ADDRESS`: ENJ address from polygonscan
- `USDT_CONTRACT_ADDRESS`: USDT contract address from polygoscan
- `USDT_OWNER_ADDRESS`: USDT owner address(interacted with the contract)
- `USDT_LIQUIDTY_ADDRESS`: USDT owner address(interacted with the contract) and would be used as a liquidity provider for the swap contract
- `ENJUSDT_PRICE_ADDRESS`: ENJ/USDT price feed address gotten from chainlink
