import axios from 'axios';

export const getTransactions = async () => {
  const response = await axios.get('/data/transactions.json');

  return {
    data: response.data,
    status: response.status
  };
};
