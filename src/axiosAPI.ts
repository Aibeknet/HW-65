import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://askaroff-hub-default-rtdb.europe-west1.firebasedatabase.app/',
});

export const getAllPages = async () => {
  const response = await axiosAPI.get('/pages.json');
  return response.data;
};

export const getPage = async (pageName: string) => {
  const response = await axiosAPI.get(`/pages/${pageName}.json`);
  return response.data;
};

export const savePage = async (pageName: string, content: { title: string; content: string }) => {
  await axiosAPI.patch(`/pages/${pageName}.json`, {
    title: content.title,
    content: content.content,
  });
};
