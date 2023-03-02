import PropTypes from 'prop-types';
import { SummaryRow } from '../SummaryRow';
import { SummaryHeader } from '../SummaryHeader';
import './RecordSummary.scss';
import { useMemo } from 'react';

export const RecordSummary = ({ data }) => {
  const total = useMemo(() => Object.values(data.rewardsSummary).reduce((prev, curr) => prev + curr.points, 0), [data]);

  return (
    <div className="record">
      <h2>
        {data?.firstName} {data.lastName}
      </h2>
      <SummaryHeader />
      {Object.values(data?.rewardsSummary)
        ?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map((transaction) => (
          <SummaryRow key={transaction.id} data={transaction} />
        ))}
      <div className="record__summary">
        <SummaryRow data={{ shortDate: 'Total', points: total }} />
      </div>
    </div>
  );
};

RecordSummary.propTypes = {
  data: PropTypes.object
};
