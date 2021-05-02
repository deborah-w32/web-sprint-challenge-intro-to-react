// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Name = styled.h2`
    text-decoration: underline;
    color: #5D2310;
    text-shadow: 1px 1px 5px #C9C9C9;
`

const Text = styled.p`
    color: #5D2310;
    text-shadow: 1px 1px 5px #C9C9C9;
`

function Character(props){
    const { characterName } = props
    return(
        <div>
            <Name>{characterName.name}</Name>
            <Text>Birth Year: {characterName.birth_year}</Text>
            <Text>Gender: {characterName.gender}</Text>
            <Text>Height: {characterName.height}</Text>
            <Text>Hair Color: {characterName.hair_color}</Text>
            <Text>Skin Color:{characterName.skin_color}</Text>
           <Text>Eye Color: {characterName.eye_color}</Text>
        </div>
    );
}

export default Character