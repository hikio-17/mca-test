import { FaSearch } from "react-icons/fa"
import TableDetailTransaction from "../components/TableDetailTransaction"
import TableSummary from "../components/TableSummary"

const SewingPage = () => {
  return (
    <section className="sewing-page">
      <div className="sewing-page__search">
        <p>
          Search
          <span className="sewing-page__search-input">
            <input type="text" placeholder="🔍" />
          </span>
        </p>
      </div>
      <hr />
      <div className="sewing-page__summary">
        <h4 className="sewing-page__summary-title">Summary</h4>

        <TableSummary />
      </div>

      <div className="sewing-page__detail-transaction">
        <h4 className="sewing-page__detail-transaction-style">SUMMARY</h4>
        <h4 className="sewing-page__detail-transaction-title">Detail Transaction</h4>
        <TableDetailTransaction />
      </div>
    </section>
  )
}

export default SewingPage