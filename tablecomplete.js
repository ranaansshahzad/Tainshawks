import React, {Component} from 'react'

const TableHeader = () =>{
  return(
  <thead>
        <tr>
            <th>ID</th>
            <th> First Name</th>
            <th>LastName</th>
            <th>City</th>
            <th>State</th>
            <th>Gender</th>
            <th>StudentStatus</th>
            <th>Country</th>
            <th>Age</th>
            <th>Grade</th>

          </tr>
        </thead>
  )
}

const TableBody = (props) => {
    const tRows=props.tableData.map((data,index)=>{
        return(
            <tr key={index}>
                <td>{data.ID}</td>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.City}</td>
                <td>{data.State}</td>
                <td>{data.Gender}</td>
                <td>{data.StudentStatus}</td>
                <td>{data.Country}</td>
                <td>{data.Age}</td>
                <td>{data.Grade}</td>

                

            </tr>

        )
    })
    return(
        <tbody>
      {tRows}
    </tbody>
    )}
//   const tRows = props.tableData.map((row, index)=>{
//     return(
//     <tr key={index}>
//       <td>{row.FirstName}</td>
//       <td>{row.LastName}</td>
//     </tr>
//     )
//   })
//   return(
//     <tbody>
//       {tRows}
//     </tbody>
//   )
// }
class TableComplete extends Component {
  render() {
    const {tableData} = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody tableData = {tableData}/>
      </table>
    )
  }
}

export default TableComplete





















































// import React, {Component} from 'react'
// import  './stylesheet.css';

// const TableHeader = (props) => {
//   return(
//     <table>
//       <thead>
//         <th>id</th>
//         <th>FirstName</th>
//         <th>LastName</th>
//         <th>City</th>
//         <th>State</th>
//       </thead>
//       <tbody>
//         <tr>
// {
//   props.tableData.map((val)=>{
//     <tr>
//     <td>{val.ID}</td>
//     <td>{val.FirstName}</td>
//     <td>{val.LastName}</td>
//     <td>{val.City}</td>
//     <td>{val.State}</td>
//     </tr>
//   })
// }
//         </tr>
//       </tbody>
//     </table>
//   )
// }

 
//   export default TableComplete