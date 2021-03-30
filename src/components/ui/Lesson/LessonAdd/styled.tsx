import styled from 'styled-components';

export const LessonAddContent = styled.div`
  .lesson-add {
    position: relative;
    padding: 12px;
    border-radius: 8px;
    border: 3px solid #fff;
    margin-top: 15px;
    box-shadow: 0 0 8px 0 #333;
    transition: box-shadow 0.3s;
    overflow: hidden;
    padding-bottom: 60px;

    &:hover {
      box-shadow: 0 0 8px 3px #333;
    }
  }

  .lesson-add__info {
    display: flex;
    gap: 10px 15px;
    flex-wrap: wrap;
  }

  .lesson-add-button {
    z-index: 1;
    text-align: center;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    border-radius: 4px;
    cursor: pointer;
    transition: top 0.3s;
  }

  .lesson-add.edit .lesson-add-button {
    top: calc(100% - 45px);
    align-items: flex-start;

    svg {
      transform: rotateZ(45deg);
      transition: transform 0.3s;
    }
  }
`;