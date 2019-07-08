import React from 'react';
import { Login } from './login.component';
import { shallow } from 'enzyme';

describe('Test case for testing login',() =>{
let wrapper;
it('sums numbers', ()=>{
    expect(1+2).toEqual(3);
    expect(5+2).toEqual(7);
  });
  /*
test('username check',()=>
{
wrapper = shallow(<Login />);
console.log (wrapper.debug());
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'pratik'}});
expect(wrapper.state('username')).toEqual('pratik');
});

it('password check',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'upmtadmin'}});
expect(wrapper.state('password')).toEqual('upmtadmin');
});
*/
});