import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Button, SaveButton } from '../components/Button';




export type Joke = {
        categories: any[];
        created_at: string;
        icon_url: string;
        id: string;
        updated_at: string;
        url: string;
        value: string;
  };


const HomePage: React.FC = () => {

    const [joke, setJoke] = useState<Joke | null>();
    const [items, setItems] = useState<string[]>([]);

    const generateJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/random'
        axios.get(url).then((response) => {
            setJoke(response.data)
        })
    }

    const saveJoke = () => {
    
        var jokes = JSON.parse(localStorage.getItem('items')!); 

        if(!jokes){
            jokes = [];
        }
        if(joke)
        {
            jokes.push(joke);
        }
        localStorage.setItem('items', JSON.stringify(jokes)); 
    }

    return (
        <div className='App'>
            <div className='Box'>
                <h1> CHUCH NORRIS JOKE GENERATOR </h1>
                <p>{joke?.value}</p>
                <Button handleClick={generateJoke}/>
                <SaveButton handleClick={saveJoke}/>
            </div>
        </div>
    );
};

export default HomePage;