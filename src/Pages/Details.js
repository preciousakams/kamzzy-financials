// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { statementDetails } from '../redux/financialStatements/finStatements';

// const Details = () => {
//   const details = useSelector((state) => state.details);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(statementDetails());
//   }, []);

//   return (
//     <div className="detailsDiv">
//       {details.map((detail) => (
//         <>
//           <div key={detail.date}>
//             <h1>{detail.symbol}</h1>
//             <p>
//               Revenue:
//               {' '}
//               {detail.revenue}
//               <span>
//                 Cost of Revenue
//                 {' '}
//                 {detail.costOfRevenue}
//               </span>
//             </p>
//             <span>
//               Filling date:
//               {' '}
//               {detail.fillingDate}
//             </span>
//           </div>
//           <ul className="detailsList">
//             <li className="detailItem">
//               <span>
//                 Gross Profit:
//                 {' '}
//                 {detail.grossProfit}
//               </span>
//               <span>
//                 NetIncome:
//                 {' '}
//                 {detail.netIncome}
//               </span>
//             </li>
//           </ul>
//         </>
//       ))}
//     </div>
//   );
// };

// export default Details;
