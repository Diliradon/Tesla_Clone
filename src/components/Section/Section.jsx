// import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { ArrowButton } from '../ArrowButton';
import { Description } from '../Description';
import { LeftButton } from '../LeftButton';
import { RightButton } from '../RightButton';
import { Title } from '../Title';
import './Section.scss';

export const Section = ({
  title,
  description,
  backgroundImg,
  rightButton,
  leftButton,
}) => {

  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }} className="section">
      <Fade bottom>
        <div className="section__items-text">
          <Title title={title} />
          <Description description={description} />
        </div>
      </Fade>
      <div className="section__buttons-wrap">
        <Fade bottom>
          <div className="section__buttons-group">
            <LeftButton
              className="section__button left-button"
              leftButton={leftButton}
            />
            {rightButton &&
              <RightButton
                className="section__button right-button"
                rightButton={rightButton}
              />
            }
          </div>
        </Fade>
        <ArrowButton />
      </div>
    </div>
  )
}

// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
//   background-image: url(../../images/model-s.jpg);
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-image: ${props => `url("../images/${props.backgroundImg}")`}
// `