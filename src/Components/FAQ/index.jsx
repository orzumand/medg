import React, { useState } from "react";
import {
  Akkardion,
  Answer,
  Container,
  Dote,
  Feedback,
  Ftitle,
  Icon,
  Item,
  Question,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const FAQ = () => {
  const [btnState, setBtnState] = useState(false);
  const [btn2State, setBtn2State] = useState(false);
  const [btn3State, setBtn3State] = useState(false);
  const [btn4State, setBtn4State] = useState(false);
  const handleClick = (num) => {
    if (num === 1) {
      setBtnState(!btnState);
      console.log(1);
    } else if (num === 2) {
      setBtn2State(!btn2State);
      console.log(2);
    } else if (num === 3) {
      setBtn3State(!btn3State);
      console.log(3);
    } else if (num === 4) {
      setBtn4State(!btn4State);
      console.log(4);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Ftitle>FAQ</Ftitle>
        <Subtitle>Нужны ответы? Найдите их здесь...</Subtitle>
        <Akkardion>
          <Item
            className={btnState ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            <Question>
              {btnState ? <Dote /> : ""}

              <Title>
                Каков порядок прохождения обследования? Нужна ли предварительная
                запись?
              </Title>

              <Icon className={btnState ? "active" : ""} />
            </Question>
            <Answer>
              Записаться можно следующим образом:
              <br />
              <br />
              Через регистратуру в рабочие часы. Позвонив телефону +998 71 222
              33 33, +998 71 240 20 20, + 99871 333 00 30, а так же по горячей
              линии 1095, звонки принимаем каждый день круглосуточно
            </Answer>
          </Item>
          <Item
            className={btn2State ? "active" : ""}
            onClick={() => handleClick(2)}
          >
            <Question>
              {btn2State ? <Dote /> : ""}
              <Title>
                Как записаться к узкому специалисту в вашей клинике?
              </Title>

              <Icon className={btn2State ? "active" : ""} />
            </Question>
            <Answer>
              Записаться можно следующим образом:
              <br />
              <br />
              Через регистратуру в рабочие часы. Позвонив телефону +998 71 222
              33 33, +998 71 240 20 20, + 99871 333 00 30, а так же по горячей
              линии 1095, звонки принимаем каждый день круглосуточно
            </Answer>
          </Item>
          <Item
            className={btn3State ? "active" : ""}
            onClick={() => handleClick(3)}
          >
            <Question>
              {btn3State ? <Dote /> : ""}
              <Title>
                Подскажите, есть ли при больнице платный стационар в
                терапевтическом отделении? И, если есть, то как в него попасть?
              </Title>

              <Icon className={btn3State ? "active" : ""} />
            </Question>
            <Answer>
              Записаться можно следующим образом:
              <br />
              <br />
              Через регистратуру в рабочие часы. Позвонив телефону +998 71 222
              33 33, +998 71 240 20 20, + 99871 333 00 30, а так же по горячей
              линии 1095, звонки принимаем каждый день круглосуточно
            </Answer>
          </Item>
          <Item
            className={btn4State ? "active" : ""}
            onClick={() => handleClick(4)}
          >
            <Question>
              {btn4State ? <Dote /> : ""}
              <Title>
                Как отменить прежнюю запись к врачу, если я выбрала другое
                время?
              </Title>

              <Icon className={btn4State ? "active" : ""} />
            </Question>
            <Answer>
              Записаться можно следующим образом:
              <br />
              <br />
              Через регистратуру в рабочие часы. Позвонив телефону +998 71 222
              33 33, +998 71 240 20 20, + 99871 333 00 30, а так же по горячей
              линии 1095, звонки принимаем каждый день круглосуточно
            </Answer>
          </Item>
        </Akkardion>
        <Feedback>
          Не смогли найти то, что искали? Напишите нам на
          <a href="/"> medghelp@gmail.com</a>
        </Feedback>
      </Container>
    </Wrapper>
  );
};

export default FAQ;
