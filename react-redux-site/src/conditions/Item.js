import React, { useRef } from 'react';
import styled from 'styled-components';


const Item = styled.li`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
  list-style-type: none;
  margin-bottom: 1rem;
`;

const Snippet = styled.p`
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
  @media (max-width: 766px) {
    width: 250px;
  } 

`;


const ImageWrapper = styled.div`
  width: 200px; 
  height: 200px;
  background-image: url(/download.png); 
  background-repeat: no-repeat; 
  background-size: contain; 
  flex-basis: calc(200px + 1rem);
  -ms-flex: auto;
  margin-right: 1rem
  @media (max-width: 766px) {
    flex-basis: 100%;
  } 
  @media (max-width: 382px) {
    width: 150px; 
    height:150px;
  } 
`;

const Image = styled.img`
  width: 200px; 
  height: 200px; 
  @media (max-width: 382px) {
    width: 150px; 
    height:150px;
  } 
}`;


const TextWrapper = styled.div`
  flex-basis: calc(100% - 220px)  ;
  -ms-flex: auto;
  @media (max-width: 766px) {
  flex-basis: 100%;
} 
`;

const ButtonAsLink = styled.button`
  width: max-content;
  background: none !important;
  border: none;
  padding: 0 !important;
  color: teal;
  font-family: inherit;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.0rem;
  :focus {
    color: blue;
  }
  :hover{
    color: blue;
  }
`;

function Condition(props) {

  const refContainer = useRef(null);

  const handleImageErrored = () => {
    refContainer.current.src = "/broken.jpg"
  }

  const { item, index } = props;
  return (
    <Item id={`item-${index}`}>
      <ImageWrapper className="image-wrapper" >
        <Image className="condition-image"
          src={item.image ? item.image : "/no-image.jpg"}
          alt=""
          ref={refContainer}
          onError={() => handleImageErrored()} />
      </ImageWrapper>
      <TextWrapper>
        <div>
          {item.label ? <h2 className="title">{item.label}</h2> : <></>}
          {item.snippet ? <Snippet className="snippet">{item.snippet}</Snippet> : <></>}
          <ButtonAsLink>Find out more</ButtonAsLink>
        </div>
      </TextWrapper>
    </Item>
  )
}

export default Condition