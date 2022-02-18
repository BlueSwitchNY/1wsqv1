const truncateSummary = summary => {
  let sumArray = summary.split(' ');
  if (sumArray.length < 30) {
    return summary;
  } else {
    sumArray = sumArray.slice(0, 30);
    let newSum = sumArray.join(' ');
    newSum += '...';
    return newSum;
  }
};

const parseDateforScreenReader = date => {
  const dateArray = date.split('.');
  const year = dateArray[2];
  const monthIndex = dateArray[0] - 1;
  const day = dateArray[1];
  return new Date(year, monthIndex, day);
};

export { truncateSummary, parseDateforScreenReader };
