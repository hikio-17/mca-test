import TableSummary from "../components/TableSummary"

const SewingPage = () => {
  return (
    <section className="sewing-page">
      <div className="sewing-page__summary">
        <h4 className="sewing-page__summary-title">Summary</h4>

        <TableSummary />
      </div>
    </section>
  )
}

export default SewingPage