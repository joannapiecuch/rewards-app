import './RewardsSummary.scss';
import { useRewardsSummary } from './hooks';
import { RecordSummary } from './components';
import { Loader } from '../../components';

export const RewardsSummary = () => {
  const { data, isLoading, error } = useRewardsSummary();

  if (isLoading) return <Loader />;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="summary">
      <div className="container">
        <h2 className="summary__header">Rewards history</h2>
        <div className="summary__list">
          {data?.map((item) => (
            <RecordSummary data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
