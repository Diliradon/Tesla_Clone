import './Home.scss';
import { Section } from '../Section/Section';
import backgroundImgS from '../../images/model-s.jpg';
import backgroundImgX from '../../images/model-x.jpg';
import backgroundImg3 from '../../images/model-3.jpg';
import backgroundImgY from '../../images/model-y.jpg';
import backgroundImgP from '../../images/solar-panel.jpg';
import backgroundImgR from '../../images/solar-roof.jpg';
import backgroundImgA from '../../images/accessories.jpg';

export const Home = () => {
  return (
    <div className='home'>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={backgroundImgS}
        rightButton="Exsisting Inventory"
        leftButton="Custom Order"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={backgroundImgX}
        rightButton="Exsisting Inventory"
        leftButton="Custom Order"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={backgroundImg3}
        rightButton="Exsisting Inventory"
        leftButton="Custom Order"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={backgroundImgY}
        rightButton="Exsisting Inventory"
        leftButton="Custom Order"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg={backgroundImgP}
        rightButton="Exsisting Inventory"
        leftButton="Custom Order"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg={backgroundImgR}
        rightButton="Exsisting Inventory"
        leftButton="Custom Order"
      />
      <Section
        title="Accessories"
        backgroundImg={backgroundImgA}
        leftButton="Custom Order"
      />
    </div>
  )
}