import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?&client_id=IkNMgrj-MnMwnf4gnzLANL2xaE5mzu3gP1FTQznZuJQ`,
    {
      params: { query, page },
    }
  );

  return response.data;
};
