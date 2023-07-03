// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JunkCoin is ERC20 {
    constructor() ERC20("JunkCoin", "JKC") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
