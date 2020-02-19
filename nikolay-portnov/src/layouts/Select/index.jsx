import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Select = (props) => {
  return (
    <div>
      <button><span>Назад</span></button>
      <h2>Вода</h2>
      {/* Select bottle */}
      {/* Select date */}
      {/* Select time */}
      <button>Заказать воду</button>
    </div>
  );
};

Select.propTypes = {
  delivery: PropTypes.object,
};

const mapStateToProps = (state) => ({
  delivery: state.delivery,
  bottle: state.bottle,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Select);
