import React from 'react';
import RotatingText from './rotatingText';
import styled from 'styled-components'

const ParagraphOne = styled.p`
  background: linear-gradient(to right, #6196E4 50%, white 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 400ms;
  &:hover {
    background-position: 0 100%;
  }
`
const ParagraphTwo = styled.p`
  background: linear-gradient(to right, white 50%, #6196E4 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 400ms;
  &:hover {
    background-position: 0 100%;
  }
`

const ParagraphHover = () => (
    <div className="sm:w-1/2 w-full flex-1">
        <ParagraphOne className="font-extrabold text-7xl desktop:text-9xl text-center desktop:text-left md:mx-10">
            ANGEL
        </ParagraphOne>
        <ParagraphTwo className="text-themeBlue font-extrabold text-7xl desktop:text-9xl text-center desktop:text-right">
            RAMIREZ
        </ParagraphTwo>
        <RotatingText/>
    </div>
)
 
export default ParagraphHover;