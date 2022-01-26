import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <span className="Counter__value">{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
