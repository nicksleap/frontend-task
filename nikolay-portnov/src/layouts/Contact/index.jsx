import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CustomInput from '../../views/Input';
import {
  updateCustomerAddress,
  updateCustomerEmail,
  updateCustomerName,
  updateCustomerPhone,
} from '../../store/actions';

const Contact = (props) => {
  const inputs = [
    {
      id: 'inputName',
      label: 'ФИО',
      type: 'text',
      value: props.nameValue,
      updValue: (e) => props.updNameValue(e),
    },
    {
      id: 'inputName',
      label: 'ФИО',
      type: 'text',
      value: props.phoneValue,
      updValue: (e) => props.updPhoneValue(e),
    },
    {
      id: 'inputName',
      label: 'ФИО',
      type: 'text',
      value: props.emailValue,
      updValue: (e) => props.updEmailValue(e),
    },
    {
      id: 'inputName',
      label: 'ФИО',
      type: 'text',
      value: props.addressValue,
      updValue: (e) => props.updAddressValue(e),
    },
  ];

  return (
    <div>
      <h2>Заполните данные</h2>
      <div className="inputsRow">
        {inputs.map((prop, k) => <CustomInput {...prop} key={k}/>)}
      </div>
      <div>
        <label htmlFor="accept">
          <input type="checkbox" id="accept"/>
          Я согласен на{' '}
          <a href="javascript:void(0)">обработку персональных данных</a>
        </label>
      </div>
      <button>Далее</button>
    </div>
  );
};

Contact.propTypes = {
  updNameValue: PropTypes.func,
  updPhoneValue: PropTypes.func,
  updEmailValue: PropTypes.func,
  updAddressValue: PropTypes.func,
  nameValue: PropTypes.string,
  phoneValue: PropTypes.string,
  emailValue: PropTypes.string,
  addressValue: PropTypes.string,
};

const mapStateToProps = (state) => ({
  nameValue: state.customer.name,
  phoneValue: state.customer.phone,
  emailValue: state.customer.email,
  addressValue: state.customer.address,
});

const mapDispatchToProps = (dispatch) => ({
  updNameValue: (value) => dispatch(updateCustomerName(value)),
  updPhoneValue: (value) => dispatch(updateCustomerPhone(value)),
  updEmailValue: (value) => dispatch(updateCustomerEmail(value)),
  updAddressValue: (value) => dispatch(updateCustomerAddress(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
