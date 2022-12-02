import { Avatar, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fragment, useState } from "react";
import { Box } from "@mui/system";

export const UserInfo = ({ instance }) => {
    const { name, position } = instance
    return (
        <>
            <div className="flex">
                <Avatar alt={`${name}`} src={"#"} sx={{ width: 40, height: 40 }} />
                <div className="ml-2">
                    <div className="font-bold text-gray-500">
                        {name}
                    </div>
                    {position}
                </div>
            </div>
        </>
    )
}

export const Attendance = ({ instance }) => {
    const { attendance } = instance
    // for(let i in attendance){
    //     console.log(i)
    // }
    let at_rows = []
    Object.entries(attendance).forEach(([key, value]) => {
        const _ = {
            date: key,
            times: value.times,
            status: value.status,
        }
        at_rows.push(_)
    });
    // console.log(at_rows);

    return (
        <>
            {
                at_rows.map(i => <TableRow
                    key={Math.random()}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {i.date}
                    </TableCell>
                    <TableCell>
                        {
                            i.times.map(j => <li key={Math.random()}>{j}</li>)
                        }

                    </TableCell>
                    <TableCell align="right">
                        {i.status === 'present' && <span className="text-green-600 font-bold capitalize">{i.status}</span>}
                        {i.status === 'late' && <span className="text-red-600 font-bold capitalize">{i.status}</span>}
                        {i.status === 'holiday' && <span className="text-orange-400 font-bold capitalize">{i.status}</span>}
                    </TableCell>
                </TableRow>
                )
            }
        </>
    )
}

export const Row = ({ row }) => {
    const [open, setOpen] = useState(false)
    return (
        <Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>
                    <UserInfo instance={row} />
                </TableCell>
                <TableCell align="left">{row.branch}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 'auto' }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Attendance
                            </Typography>
                            <Table size="small" aria-label="attendance">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Time</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <Attendance instance={row} />
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>

    )
}