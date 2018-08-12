import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data/data.json';
import Search from '../Search';
import Showcard from '../Showcard';

test('Search renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct number of shows', () => {
    const component = shallow(<Search />);
    expect(component.find(Showcard).length).toEqual(preload.shows.length);
});

test('Search should render correct number of shows given a specific search term', () => {
    const component = shallow(<Search />);
    const searchWord = 'black';
    const showCount = preload.shows.filter(
        show =>
            show.title.toUpperCase().includes(searchWord.toUpperCase()) ||
            show.description.toUpperCase().includes(searchWord.toUpperCase())
    );
    component.find('input').simulate('change', { target: { value: searchWord } });
    expect(component.find(Showcard).length).toEqual(showCount.length);
});
