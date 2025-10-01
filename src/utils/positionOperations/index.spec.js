import { PERCENT_COMPARE_VALUE_MAX } from "../constants";
import {
  adjustItemsPercentage,
  getInvestmentPercentage,
  sumArrayKeys
} from "./";

const list = [
  {
    amount: 10.25,
    otherKey: "Doesn't matter",
    randomValue: 700
  },
  {
    amount: 5.5,
    otherKey: "Doesn't matter",
    randomValue: 70
  },
  {
    amount: 4.75,
    otherKey: "Doesn't matter",
    randomValue: 7
  }
];

const percentageList = [
  { percentage: 33.33 },
  { percentage: 33.33 },
  { percentage: 33.33 }
];

const percentageList2 = [
  { percentage: 16.66 },
  { percentage: 16.66 },
  { percentage: 16.66 },
  { percentage: 16.66 },
  { percentage: 16.66 },
  { percentage: 16.66 }
];

describe("positionOperations", () => {
  it("Should add the values of a given key ('amount' and 'randomValue' in this case) in a list", () => {
    expect(sumArrayKeys(list, "amount")).toBe(20.5);
    expect(sumArrayKeys(list, "randomValue")).toBe(777);
  });

  it("Should not add any values in a list without a key", () => {
    expect(sumArrayKeys(list, "")).toBeFalsy();
  });

  it("Should not add any values without a list", () => {
    expect(sumArrayKeys("randomValue")).toBeFalsy();
  });

  it("Should not add any values with an empty list", () => {
    expect(sumArrayKeys([], "randomValue")).toBeFalsy();
  });

  it("Should return the percentage value compared to the total value", () => {
    expect(getInvestmentPercentage(10, 100)).toBe(10);
    expect(getInvestmentPercentage(12.5, 50)).toBe(25);
    expect(getInvestmentPercentage(12.5, 100)).toBe(12.5);
    expect(getInvestmentPercentage(12.5, 200)).toBe(6.25);
  });

  it("Should return false without both params", () => {
    expect(getInvestmentPercentage(100)).toBeFalsy();
  });

  it("Should return false when total <= 0", () => {
    expect(getInvestmentPercentage(100, 0)).toBeFalsy();
    expect(getInvestmentPercentage(100, -1.234)).toBeFalsy();
  });

  it("Should return a list given list adjusting the key 'percentage' to match the sum to 100%", () => {
    expect(
      sumArrayKeys(adjustItemsPercentage(99.99, percentageList, "percentage", PERCENT_COMPARE_VALUE_MAX), "percentage")
    ).toBe(100);
    expect(
      sumArrayKeys(adjustItemsPercentage(99.96, percentageList2, "percentage", PERCENT_COMPARE_VALUE_MAX), "percentage")
    ).toBe(100);
  });
});
