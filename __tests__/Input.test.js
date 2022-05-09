import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Input from '../src/components/Input';
import styles from '../src/components/Input/Input.styles';

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

test('should trigger onChangeText', () => {
  const mockFunc = jest.fn();
  const comp = render(<Input onType={mockFunc} />);
  const textInput = comp.getByTestId('text-input');
  fireEvent.changeText(textInput);
  expect(mockFunc).toBeCalled();
});

test('should render TextInputs css', () => {
  const comp = render(<Input />);
  const textInput = comp.getByTestId('text-input').props.style;
  expect(textInput).toMatchSnapshot(styles.input);
});

test('should render Views css', () => {
  const comp = render(<Input />);
  const textInput = comp.getByTestId('input-view').props.style;
  expect(textInput).toMatchSnapshot(styles.container);
});
