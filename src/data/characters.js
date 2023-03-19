import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/character";

export const fetchCaracters = async (page) => {
  try {
    const { data } = await axios.get(`/?page=${page}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNames = async (page, name) => {
  try {
    const { data } = await axios.get(`/?page=${page}&name=${name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
