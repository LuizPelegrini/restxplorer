import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

// Adding my own custom properties based on the default html input properties
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null); // get a reference to the input element in the JSX below
  const { fieldName, registerField, defaultValue, error } = useField(name);

  // registering the field in Unform as soon as the component is rendered
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input ref={inputRef} defaultValue={defaultValue} name={name} {...rest} />
    </Container>
  );
};

export default Input;
