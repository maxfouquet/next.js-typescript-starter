import * as React from 'react'
import { shallow } from 'enzyme'
import { Home } from './Home'

describe('Home.tsx', () => {
    it('should render home component correctly', () => {    
        const component = shallow(<Home />)
        expect(component).toMatchSnapshot() 
    })
})