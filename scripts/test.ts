// async function swapperContract(){

//     const ENJ_USD:string = ENJUSDT_PRICE_ADDRESS;
//     const ENJ_CONTRACT_ADDRESS:string = ENJS_CONTRACT_ADDRESS;
//     const USDT_CONTRACT_ADDRESS:string = USDTS_CONTRACT_ADDRESS;
//     const enjHolderAddress:string = ENJS_OWNER_ADDRESS;
//     const usdtHolderAddress:string = USDT_OWNER_ADDRESS;
//     const usdtLiquidtyProvider:string = USDT_LIQUIDTY_ADDRESS;

//     //create signers for each token holder
//     const enjSigner:Signer = await ethers.getSigner(enjHolderAddress);
//     const usdtSigner:Signer = await ethers.getSigner(usdtHolderAddress);
//     const usdtLiquidtySigner:Signer = await ethers.getSigner(usdtLiquidtyProvider);

//     //interacting with enj and usdt contract address
//     const enjContract = await ethers.getContractAt("IERC20", ENJ_CONTRACT_ADDRESS, enjSigner);
//     const usdtContract = await ethers.getContractAt("IERC20", USDT_CONTRACT_ADDRESS, usdtSigner);

//     //get the price feed for the usdt/eth 
//     const fetchPrice = await ethers.getContractFactory("PriceConsumerV3"); 
//     let deploySwap = await fetchPrice.deploy(ENJ_USD);


//     (await deploySwap.getLatestPrice()) //get the current price of enj/usdt
//     console.log(`enj balance before swapping: ${await enjContract.balanceOf(enjHolderAddress)}`);
//     console.log(`usdt balance before swapping:${await usdtContract.balanceOf(usdtHolderAddress)}`)

//     /*******************************ENJ ACCOUNT IMPERSONATION and LIQUIDITY PROVIDER*******************************************/
//     //@ts-ignore
//     await hre.network.provider.request({
//         method: 'hardhat_impersonateAccount',
//         params: [enjHolderAddress]
//     })

//     //set enj balance 
//     await network.provider.send('hardhat_setBalance', [
//         enjHolderAddress,
//         '0x10000000000000000000000000000000000000000000000000'
//     ])

//     //provides allowance to the contract to transfer 
//     await enjContract.connect(enjSigner).approve(deploySwap.address, "100000000000000000");

//     /*******************************USDT ACCOUNT IMPERSONATION and LIQUIDITY PROVIDER*******************************************/

//      //set usdtliqudy provider balance 
//      await network.provider.send('hardhat_setBalance', [
//         usdtLiquidtyProvider,
//         '0x1000000000000000000000000000000'
//     ])

//     //@ts-ignore
//     await hre.network.provider.request({
//         method: 'hardhat_impersonateAccount',
//         params: [usdtLiquidtyProvider]
//     })

//     console.log(`usdt balance before providing liquidity:${await usdtContract.balanceOf(deploySwap.address)}`)
//     await usdtContract.connect(usdtLiquidtySigner).approve(deploySwap.address, "100000000000000000")
//     await usdtContract.connect(usdtLiquidtySigner).transfer(deploySwap.address, "10000000000")

//     await deploySwap.swapEnjToUsdT(enjHolderAddress, usdtHolderAddress, "10");
//     //console.log(await deploySwap.getOrder())
//     console.log(`enj balance after swapping:${await enjContract.balanceOf(enjHolderAddress)}`)
//     console.log(`usdt balance after swapping:${await usdtContract.balanceOf(usdtHolderAddress)}`)
//     console.log(`usdt balance after providing liquidity:${await usdtContract.balanceOf(deploySwap.address)}`)

// }

