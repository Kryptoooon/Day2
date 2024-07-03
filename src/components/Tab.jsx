import { Table, TableBody, TableCell, TableRow, TableHead, TableContainer } from '@mui/material'
import React from 'react'

const Tab = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Aswin</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>Aluva</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tab
