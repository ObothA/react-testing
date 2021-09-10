import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Renders without error.', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('Renders increment button.', () => {});

test('Renders counter display.', () => {});

test('Counter display starts out at 0', () => {});

test('Clicking button increments the counter display', () => {});
