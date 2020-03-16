import React, { useState, useEffect } from 'react';
import Card from '@styled/Card';

// TODO: add some kind of state and a function to update this state
const FunctionExample = ({ headline = 'FunctionalComponent has no props' }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const now = new Date(Date.now());
    const dateParts = [now.getDay(), now.getMonth(), now.getFullYear()].join('.');

    setDate(dateParts);
  }, []); // dependency array - will run again only if this value changes or like this case only on mounting of the component because it's an empty array

  return (
    <Card>
      <h2>{headline}</h2>
      <p>the date in the functional component is {date}</p>
    </Card>
  );
};

export default FunctionExample;
