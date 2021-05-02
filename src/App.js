import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const Header = styled.h1`
  width: 100%;
  text-align: center;
  color: #503423;
  text-shadow: 1px 1px 5px #c3b5a2;
  font-family: 'Fira Code', monospace;
`

const CharacterDiv = styled.div`
  width: 65%;
  margin: 2% auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  border: 3px solid #503423;
  padding: 3%;
  background-color: rgb(216, 156, 94, 0.3);
  font-family: 'Fira Code', monospace;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsCharacters, setStarWarsCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((res) => {
      console.log(res.data);
      setStarWarsCharacters(res.data);
    })
    .catch((err) => console.log('This is not the droid you are looking for.', err));
  }, []);

  return (
    <div>
      <div>
        <Header>Star Wars Characters</Header>
      </div>
      <CharacterDiv>
        {starWarsCharacters.map(singleCharacter => {
          return (<Character key={singleCharacter.id} characterName={singleCharacter}/>)
        })}
      </CharacterDiv>
    </div>
  );
}

export default App;
