import React from 'react';
import {render} from '@testing-library/react-native';
import ContentModal from '../src/components/Modal/ContentModal';
import styles from '../src/components/Modal/ContentModal/ContentModal.styles';

const dummyData = [
  {
    bookName: 'test book',
    writer: 'test writer',
    bookSubject: 'test subject',
    endDate: '2020-05-25T21:27:00.000Z',
    startDate: '2020-05-25T21:27:00.000Z',
    quotes: 'test quotes',
  },
];

test('should match with snapshot', () => {
  const comp = render(<ContentModal isVisible={true} itemValues={dummyData} />);
  expect(comp).toMatchSnapshot();
});

test('check visible prop', () => {
  const comp = render(<ContentModal isVisible={true} itemValues={dummyData} />);
  const contentModal = comp.getByTestId('test-content-modal').props;
  expect(contentModal).toMatchObject({
    visible: true,
  });
});

test('should render ContentModal css', () => {
  const comp = render(<ContentModal isVisible={true} itemValues={dummyData} />);
  const contentModal = comp.getByTestId('test-content-modal-container').props
    .style;
  expect(contentModal).toMatchSnapshot(styles.container);
});
