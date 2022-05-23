import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from '../src/components/Loading';

test('should match with snapshot', () => {
  const comp = render(<Loading />);
  expect(comp).toMatchSnapshot();
});
