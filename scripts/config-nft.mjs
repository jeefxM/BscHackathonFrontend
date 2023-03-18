import sdk from "./initialize-sdk.mjs";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0x74d68bEd595cc75d712be61Ed89Ea38cbF7Da2e8",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "MetaStream NFT",
        description: "This NFT will give you access to Watch and earn system!",
        image: readFileSync("scripts/assets/erc1155.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
