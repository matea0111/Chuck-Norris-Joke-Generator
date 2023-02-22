import React from 'react';
import {useEffect, useState} from 'react';

const SavedJokes: React.FC = () => {
    const [items, setItems] = useState<[]>([]);
    const [list, setJokeList] = useState<String[]>([]);


    useEffect(() => {
        const jokes = JSON.parse(localStorage.getItem('items')!); 
        const jokeList= [{}];
    
            if(!jokes){
                setItems([]);
            }else(
                setItems(jokes)
            );
            
            jokes.forEach((joke:any) => {
                jokeList.push(joke.value)
                setJokeList(joke.value)
              })
              console.log(jokeList);
      },[list]);

    return (
        <div>
            {list}
        </div>
    );
};


export default SavedJokes;