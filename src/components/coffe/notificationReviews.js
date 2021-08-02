import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Notification() {
  const [message, setMessage = PropTypes.string] = useState('');

  return <p>{message}</p>;
}
