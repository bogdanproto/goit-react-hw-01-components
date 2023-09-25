import { StatBox } from '../StatBox/StatBox';
import { StatisticsSection, StatisticList } from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <h2>{title}</h2>}
      <StatisticList>
        {stats.map(item => (
          <StatBox
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatisticList>
    </StatisticsSection>
  );
};
