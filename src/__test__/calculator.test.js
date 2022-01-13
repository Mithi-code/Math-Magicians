import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe ('Calculator Tests', ()=> {

it('Render works correctly', () => {
  const tree= renderer.create(Calculator).toJSON();
  expect(tree).toMatchSnapshot();
});

});