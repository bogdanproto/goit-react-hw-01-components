import { StatBoxItem, Percentage } from './StatBox.styled';

export const StatBox = ({ label, percentage }) => (
  <StatBoxItem props={percentage}>
    <span>{label}</span>
    <Percentage>{percentage}%</Percentage>
  </StatBoxItem>
);
