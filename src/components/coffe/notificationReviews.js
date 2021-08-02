import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  Notification.defaultProps = {
    message: '',
  };
  Notification.propTypes = {
    message: PropTypes.string,
  };

  return <p>{message}</p>;
};

export default Notification;
