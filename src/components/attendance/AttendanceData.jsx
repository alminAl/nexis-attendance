import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import useFeatchData from "../../hooks/useFeatchData"
import { Row } from "./@utils/Cells";





const AttendanceData = () => {
  const { tableData } = useFeatchData()
  return (
    <div  className="lg:w-3/4 mx-auto h-[80vh] overflow-auto ">
      <Table stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Attendance</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Employee</TableCell>
            <TableCell align="left">Branch</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {
            tableData.map(i => <Row key={i.id} row={i} />)
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AttendanceData