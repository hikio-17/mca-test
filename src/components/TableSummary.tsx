import '../assets/styles/tablesummary.css'

const TableSummary = ({ sewingSummary, onToggle }) => {
   return (
      <table cellSpacing={0}>
         <thead>
            <th>Date</th>
            <th>Style</th>
            <th>Total Size</th>
            <th>Total Output</th>
            <th>Action</th>
         </thead>

         <tbody>
            {sewingSummary.map((item, i) => (
               <tr key={i}>
                  <td>{item.Date}</td>
                  <td>{item.Style}</td>
                  <td>{item.TotalOutput}</td>
                  <td>{item.TotalSize}</td>
                  <td className={`action ${item.detailView === true ? 'close-detail' : ''} `}>
                     <button
                        onClick={() => onToggle(item, i)}
                     >
                        {item.detailView ? 'Close Detail' : 'View Detail'}
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default TableSummary