import { TransactionLine } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => (
  <TransactionLine>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </TransactionLine>
);
