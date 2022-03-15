import { ethers } from "hardhat";

async function token() {
    const contractAddress:string = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
    const ownerAddress:string = "0x90113a490077181accba54f451e904857fbf9fc7";
    
    //Get properties of the token
    const fetchToken = await ethers.getContractAt("IERC20", contractAddress);
    let tokenBalance = await fetchToken.balanceOf(ownerAddress);
    
    let tokenStructure = await ethers.getContractFactory("SwapBalance");
    let c= await tokenStructure.deploy();

    await c.updateUserBalance(tokenBalance, 6, ownerAddress);
    console.log(await c.getMainBalance(ownerAddress))

}

token().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});