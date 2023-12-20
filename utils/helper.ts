export const getPercentOpinion = (listApp: any) => {
  let zeroOpinion = 0;
  const listAppWithPercent = listApp?.map((app: any) => {
    if (app.score === 0) {
      zeroOpinion++;
    }
  });
  return ((1 - zeroOpinion / listApp?.length) * 100).toFixed(0);
};
