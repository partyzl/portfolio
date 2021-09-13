import {render, screen} from '@testing-library/react';

import Navbar from '..Navbar'

describe('Navbar', ()=> {
    beforeEach(() => {
        render(<Navbar />)
    })

    test('renders my logo', ()=> {
        let logo = screen.getByRole('logo')
        expect(logo).not.toBeFalsy
    })
    test('renders a list with 5 items', ()=> {
        let list = screen.getByRole("navList")
        expect(list).toContainElement("li")
    })
})