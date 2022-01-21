export const getBorders = async (codes) => {
  
      if (codes) {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${codes.toString()}`
        );
        const json = await res.json();
        return json;
      } else {
        return [];
      }
    
  
};
