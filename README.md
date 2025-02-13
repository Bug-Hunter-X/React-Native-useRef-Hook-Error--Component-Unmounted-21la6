# React Native useRef Hook Error: Component Unmounted

This repository demonstrates a common error in React Native when using the `useRef` hook with components that unmount prematurely.  Accessing `ref.current` after the component has unmounted can lead to unexpected behavior or crashes. The solution involves checking if the component is still mounted before accessing `ref.current`.

## Bug
The `unmountedRefBug.js` file demonstrates the error.  An interval is set using `useRef`, but the interval continues to run even after the component unmounts, resulting in errors when attempting to update the `counter`. 

## Solution
The `unmountedRefSolution.js` file shows how to fix this by checking if the component is mounted before accessing `ref.current`. This prevents errors and ensures cleaner cleanup.