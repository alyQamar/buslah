import baseUrl from '@services/api/baseURL';

const useDeleteData = async (url, parmas) => {
  const config = { withCredentials: true };
  const res = await baseUrl.delete(url, config, parmas);
  return res;
}

export default useDeleteData;
