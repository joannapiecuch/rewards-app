import axios from 'axios';

export const getCustomers = async () => {
  const response = await axios.get('/data/customer.json');

  return {
    data: response.data,
    status: response.status
  };
};
