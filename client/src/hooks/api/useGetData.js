
import baseUrl from './../../shared/services/api/baseURL';
const useGetData = async (url, parmas) => {

    const res = await baseUrl.get(url, parmas);
    return res.data;
}

const useGetDataUser = async (url, params) => {
  const config = {
      withCredentials: true,
  };

  const res = await baseUrl.get(url, { params, ...config });
  return res.data;
};

export { useGetData, useGetDataUser};
