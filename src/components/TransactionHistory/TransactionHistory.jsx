import propTypes from "prop-types";
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    
    const Transaction = ({id,type,amount,currency }) => {
        return <tr key={id}>
                    <td>{ type}</td>
                    <td>{ amount }</td>
                    <td>{ currency }</td>
                </tr>
    }

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
                <tbody className={css.transactionBody}>
                    {items.map(({ id, type, amount, currency }) =>
                        <Transaction key={id} type={type} amount={amount} currency={currency} />
                    )}  
                </tbody>        
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