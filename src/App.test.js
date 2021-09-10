import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test('Renders a non empty component  without crashing', () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  expect(wrapper.exists()).toBeTruthy();
});
