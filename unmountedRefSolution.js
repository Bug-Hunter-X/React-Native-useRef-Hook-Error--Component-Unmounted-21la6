import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isMountedRef.current) {
        setCounter(prevCounter => prevCounter + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      isMountedRef.current = false; //Important: Set to false before unmounting
    };
  }, []);

  return (
    <View>
      <Text>Counter: {counter}</Text>
    </View>
  );
};

export default MyComponent;