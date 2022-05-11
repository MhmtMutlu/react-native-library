import React from 'react';
import {render} from '@testing-library/react-native';
import FloatingButton from '../src/components/FloatingButton';
import styles from '../src/components/FloatingButton/FloatingButton.syles';

test('should match with snapshot', () => {
  const comp = render(<FloatingButton />);
  expect(comp).toMatchSnapshot();
});

test('should render icon correctly', () => {
  const testText = 'plus';
  const comp = render(<FloatingButton icon={testText} />);
  const floatingButton =
    comp.getByTestId('floating-button').children[0]._fiber.stateNode.props.name;
  expect(floatingButton).toBe(testText);
});

test('should render FloatingButton css', () => {
  const comp = render(<FloatingButton />);
  const floatingButton = comp.getByTestId('floating-button').props.style;
  expect(floatingButton).toMatchSnapshot(styles.container);
});
