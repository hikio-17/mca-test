import { useEffect, useState } from "react";
import TableDetailTransaction from "../components/TableDetailTransaction"
import TableSummary from "../components/TableSummary"
import api from "../utils/api";

const SewingPage = () => {
  const [sewingSummary, setSewingSummary] = useState([]);

  useEffect(() => {
    getAllSummarySewing()
  }, []);

  const getAllSummarySewing = async () => {
    const summary = await api.getAllSummarySewing();
    setSewingSummary(summary);
    console.log(sewingSummary);
  }
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

        <TableSummary sewingSummary={sewingSummary} />
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