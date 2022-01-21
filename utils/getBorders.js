export const getBorders = async (codes) => {
  
      if (codes) {
        const res = await fetch(
          `${process.env.ENDPOINT}/alpha?codes=${codes.toString()}`
        );
        const json = await res.json();
        return json;
      } else {
        return [];
      }
    
  
};
