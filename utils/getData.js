export const getData = async (params) => {
  try {
    const res = await fetch(`${process.env.ENDPOINT}${params}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
