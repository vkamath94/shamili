// src/components/ResultsDisplay.js
import React from 'react';
import Res from './wrappers/Res';

export default function ResultsDisplay({ image1, image2, altText1, altText2 }) {
  return (
    <Res image1={image1} image2={image2} altText1={altText1} altText2={altText2} />
  );
}
