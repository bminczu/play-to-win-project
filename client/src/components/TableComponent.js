import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {useSelector} from 'react-redux'





const TableComponent = () => {
  
  const posts = useSelector(state => state.posts)
    

 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="l">Opponent</TableCell>
            <TableCell align="l">Game&nbsp;Played</TableCell>
            <TableCell align="l">Winner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {post.player}
              </TableCell>
              <TableCell align="left">{post.player}</TableCell>
              <TableCell align="left">{post.opponent}</TableCell>
              <TableCell align="left">{post.gameName}</TableCell>
              <TableCell align="left">{post.winner}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;