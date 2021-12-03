import { assert } from "chai";
import { chainConfig } from "../../src/ChainConfig";

describe("Chain Config", () => {
  it("should have no duplicate chain ids", () => {
    const chainIds = Object.values(chainConfig);

    const uniqueIds = [...new Set(chainIds)];

    assert.notEqual(0, uniqueIds.length);
    assert.equal(uniqueIds.length, chainIds.length);
  });
});
