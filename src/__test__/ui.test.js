import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Quote from '../components/Quote';
import Home from '../components/Home';

describe('Articles Tests', () => {
  it('Render works correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Home />

      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Render works fine', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  it('Render works good', () => {
    const tree = renderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});