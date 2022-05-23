import React from 'react';
import {render} from '@testing-library/react-native';
import Card from '../src/components/Card';
import styles from '../src/components/Card/Card.styles';

const dummyData = {
  bookName: 'test book',
  writer: 'test writer',
};

const dummyIndex = 1;

test('should match with snapshot', () => {
  const comp = render(<Card cardData={dummyData} index={dummyIndex} />);
  expect(comp).toMatchSnapshot();
});

test('should render Card css', () => {
  const comp = render(<Card cardData={dummyData} index={dummyIndex} />);
  const card = comp.getByTestId('test-card').props.style;
  expect(card).toMatchSnapshot(styles.container);
});
