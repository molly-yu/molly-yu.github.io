import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import p1 from '../assets/3.JPG';

import styled from 'styled-components';

const Styles = styled.div`
.car1 {
    width:500px;
    height:333px;
    position:relative;
  }
  image {
    width:500px;
    height:333px;
    position:relative;
 
  }
    
`;

const Carousel6 = () => {
  return (
      <Styles>
      <div className="car1">
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
                <div className="image">
              <img
                className="d-block w-100"
                src={p1}  alt="First slide"
              />
              </div>
            </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </div>
    </Styles>
  );
}

export default Carousel6;