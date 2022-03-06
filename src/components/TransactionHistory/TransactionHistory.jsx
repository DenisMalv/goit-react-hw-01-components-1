import propTypes from "prop-types";
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    // console.log(props);
    // const { items } = props
    console.log(items);
    return (
        <section className={css.transactionHistorySection}>
            <table className={css.transactionHistory}>
                <thead className={css.transactionHead}>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>
                {items.map(transaction =>
                    <tbody className={css.transactionBody} key={transaction.id}>
                    <tr>
                        <td>{ transaction.type}</td>
                        <td>{ transaction.amount }</td>
                        <td>{ transaction.currency }</td>
                    </tr>
                    </tbody>
                )}            
            </table>
        </section>
    )
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired, 
        currency:propTypes.string.isRequired,
  }))
}