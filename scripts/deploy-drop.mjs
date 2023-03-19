import sdk from "./initialize-sdk.mjs";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "MetaStream NFTs",
      description: "Lovers of MetaStream",
      image: readFileSync("scripts/assets/erc1155.png"),
      primary_sale_recipient: "0x9017ea4EE5F3e32B8540fa72dC5b10a8C9424995",
    });

    const editionDrop = await sdk.getContract(
      editionDropAddress,
      "edition-drop"
    );

    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();
