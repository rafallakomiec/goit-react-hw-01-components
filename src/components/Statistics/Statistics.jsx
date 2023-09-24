import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import randomHSLGen from '../../utils/randomHSLGen';

const Statistics = ({ title = null, stats }) => {
  const statsList = stats.map(stat => {
    const HSL = randomHSLGen();
    const itemStyle = {
      color: HSL[2] > 50 ? 'black' : 'white',
      backgroundColor: `hsl(${HSL[0]}, ${HSL[1]}%, ${HSL[2]}%)`,
    };

    return (
      <li key={stat.id} className={css.item} style={itemStyle}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}%</span>
      </li>
    );
  });

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>{statsList}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
