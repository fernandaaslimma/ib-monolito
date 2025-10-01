const sumArrayKeys = (array, key) => {
  let sum = 0;

  if (array && array.length > 0 && key) {
    array.forEach(el => {
      sum =
        (Math.round(sum * 100) + Math.round(parseFloat(el[key]) * 100)) / 100;
    });

    return sum;
  }

  return false;
};

const getInvestmentPercentage = (value, total) => {
  if (value && total && parseFloat(total) > 0) {
    return Math.trunc((parseFloat(value) / total) * 100 * 100) / 100;
  }
  return false;
};

const adjustItemsPercentage = (percentageSum, list, nameVarCalc, valueToCompare) => {
  let newList = list;
  const difference = valueToCompare - parseFloat(percentageSum);
  const minUnity = 0.01;

  if (difference) {
    const iterations = Math.round(difference / minUnity);

    for (let index = 0; index < iterations; index++) {
      newList[index][nameVarCalc] = (
        newList[index][nameVarCalc] + minUnity
      ).toFixed(2);
    }
  }

  return newList;
};

export { sumArrayKeys, getInvestmentPercentage, adjustItemsPercentage };
