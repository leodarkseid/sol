import { expect } from "chai";
import { ethers } from "hardhat";


describe("Hello World!", () => {
    it("should return Hello World!", async () => {
         const helloWorldContracFactory = await ethers.getContractFactory("HelloWorld");
         const helloWorldContract = await helloWorldContracFactory.deploy();
         await helloWorldContract.deployed();
         const text = await helloWorldContract.helloWorld();
         expect(text).to.eq("Hello World!");
    });

    it("should set owner to deployer account", async() => {
        const helloWorldContracFactory = await ethers.getContractFactory("HelloWorld");
        const helloWorldContract = await helloWorldContracFactory.deploy();
        await helloWorldContract.deployed();
        const signers = await ethers.getSigners();
        const deployerAccount = signers[0];
        const owner = await helloWorldContract.owner();
        console.log(deployerAccount.address)
        expect(owner).to.eq(deployerAccount.address);
    });
});