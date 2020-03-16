import React from 'react';
import CenterContainer from '@styled/CenterContainer';
import ClassExample from '@components/ClassExample';
import FunctionExample from '@components/FunctionExample';

const Example1 = () => {
  return (
    <CenterContainer>
      <ClassExample headline="this is a class component" />
      <FunctionExample headline="this is a functional component" />
    </CenterContainer>
  );
};

export default Example1;
