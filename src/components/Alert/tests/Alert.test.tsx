import { Alert } from '../Alert'
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('renders Hello World', ()=>{
    const {container, getByText } = render(<Alert />)
    expect(getByText('Hello World')).toBeInTheDocument()
})