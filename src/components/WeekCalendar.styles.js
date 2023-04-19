import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
`;

export const TitleContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
font-size: 36px;
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
background-color: #ffffff;
border-bottom: 1px solid #ddd;
z-index: 1;


@media (max-width: 740px) {
  width: 100%;
}

@media (min-width: 741px) {
  width: 740px;
  margin: 0 auto;
}

`;

export const HeaderContainerWrapper = styled.header`
position: fixed;
top: 101px;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
height: 145px;
background-color: #f2f2f2;
border-bottom: 1px solid #ddd;
z-index: 2;

  @media (max-width: 740px) {
    width: 100%;
  }

  @media (min-width: 741px) {
    width: 740px;
    margin: 0 auto;
  }
`;

export const HeaderContainer = styled.div`
  position: absolute;
  right: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 89%;
  border:none
  
`;

export const Button = styled.button`
   color: #FF3131;
   border: none;
  font-size: 2rem;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ primary }) =>
    primary ? '#0066cc' : 'rgba(0, 119, 255, 0.1)'};
  }
`;

export const DaysContainer = styled.div`
padding-top: 255px;// добавляем отступ сверху, чтобы не закрывался header

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 40px repeat(24, 1fr);
  margin: 10px 0;

  @media (max-width: 740px) {
    width: 100%;
  }

  @media (min-width: 741px) {
    width: 740px;
    margin: 0 auto;
  }
`;

export const Hour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: grey;
  transform: translateY(-20px);
`;



export const WeekDays = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  font-weight: bold;
`;

export const WeekDay = styled.div`
  width: calc((100% - 24px) / 7);
  text-align: center;
`;

export const Dates = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 16px;
`;

export const Date = styled.div`
  width: calc((100% - 24px) / 7);
  text-align: center;
`;

export const ArrowButtonWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ArrowButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  pointer-events: none;
`;

export const Navigation = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex: 1;
width: 100%;

`;



export const Days = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

font-size:24px;
margin-top: 20px;
font-weight: bold;
`;

export const Day = styled.div`
  width: calc((100% - 24px) / 7);
  font-weight: normal;
  text-align: center;
  position: relative;

  ${props =>
    props.isCurrentDay && css`
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 52%;
        transform: translate(-50%, -50%);
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: red;
        z-index: -1;
      }
      color: white;
    `};
`;

export const Month = styled.div`
font-size:24px;
font-weight: bold;
`;


export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #f2f2f2;
  border-top: 1px solid #ddd;
  z-index: 2;
  
  @media (max-width: 740px) {
    width: 100%;
  }
  @media (min-width: 741px) {
    width: 740px;
    margin: 0 auto;
  }
`;

export const TodayButton = styled.button`
margin-left: 10px;
padding: 5px 10px;
color: red;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #D9E5F3;
    border-radius: 4px;
  }
`;

export const DeleteButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  color: red;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #D9E5F3;
    border-radius: 4px;
  }
`;

export const TimeSlot = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;
  height: 40px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 14px;
  font-weight: 500;
  color: #333;
    ${props => props.hasEvent && css`
    background-color: #EBECFF;
  `}

  ${props =>
    props.isSelected && props.hasEvent &&
    css`
      background-color: #B3B7FF;
    `};


`;