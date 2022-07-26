/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';

const Catagories = () => {
  const status = useSelector((state) => state.catagories);

  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
      <h3>{status}</h3>
    </div>
  );
};

export default Catagories;
