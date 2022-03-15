import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "hardhat";

async function main() {
    const BTC_USD = "0x007A22900a3B98143368Bd5906f8E17e9867581b";
    const USDT_USD = "0x92C09849638959196E976289418e5973CC96d645";
    const ETH_USD = "0x0715A7794a1dc8e42615F059dD6e406A6594651A";

    const priceFeed = await ethers.getContractFactory("PriceConsumerV3");
    let tokenStructure = await ethers.getContractFactory("SwapBalance");
    let c= await tokenStructure.deploy();
    //await c.swapTokens()


    const usdtFeed = await priceFeed.deploy(USDT_USD);
    const ethFeed = await priceFeed.deploy(ETH_USD);

    await usdtFeed.deployed();

    // let btcPrice = await btcFeed.getLatestPrice()
    // //@ts-ignore
    // console.log(btcPrice.map((a)=> console.log(a)))

    // console.log(await btcFeed.getLatestPrice());
    // console.log(await usdtFeed.getLatestPrice());
    // console.log(await ethFeed.getLatestPrice());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
