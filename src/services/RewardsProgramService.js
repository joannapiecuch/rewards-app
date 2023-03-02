import { REWARDS_VALUE, MIN_VALUE_TRESCHOLD_ONE_POINT, MIN_VALUE_TRESCHOLD_TWO_POINT } from '../consts/rewards';

export const getRewardPoints = (amount) => {
  const amountIn$ = amount / 100;
  const onePoints = Math.max(0, Math.min(MIN_VALUE_TRESCHOLD_ONE_POINT, amountIn$ - MIN_VALUE_TRESCHOLD_ONE_POINT));
  const twoPoints = Math.max(0, Math.min(MIN_VALUE_TRESCHOLD_TWO_POINT, amountIn$ - MIN_VALUE_TRESCHOLD_TWO_POINT));

  return onePoints + twoPoints * REWARDS_VALUE.TWO_POINT;
};
