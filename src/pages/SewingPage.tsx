import { useEffect } from "react";
import TableDetailTransaction from "../components/TableDetailTransaction"
import TableSummary from "../components/TableSummary"
import api from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getAllSewingSummary, getDetailSewingTransaction, toggleSewingSummary } from "../stores/sewings/sewingSlice";

const SewingPage = () => {
  const { sewingSummary, sewingDetailTransaction } = useSelector((states) => states.sewing);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSewingSummary = async () => {
      try {
        const sewingSummary = await api.getAllSummarySewing();
        dispatch(getAllSewingSummary(sewingSummary));
      } catch (error) {
        console.log('Error fetching ger all sewing summary', error)
      }
    }
    fetchSewingSummary();
  }, [dispatch]);

  const handleToggleViewSummary = async (item: object, id: number) => {
    dispatch(toggleSewingSummary(id))
    const data = await api.getDetailSewingTransaction(item.Date, item.Style)
    dispatch(getDetailSewingTransaction(data))
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

        <TableSummary sewingSummary={sewingSummary} onToggle={handleToggleViewSummary} />
      </div>

      {sewingDetailTransaction && (
        <div className="sewing-page__detail-transaction">
          <h4 className="sewing-page__detail-transaction-style">SUMMARY</h4>
          <h4 className="sewing-page__detail-transaction-title">Detail Transaction</h4>
          <TableDetailTransaction detailTransaction={sewingDetailTransaction} />
        </div>
      )}
    </section>
  )
}

export default SewingPage