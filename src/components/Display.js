import React from 'react'

export default function Display(props){
    return (
        <div>
           <div className='counter'>{props.user.id}/25</div> 
           <div className='name'>{props.user.name.first} {props.user.name.last} </div> 
           <div className='info'>Employer: {props.user.employer} </div> 
           <div className='favorites'>
               Favorites Movies:
                {props.user.favoriteMovies.map(movie => <li>{movie}</li>)}
           </div> 
        </div>
    )
}