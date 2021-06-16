import axios from "axios";

const api = axios.create({
  baseURL: "localhost:8080"
});

export const loadQuotesForStock = symbol => {
  return api.get(`/stock/${symbol}/quote`).then(res => res.data);
};

export const loadChartForStock = (symbol, range) => {
  return api.get(`/stock/${symbol}/chart/${range}`).then(res => res.data);
};
