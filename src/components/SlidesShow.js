import React from 'react';
import { Carousel } from 'react-bootstrap';
import FutureMailCover from '../img/FutureMailCover.jpg';

// eslint-disable-next-line arrow-body-style
const SlidesShow = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FutureMailCover}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>时间旅行者开办了一项全新的邮件业务</h3>
            <p>你可以将一封信发送到未来</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FutureMailCover}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>给未来的自己写一封信</h3>
            <p>想知道未来的自己在做些什么吗，ta需要鼓励还是鼓掌？</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FutureMailCover}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>如果没有特别想说的话</h3>
            <p>你也可以给未来的自己一个拥抱，一句祝福！</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlidesShow;
