import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import App from './App'

test('Render component', () => {
    const component = renderer.create(<App />)
    expect(component).toMatchSnapshot()
})

test('Confirm text', () => {
    const component = render(<App />)
    expect(component.getAllByText('Learn React')).toHaveLength(1)
})
