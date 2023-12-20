export type Transaction = {
  name: string;
  timeStamp: string;
  category: string;
  amount: number;
  description: string;
  type: 'income' | 'expense';
};
