import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Transaction} from '../../types/Transaction.type';
import * as storage from '../../utils/storage';
import {StorageKeys} from '../../utils/constants';

/* interface */
export interface TransactionState {
  transactions: Transaction[];
}

/* define the initial state */
const initialState: TransactionState = {
  transactions: [],
};

/* create slice */
const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    saveTransaction: (state: TransactionState, action) => {
      const oldList = state.transactions;
      oldList.push(action.payload as Transaction);
      state.transactions = oldList;
      storage.save(StorageKeys.TRANSACTIONS, state.transactions);
    },
    initTransactionState: (state: TransactionState, action) => {
      state.transactions = action.payload as Transaction[];
    },
  },
});

/* export */
export const {saveTransaction, initTransactionState} = transactionSlice.actions;
export const SELECTOR_TRANSACTION = (state: RootState) => state.transaction;
export default transactionSlice.reducer;
