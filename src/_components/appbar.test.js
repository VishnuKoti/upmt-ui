import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import AppBar from './appbar';

describe('testing navigation', () => {
    it('appbar should render correctly', () => {
     const appbar = shallow(<AppBar />);
     appbar.render();
     expect(appbar).toMatchSnapshot();
    });
   });