import React from 'react';
import {useEffect, useState} from 'react';

const SavedJokes: React.FC = () => {
    const [items, setItems] = useState<[]>([]);
    const [list, setJokeList] = useState<String[]>([]);


    useEffect(() => {
        var jokes = JSON.parse(localStorage.getItem('items')!); 
        var jokeList: JSX.Element[]=[];
    
            if(!jokes){
                setItems([]);
            }else(
                setItems(jokes)
            );
            
            jokes.forEach((joke:any) => {
                jokeList.push(<h3>{joke.value}</h3>)
              })
              console.log(typeof jokeList);
      },[]);

    return (
        <div>
            {items}
        </div>
    );
};


export default SavedJokes;