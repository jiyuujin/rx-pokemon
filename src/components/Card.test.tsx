import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import { Card } from './Card'

test('Render component', () => {
    const component = renderer.create(
        <Card
            pokemon={{
                name: 'unown',
                url: 'https://pokeapi.co/api/v2/pokemon/201/',
            }}
        />
    )
    expect(component).toMatchSnapshot()
})

test('Confirm text', () => {
    const component = render(
        <Card
            pokemon={{
                name: 'unown',
                url: 'https://pokeapi.co/api/v2/pokemon/201/',
            }}
        />
    )
    expect(component.getAllByText('Unown')).toHaveLength(1)
})
