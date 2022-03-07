import React from 'react';
import { VendProduct } from '../types';
import { shuffleArray } from '../../../lib/functions';

function useShuffledProductList(list: VendProduct[], watcher: any) {
  const [shuffledList, setShuffledList] = React.useState<VendProduct[]>([]);

  React.useEffect(() => {
    const newArr: VendProduct[] = shuffleArray(list.slice());
    setShuffledList(newArr);
  }, [watcher]);

  return {
    list: shuffledList,
  };
}

export { useShuffledProductList };
