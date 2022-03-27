// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./IERC20.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;

    uint8 decimals;
    uint248 swapIndex = 1;
    int256 currentRate;
    address internal usdtAddress = 0xc2132D05D31c914a87C6611C10748AEb04B58e8F;
    address internal enjAddress = 0x7eC26842F195c852Fa843bB9f6D8B583a274a157;

    struct SwapOrder{
        bool swapStatus;
        address owner;
        uint88 amountIn;
    }

    mapping(uint=>SwapOrder) swapOrder;

    IERC20 USDT = IERC20(usdtAddress);
    IERC20 ENJ = IERC20(enjAddress);

    constructor(address _address) {
        priceFeed = AggregatorV3Interface(_address);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public{
        (
            uint80 roundID,
            int price,
            uint startedAt, 
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        currentRate = price;
        decimals = priceFeed.decimals();
    }

    function swapEnjToUsdT(uint256 _amount, address _toAddress) public{
         uint256 amount =(_amount * uint256(currentRate));
         uint88 division= uint88(10**decimals);
         uint256 swapAmount = amount/division;
        require(ENJ.balanceOf(msg.sender) >= swapAmount, "Insufficient funds");

        (bool status) = ENJ.transferFrom(msg.sender, address(this), _amount);
        require(status, "transaction failed");
        (bool status1) = USDT.transfer(_toAddress, swapAmount);
        require(status1, "transaction failed");
    }
 }



// contract PriceConsumerV3 {

//     AggregatorV3Interface internal priceFeed;

//     uint8 decimals;
//     uint248 swapIndex = 1;
//     int256 currentRate;
//     address internal usdtAddress = 0xc2132D05D31c914a87C6611C10748AEb04B58e8F;
//     address internal enjAddress = 0x7eC26842F195c852Fa843bB9f6D8B583a274a157;

//     struct SwapOrder{
//         bool swapStatus;
//         uint8 currentDecimal;
//         address owner;
//         uint80 amountIn;
//     }

//     mapping(uint=>SwapOrder) swapOrder;

//     IERC20 USDT = IERC20(usdtAddress);
//     IERC20 ENJ = IERC20(enjAddress);

//     constructor(address _address) {
//         priceFeed = AggregatorV3Interface(_address);
//     }

//     /**
//      * Returns the latest price
//      */
//     function getLatestPrice() public{
//         (
//             uint80 roundID,
//             int price,
//             uint startedAt, 
//             uint timeStamp,
//             uint80 answeredInRound
//         ) = priceFeed.latestRoundData();
//         currentRate = price;
//         decimals = priceFeed.decimals();
//     }

//     function swapEnjToUsdT(address _fromAddress, address _toAddress, uint256 _amount) public{
//          uint256 amount =(_amount * uint256(currentRate));
//          uint80 division= uint80(10**decimals);
//          uint256 swapAmount = amount/division;
//         require(ENJ.balanceOf(_fromAddress) >= swapAmount, "Insufficient funds");

//         SwapOrder storage i_ = swapOrder[swapIndex];
//         i_.amountIn = uint80(_amount);
//         i_.currentDecimal = decimals;
//         i_.owner = _fromAddress;
//         ++swapIndex;
//         (bool status) = ENJ.transferFrom(_fromAddress, msg.sender, _amount);
//         require(status, "transaction failed");
//         (bool status1) = USDT.transfer(_toAddress, swapAmount);
//         require(status1, "transaction failed");
//     }

//     function getOrder() public view returns(SwapOrder memory){
//         SwapOrder storage i_ = swapOrder[1];
//         return(i_);
//     }
//  }
