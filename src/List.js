import React from 'react';

const List = ({people}) => {
  return (
    <>
    {people.map((obj)=>{
      const {id,name,age,image} = obj;
      return <article key={id} className="person" >
        <img src={image} />         
         <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
        
      </article>
    })}
    </>
  );
};

export default List;
