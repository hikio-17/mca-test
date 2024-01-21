import '../assets/styles/tabledetailtransaction.css'

const TableDetailTransaction = () => {
   return (
      <table>
         <thead>
            <tr>
               <th rowSpan={2}>Operator</th>
               <th colSpan={6}>Size</th>
               <th rowSpan={2}>Total Qty</th>
               <th rowSpan={2}>Destination</th>
            </tr>
            <tr>
               <th>XS</th>
               <th>S</th>
               <th>M</th>
               <th>L</th>
               <th>XL</th>
               <th>XXL</th>
            </tr>
         </thead>

         <tbody>
            <tr>
               <td className="operator">M. Zaidan</td>
               <td className="size">15</td>
               <td className="size">25</td>
               <td className="size">0</td>
               <td className="size">30</td>
               <td className="size">17</td>
               <td className="size">11</td>
               <td className="qty">98</td>
               <td className="destination">HK (Hongkong)</td>
            </tr>
         </tbody>
      </table>
   )
}

export default TableDetailTransaction