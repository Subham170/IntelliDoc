import React from 'react';
import Card from './Card';

const CardList = ({ tests }) => {
  return (
    <div className='flex flex-wrap justify-evenly gap-y-5  mx-7'>
      {tests.map((user, i) => (
        <Card 
          key={i} 
          id={user.id} 
          name={user.name} 
          img={user.img}
          description={user.description}
          path={user.path}
        />
      ))}
    </div>
  );
};

export default CardList;
