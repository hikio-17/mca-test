import React from 'react'
import '../assets/styles/tablesummary.css'
import { SewingSummary, TableSummaryProps } from '../types'

const TableSummary: React.FC<TableSummaryProps> = ({ sewingSummary, onToggle }) => {
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
            {sewingSummary.map((item: SewingSummary, i: number) => (
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