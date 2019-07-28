import * as React from 'react'
import { shallow } from 'enzyme'
import { Layout } from './Layout'

describe('Layout.tsx', () => {
    it('should render layout component correctly', () => {    
        const component = shallow(<Layout />)
        expect(component).toMatchSnapshot() 
    })
})