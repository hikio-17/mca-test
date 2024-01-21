import { useState } from "react"
import '../assets/styles/tablesummary.css'

const TableSummary = () => {
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
            <tr>
               <td>2024-01-01</td>
               <td>BOSSE FANCY OH HOOD S.9</td>
               <td>5</td>
               <td>190</td>
               <td className="action">
                  <button>View Detail</button>
               </td>
            </tr>
            <tr>
               <td>2024-01-01</td>
               <td>BOSSE FANCY OH HOOD S.9</td>
               <td>5</td>
               <td>190</td>
               <td className={`action ${viewDetail && 'close-detail'} `}>
                  <button
                     onClick={() => setViewDetail(!viewDetail)}
                  >
                     {viewDetail ? 'Close Detail' : 'View Detail'}
                  </button>
               </td>
            </tr>
            <tr>
               <td>2024-01-01</td>
               <td>BOSSE FANCY OH HOOD S.9</td>
               <td>5</td>
               <td>190</td>
               <td className="action">
                  <button>View Detail</button>
               </td>
            </tr>
            <tr>
               <td>2024-01-01</td>
               <td>BOSSE FANCY OH HOOD S.9</td>
               <td>5</td>
               <td>190</td>
               <td className="action">
                  <button>View Detail</button>
               </td>
            </tr>
         </tbody>
      </table>
   )
}

export default TableSummary