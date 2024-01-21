import { useState } from "react"
import '../assets/styles/tablesummary.css'

const TableSummary = ({ sewingSummary }) => {
   const [viewDetail, setViewDetail] = useState(false);

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
            {sewingSummary.map((item) => (
               <tr key={item.date}>
                  <td>{item.Date.split('T')[0]}</td>
                  <td>{item.Style}</td>
                  <td>{item.TotalOutput}</td>
                  <td>{item.TotalSize}</td>
                  <td className={`action ${viewDetail && 'close-detail'} `}>
                     <button
                        onClick={() => setViewDetail(!viewDetail)}
                     >
                        {viewDetail ? 'Close Detail' : 'View Detail'}
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default TableSummary