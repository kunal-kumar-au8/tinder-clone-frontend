import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';


function TinderCards() {
    const [people, setpeople] = useState([
        {
            name: 'Elon Musk',
            // url: 'http://m.media-amazon.com/image'
            url: 'https://i.pinimg.com/564x/74/7d/44/747d44a75c6559e7725840d1858e5792.jpg'
        },
    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log("removing: "+ nameToDelete);
    }

    const outOfFrame = (name) =>{
        console.log(name + "left the screen")
    };


    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person) =>{
                <TinderCard className="swip" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                    
                </TinderCard>
            })}
            </div>
        </div>
    );
}

export default TinderCard;
