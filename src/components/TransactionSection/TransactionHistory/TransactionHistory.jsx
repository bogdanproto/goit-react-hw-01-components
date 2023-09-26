import { Transaction } from '../Transaction/Transaction';
import { Table } from './TransactionHistory.styled';

export const TransactionsHistory = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <Transaction key={id} type={type} amount={amount} currency={currency} />
      ))}
    </tbody>
  </Table>
);
