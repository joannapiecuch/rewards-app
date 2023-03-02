import { REWARDS } from '../consts/rewards';

export const getRewardPoints = (amount) => {
  const amountInDollars = Math.floor(amount / 100);
  let rewardAmount = 0;

  for (const reward of REWARDS) {
    const difference = amountInDollars - reward.min;
    const calculatedPoints = reward.max ? Math.min(reward.min, difference) : difference;

    rewardAmount += Math.max(0, calculatedPoints) * reward.multiplier;
  }

  return rewardAmount;
};
