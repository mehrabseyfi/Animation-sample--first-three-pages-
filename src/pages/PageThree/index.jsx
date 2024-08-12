import { ReactComponent as CircleOne } from '../../assets/svg/circle-1.svg';
import { ReactComponent as CircleTwo } from '../../assets/svg/circle-2.svg';
import { ReactComponent as CircleThree } from '../../assets/svg/circle-3.svg';

function PageThree() {
  return (
    <div className="sweeper-wrapper opened next-page">
      <div className="grainy-background"></div>
      <div className="next-container"></div>
      <div className="floating-ellipse right">
        <div className="circle-wrapper">
          <div className="circle circle-one">
            <CircleOne />
          </div>
          <div className="circle circle-two">
            <CircleTwo />
          </div>
          <div className="circle circle-three">
            <CircleThree />
          </div>
        </div>
        <div className="yellow-circle"></div>
        <div className="rocket-img"></div>
      </div>
    </div>
  );
}

export default PageThree;
