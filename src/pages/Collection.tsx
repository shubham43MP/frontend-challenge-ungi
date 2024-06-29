import React, { useEffect, useState } from 'react';

import { fetchCollection } from '../lib/collection';

import './Collection.css';
import { Card } from '../types/card.type';

export const Collection = () => {

  const[ collection, setCollection ] = useState<Card[]>([]);

  useEffect(() => {
    fetchCollection().then(cards => {
      setCollection(cards)
    })
  }, [])

  /**
   * Step 1: Render the card
   */
  return <div>{JSON.stringify(collection)}</div>;
};
