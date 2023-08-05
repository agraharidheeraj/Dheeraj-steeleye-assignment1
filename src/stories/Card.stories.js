import React from 'react';
import Card from '../component/card/Card';


export default {
    title: 'Card',
    component: Card,
  };
  
  export const DefaultCard = () => (
    <Card
      cardData={{
        description: 'This is a card component used to display information.',
        author: 'Dheeraj',
        date: '2023-08-02',
       
       
      }}
      title="My Card Title"
    />
  );
  