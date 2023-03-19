import sdk from "./initialize-sdk.mjs";
import { MaxUint256 } from "@ethersproject/constants";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0x069F2B276b7A42d9b53db12deE3146d8dD7a04c8",
      "edition-drop"
    );
    const claimConditions = [
      {
        startTime: new Date(),
        maxClaimable: 1000,
        price: 0.05,
        maxClaimablePerWallet: 1,
        waitInSeconds: MaxUint256,
      },
    ];

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
