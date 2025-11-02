'use client'

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string
}

export const Typewriter:React.FC<TypewriterProps> = ({text}) => {

  const [typedText, setTypedText] = useState<string>(text[0]);
  const [index, setIndex] = useState<number>(1);
  
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 75);

    return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1>{typedText}</h1>
  );
}
