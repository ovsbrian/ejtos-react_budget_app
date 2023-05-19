import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    const newBudget = parseInt(event.target.value);
    const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    if (newBudget >= totalExpenses && newBudget <= 20000) {
      dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £</span>
      <input
        value={budget}
        onChange={handleBudgetChange}
        type='number'
        step='10'
      />
    </div>
  );
};

export default Budget;
