import baseUrl from '../../shared/services/api/baseURL';

const useInsUpdateData = async (url, parmas) => {
  const config = {
    withCredentials: true,
  };
  const res = await baseUrl.put(url, parmas, config);
  return res;
};

export { useInsUpdateData };

// const useUpdateDataWithImage = async (url, parmas) => {
//     const config = {
//         headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}` }
//     }
//     const res = await baseUrl.put(url, parmas, config);
//     console.log(res.status)
//     return res;
// }
