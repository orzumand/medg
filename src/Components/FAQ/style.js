import styled from "styled-components";
import { ReactComponent as Arrow } from "../../Assets/Icons/Vector.svg";
const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  padding: var(--padding);
  padding-top: 64px;
  padding-bottom: 100px;
  background: var(--secondColor);
`;
const Container = styled.div``;
const Ftitle = styled.div`
  font-size: 37px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 8px;
`;
const Subtitle = styled.a`
  color: #999999;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

const Akkardion = styled.div`
  margin-top: 20px;
  .active {
    height: 162px;
    color: #e72887;
    transition: 0.2s;
    font-weight: 700;
  }
`;
const Item = styled.div`
  height: 55px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 13px 18px;
  overflow: hidden;

  cursor: pointer;

  transition: 0.2s;
  .active {
    transform: rotate(180deg);
    background: rgba(231, 40, 135, 0.15);
    height: 31px;
    & path {
      stroke: #e72887;
    }
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 17px;
`;
const Icon = styled(Arrow)`
  width: 31px;
  height: 31px;
  padding: 8px;
  border-radius: 50%;
  background: var(--secondColor);
  transition: 0.2s;
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: relative;
`;

const Answer = styled.div`
  padding-top: 10px;
  color: #7d7d7d;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

const Dote = styled.div`
  height: 8px;
  width: 8px;
  background-color: #e72887;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50, -50);
  left: -22px;
  top: 40%;
`;
const Feedback = styled.div`
  color: #9c9c9c;
  width: 100%;
  font-size: 15px;
  text-align: right;
  a {
    color: #5f8fff;
    text-decoration: none;
  }
`;
export {
  Wrapper,
  Container,
  Ftitle,
  Subtitle,
  Akkardion,
  Item,
  Icon,
  Title,
  Question,
  Answer,
  Dote,
  Feedback,
};
