import { useApi } from '../../../hooks';
import { getCustomers, getRewardPoints, getTransactions } from '../../../services';
import { useCallback, useMemo } from 'react';

export const useRewardsSummary = () => {
  const transactions = useApi(getTransactions);
  const customers = useApi(getCustomers);

  const mapTransaction = useCallback((transaction) => {
    const transactionDate = new Date(transaction.createdAt);
    const month = `${transactionDate.getMonth() + 1}`.padStart(2, '0');
    const shortDate = `${transactionDate.getFullYear()}-${month}`;

    return {
      ...transaction,
      points: getRewardPoints(transaction.amount),
      shortDate
    };
  }, []);

  const summariseReduce = useCallback(
    (prev, curr) =>
      prev[curr.shortDate]
        ? {
            ...prev,
            [curr.shortDate]: {
              ...prev[curr.shortDate],
              points: prev[curr.shortDate].points + curr.points
            }
          }
        : { ...prev, [curr.shortDate]: curr },
    []
  );

  const data = useMemo(() => {
    return customers?.data?.map((customer) => ({
      ...customer,
      rewardsSummary: transactions?.data
        ?.filter((value) => value.customerId === customer.id)
        .map(mapTransaction)
        .reduce(summariseReduce, {})
    }));
  }, [transactions, customers]);

  const isLoading = transactions.isLoading || customers.isLoading;
  const error = transactions.error || customers.error;

  return { data, isLoading, error };
};
