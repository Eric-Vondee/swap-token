// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/*
* The goal is to swap Token A(ETH) to TOKEN(B) 
i. users main balance and which token pair ?
ii. ETH 
 */

contract SwapBalance {

    // struct TokenStructure{
    //     addre
    // }

    struct TokenStructure {
        uint256 mainBalance;
        uint8 tokenDecimals;
    }

    mapping(address => TokenStructure) tokens;

    uint256  mainBalance;
    uint256 swappingBalance;

    function swap(uint8 rate) public view returns(uint256, uint8){

    }

    function updateUserBalance(uint256 _balance, uint8 _decimals, address _address) public {
        TokenStructure storage i_ = tokens[_address];
        i_.mainBalance = _balance;
        i_.tokenDecimals = _decimals;
    }

    function getMainBalance(address _address) public view returns(uint256, uint8) {
        TokenStructure storage i_ = tokens[_address];
        return(i_.mainBalance, i_.tokenDecimals);
    }

    function swapTokens(uint8 rate, address _address, uint256 _amount) public{
        TokenStructure storage i_ = tokens[_address];
        require(i_.mainBalance >= _amount, "Insufficient funds");
        uint256 amounts = (_amount * i_.tokenDecimals);
        i_.mainBalance -= amounts; 
        //converting from userś 100 usdt from main balance to eth 
        
    }
}