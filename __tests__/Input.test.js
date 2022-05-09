import React from 'react';
import {render} from '@testing-library/react-native';
import Input from '../src/components/Input';

test('should match snapshot', () => {
  const comp = render(<Input />);
  expect(comp).toMatchSnapshot();
});

test('should render placeholder correctly', () => {
  const testPlaceholder = 'placeholder';
  const comp = render(<Input placeholder={testPlaceholder} />);
  const textInput = comp.getByTestId('text-input').props.placeholder;
  expect(textInput).toBe(testPlaceholder);
});
