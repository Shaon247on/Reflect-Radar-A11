// useAsyncSort.js

import { useState, useEffect } from 'react';

const useAsyncSort = (array) => {
  const [sortedArray, setSortedArray] = useState([]);

  useEffect(() => {
    const sortArrayAsync = async () => {
      try {
        const sorted = await new Promise((resolve) => {
          const sortedArray = [...array].sort((a, b) => {
            const timeA = new Date(a.time).getTime();
            const timeB = new Date(b.time).getTime();
            return timeB - timeA; // Sorting in ascending order, modify as per your requirement
          });
          resolve(sortedArray);
        });
        setSortedArray(sorted);
      } catch (error) {
        console.error('Error sorting array:', error);
      }
    };

    sortArrayAsync();

  }, [array]);

  return sortedArray;
};

export default useAsyncSort;
