import React from 'react'

import Endpoints from '../utils/endpoints.constants'

type Props = {
    pokemon: { name: string; url: string }
}

export const Card = (props: Props) => {
    return (
        <a
            href={Endpoints.POKEMON_DOMAIN(props.pokemon.name)}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                alt={`${props.pokemon.name} image`}
                src={Endpoints.POKEMON_IMG_DOMAIN(props.pokemon.name)}
                className="gallery__item__img"
            />
            <div className="gallery__item__caption">
                {props.pokemon.name[0].toUpperCase() +
                    props.pokemon.name.slice(1)}
            </div>
        </a>
    )
}
