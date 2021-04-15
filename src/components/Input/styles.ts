import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--pallete-light);
  border-radius: 10px;

  &.price-input {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    flex: 1;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 0;
    background-color: transparent;
    color: var(--white);

    &:focus {
      box-shadow: none;
      outline: 0;
      border: 0;
    }
  }
`;
