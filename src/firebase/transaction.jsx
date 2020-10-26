
//Add new transaction
export const addTrans = (
  uid,
  { type, amount, category, date, desc },
  successFn,
  errorFn
) => {
  let obj = {
    user: uid,
    type,
    amount,
    category,
    date,
    desc,
  };
};

//Get the Cards by Filter - "INC","EXP"
export const getTransactionByFilter = (uid, filter, successFn, errorFn) => {
  
};
