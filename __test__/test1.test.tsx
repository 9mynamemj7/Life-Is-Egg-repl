import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

const MyEvent = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(`${name}, Hi!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        role="textbox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button role="button" type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );

}


describe('제출 이벤트 핸들러를 테스트합니다.', () => {
  beforeEach(() => {
    render(<MyEvent />);
  });

  it('텍스트를 입력하여 제출 버튼을 누르면 그 텍스트 뒤에 "Hi!"를 추가합니다.', () => {
    const button = screen.getByRole('button');
    const name = screen.getByRole('textbox');
    fireEvent.click(button);

    if (name !== null) {
      expect(`${name}, Hi!`).toBeInTheDocument();
    } else {
      throw new Error('에러..');
    }
  });
});