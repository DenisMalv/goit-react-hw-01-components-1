import PropTypes from 'prop-types';
import css from './Statistics.module.css'


export default function Statistics(props) {
    console.log(props);
    const { title, stats } = props
    console.log(stats)
    console.log(title);
    if (!title) {
        return ""
    }
    return <section className={css.statistics}>
        
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statlist}>
            {stats.map(elem=><li className={css.item} key={elem.id}><span className={css.label}>{elem.label}</span>
                <span className={css.percentage}>{ elem.percentage }</span></li> )}
        </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired, 
  })),
}