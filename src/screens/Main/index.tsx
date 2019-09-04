import React from 'react';
import { useSelector } from 'react-redux';

import Layout from './Layout';

// all component logic here
export default function Main() {
  const user = useSelector((state: any) => state.user);
  console.warn(user);

  return (
    <Layout />
  );
}
