//First component to be created in this app. It is a card storing user details and their image
//images are coming in from API of https://robohash.org

//importing react
import React from 'react';

// creating function to pass in properties in form of props and returns the profile image from the robo
//robohash website
const Card = ({name, email, id}) => {
    return(
        //using tachyons to add styling to each card
        //taking argument of props from the ID field of robots.js file. Need to use "`" character
        //to create template strings which allows you to use JS symbol ${}
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt='profile' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
