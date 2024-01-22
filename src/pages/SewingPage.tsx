import { useEffect } from "react";
import TableDetailTransaction from "../components/TableDetailTransaction"
import TableSummary from "../components/TableSummary"
import api from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getAllSewingSummary, getDetailSewingTransaction, toggleSewingSummary } from "../stores/sewings/sewingSlice";
import { SewingSummary, States } from "../types";
import useInput from "../hooks/useInput";

const SewingPage = () => {
  const { sewingSummary, sewingDetailTransaction } = useSelector((states: States) => states.sewing);
  const [keyword, changeKeyword] = useInput('');
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

  const handleToggleViewSummary = async (item: SewingSummary, id: number) => {
    dispatch(toggleSewingSummary(id))
    const data = await api.getDetailSewingTransaction(item.Date, item.Style)
    dispatch(getDetailSewingTransaction({ ...data, Date: item.Date }))
  }

  const filterSewingSummary = sewingSummary.filter((item: SewingSummary) => item.Style.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <section className="sewing-page">
      <div className="sewing-page__search">
        <p>
          Search
          <span className="sewing-page__search-input">
            <input type="text" placeholder="🔍" value={keyword} onChange={changeKeyword} />
          </span>
        </p>
      </div>
      <hr />
      <div className="sewing-page__summary">
        <h4 className="sewing-page__summary-title">Summary</h4>

        {filterSewingSummary.length > 0 ? (
          <TableSummary sewingSummary={filterSewingSummary} onToggle={handleToggleViewSummary} />
        ) : (
          <center>
            <h3>Data Belum Tersedia ..!</h3>
          </center>
        )}
      </div>

      {sewingDetailTransaction && (
        <div className="sewing-page__detail-transaction">
          <h4 className="sewing-page__detail-transaction-style">{sewingDetailTransaction.StyleCode} #{sewingDetailTransaction.Date}</h4>
          <h4 className="sewing-page__detail-transaction-title">Detail Transaction</h4>
          <TableDetailTransaction detailTransaction={sewingDetailTransaction} />
        </div>
      )}
    </section>
  )
}

export default SewingPage