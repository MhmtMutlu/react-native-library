import React from 'react';
import {render} from '@testing-library/react-native';
import PasswordModal from '../src/components/Modal/PasswordModal';
import styles from '../src/components/Modal/PasswordModal/PasswordModal.styles';

test('should match with snapshot', () => {
  const comp = render(<PasswordModal isVisible={true} />);
  expect(comp).toMatchSnapshot();
});

test('check visible prop', () => {
  const comp = render(<PasswordModal isVisible={true} />);
  const contentModal = comp.getByTestId('test-password-modal').props;
  expect(contentModal).toMatchObject({
    visible: true,
  });
});

test('should render PasswordModal css', () => {
  const comp = render(<PasswordModal isVisible={true} />);
  const passwordModal = comp.getByTestId('test-password-modal-container').props
    .style;
  expect(passwordModal).toMatchSnapshot(styles.container);
});
