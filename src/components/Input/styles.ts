import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid var(--dark-gray);
  border-radius: 10px;

  & + div {
    margin-top: 8px;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 0;
    background-color: transparent;

    &:focus {
      box-shadow: none;
      outline: 0;
      border: 0;
    }
  }
`;
