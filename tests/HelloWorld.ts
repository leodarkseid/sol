import { expect } from "chai";
import { ethers } from "hardhat";


describe("Hello World", () => {
    it("should return Hello World!", async () => {
         const helloWorldContracFactory = await ethers.getContractFactory("HelloWorld");
         const helloWorldContract = await helloWorldContracFactory.deploy();
         await helloWorldContract.deployed();
    })
});