import React from 'react';
import { render, screen } from '@testing-library/react';

import Page from './Page';

test('하위 컴포넌트 출력확인', () => {
  const tasks = [
    {
      id: 1,
      title: 'push-up 100회',
    },
    {
      id: 2,
      title: 'squart 100회',
    },
    {
      id: 3,
      title: '달리기 10km',
    },
  ];

  render(<Page tasks={tasks} />);

  const header = screen.getByText('To-do');
  const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
  const list = screen.getByRole('list');

  expect(header).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(list).toBeInTheDocument();
});
