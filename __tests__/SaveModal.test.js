import React from 'react';
import {render} from '@testing-library/react-native';
import SaveModal from '../src/components/Modal/SaveModal';
import styles from '../src/components/Modal/SaveModal/SaveModal.styles';

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
  const comp = render(<SaveModal isVisible={true} itemValues={dummyData} />);
  expect(comp).toMatchSnapshot();
});

test('check visible prop', () => {
  const comp = render(<SaveModal isVisible={true} itemValues={dummyData} />);
  const saveModal = comp.getByTestId('test-save-modal').props;
  expect(saveModal).toMatchObject({
    visible: true,
  });
});

test('should render SaveModal css', () => {
  const comp = render(<SaveModal isVisible={true} itemValues={dummyData} />);
  const saveModal = comp.getByTestId('test-save-modal-container').props.style;
  expect(saveModal).toMatchSnapshot(styles.container);
});
