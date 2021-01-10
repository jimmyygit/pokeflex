import React from 'react';
import axios from 'axios';
import Pokemon from './Pokemon'

export default function PokemonList({ pokemon }) {
    return (
        <div className="container">
            {pokemon.map(p => (
                <Pokemon key={p} url={p}/>
            ))}
        </div>
    )
} 