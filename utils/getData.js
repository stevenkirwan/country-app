export const getData = async (params) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/${params}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
