import PropTypes from 'prop-types';

export const SummaryRow = ({ data }) => {
  return (
    <div className="flex flex--between">
      <p>{data.shortDate}</p>
      <p>{data.points}</p>
    </div>
  );
};

SummaryRow.propTypes = {
  data: PropTypes.object
};
