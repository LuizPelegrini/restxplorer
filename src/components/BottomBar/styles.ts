import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--primary);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  ul {
    list-style: none;
    max-width: 300px;
    height: 100%;
    margin: 0 auto;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    li {
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--white);

        font-size: 1.2rem;

        &:focus {
          color: var(--gray);
          text-decoration: none;
        }
      }

      & + li {
        margin-left: 20px;
      }
    }
  }
`;
