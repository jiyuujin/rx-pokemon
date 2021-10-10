import React from 'react'

import { Card } from './Card'

type Props = {
    data: Array<{ name: string; url: string }>
    search: string
}

export const CardList = (props: Props) => {
    const pokemonData = React.useMemo(() => {
        if (props.search) {
            return props.data.filter(
                (pokemon: { name: string; url: string }) =>
                    pokemon.name.indexOf(props.search) !== -1
            )
        }
        return props.data
    }, [props])

    return (
        <>
            {pokemonData?.map((pokemon: { name: string; url: string }) => (
                <div key={pokemon.name} className="gallery__item">
                    <Card pokemon={pokemon} />
                </div>
            ))}
        </>
    )
}
