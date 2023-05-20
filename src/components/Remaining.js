import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency} = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const remaining = budget - totalExpenses;
  const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

  useEffect(() => {
    if (remaining <= 0) {
      alert('You cannot reduce the budget value lower than the spending');
    }
  }, [remaining]);

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: {currency}{remaining}</span>
    </div>
  );
};

export default Remaining;
