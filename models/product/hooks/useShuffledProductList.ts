import React from 'react';
import { Product } from '../types';
import { shuffleArray } from '../../../lib/functions';

function useShuffledProductList(list: Product[], watcher: any) {
  const [shuffledList, setShuffledList] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const newArr: Product[] = shuffleArray(list.slice());
    setShuffledList(newArr);
  }, [watcher]);

  return {
    list: shuffledList,
  };
}

export { useShuffledProductList };
