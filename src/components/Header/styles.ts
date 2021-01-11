import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  padding: 10px;

  align-items: center;
  justify-content: center;
`;

export const Part = styled.div`
  position: relative;
  display: flex;

  color: #dbdbdb;

  align-items: center;
  justify-content: center;

  &.selected {
    color: #fff;

    > div {
      color: #6aaff7;
    }

    > section {
      background-color: #6aaff7;
    }
  }

  &.active,
  &.selected {
    > section {
      border-color: #6aaff7;
    }

    > span {
      background-color: #6aaff7;
    }
  }

  & > span {
    width: 60px;
    height: 2px;

    background-color: #dbdbdb;
    transition-delay: 2s;
    transition: background-color 1s;
  }

  & > section {
    display: flex;
    width: 50px;
    height: 50px;

    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 2px solid #dbdbdb;
    background-color: transparent;

    > span {
      font-weight: bold;
    }
  }
`;

export const Name = styled.div`
  position: absolute;
  top: calc(100% + 6px);

  font-weight: bold;
`;
