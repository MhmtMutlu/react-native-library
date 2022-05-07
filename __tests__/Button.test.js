import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../src/components/Button';
import styles from '../src/components/Button/Button.styles';

test('should match with snapshot', () => {
  const comp = render(<Button />);
  expect(comp).toMatchSnapshot();
});

test('should render text correctly', () => {
  const testText = 'test';
  const comp = render(<Button text={testText} />);
  const buttonText = comp.getByTestId('button-text').children[0];
  expect(buttonText).toBe(testText);
});

test('should trigger onPress', () => {
  const mockFunc = jest.fn();
  const comp = render(<Button onPress={mockFunc} />);
  const buttonTouchable = comp.getByTestId('button-touchable').children[0];
  fireEvent(buttonTouchable, 'press');
  expect(mockFunc).toBeCalled();
});

test('should render given theme', () => {
  const testTheme = 'primary';
  const comp = render(<Button theme={testTheme} />);
  const buttonStyle = comp.getByTestId('button-touchable').props.style;
  expect(buttonStyle).toMatchSnapshot(styles[testTheme].container);
});

test('should render loading', () => {
  const testLoading = true;
  const comp = render(<Button loading={testLoading} />);
  const buttonIndicator = comp.getByTestId('button-indicator');
  expect(buttonIndicator).toBe(buttonIndicator);
});
