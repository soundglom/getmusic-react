const { expect } = require('chai');
const React = require('react');
const { Search } = require('../app/components/search');
const { shallow } = require('enzyme');

describe('<Search /> component', () => {
  it('should pass', () => {
    const wrapper = shallow(<Search />);
    
    expect(wrapper.contains(<li><button type='submit' className='button'>Search</button></li>)).to.be.true;
  });
});
