/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

type Options = {
  params: {
    maxResults: number;
  };
  headers: {
    'X-RapidAPI-Key': string;
    'X-RapidAPI-Host': string;
  };
};

const options: Options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || '',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromApi = async (url: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (e) {
    return e;
  }
};
