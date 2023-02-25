import { expect } from "chai";
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";


describe("Hello World!", () => {
    let helloWorldContract: HelloWorld;

    beforeEach( async () => {
        const helloWorldContractFactory = await ethers.getContractFactory("HelloWorld");
        helloWorldContract = await helloWorldContractFactory.deploy();
        await helloWorldContract.deployed();
    })
    it("should return Hello World!", async () => {
         const text = await helloWorldContract.helloWorld();
         expect(text).to.eq("Hello World!");
    });

    it("should set owner to deployer account", async() => {
        const signers = await ethers.getSigners();
        const deployerAccount = signers[0];
        const owner = await helloWorldContract.owner();
        expect(owner).to.eq(deployerAccount.address);
    });

    it("should not allow anyone other than the owner to call transferownership",async () => {
        const signers = await ethers.getSigners();
        let owner = await helloWorldContract.owner();
        console.log("The Owner before is " + owner);
        const tx = await helloWorldContract.transferOwnership(signers[1].address);
        await tx.wait();
        owner = await helloWorldContract.owner();
        console.log("The owner after is " + owner);
    });
});