import sdk from "./initialize-sdk.mjs";
import { MaxUint256 } from "@ethersproject/constants";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0x74d68bEd595cc75d712be61Ed89Ea38cbF7Da2e8",
      "edition-drop"
    );
    // We define our claim conditions, this is an array of objects because
    // we can have multiple phases starting at different times if we want to
    const claimConditions = [
      {
        // When people are gonna be able to start claiming the NFTs (now)
        startTime: new Date(),
        // The maximum number of NFTs that can be claimed.
        maxClaimable: 1000,
        // The price of our NFT (free)
        price: 0.05,
        // The amount of NFTs people can claim in one transaction.
        maxClaimablePerWallet: 1,
        // We set the wait between transactions to unlimited, which means
        // people are only allowed to claim once.
        waitInSeconds: MaxUint256,
      },
    ];

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
