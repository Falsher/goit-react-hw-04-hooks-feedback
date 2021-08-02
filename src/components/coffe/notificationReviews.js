import { useState } from 'react';

export default function Notification() {
  const [message] = useState('');

  return <p>{message}</p>;
}
