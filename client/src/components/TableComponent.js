import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import {useSelector} from 'react-redux'





const TableComponent = () => {
  
  const posts = useSelector(state => state.posts)
    


///LEADERBOARD
///iterate over each post object..
// pull out the winning player key value pair
//store in a seperate ariable
/// count occurance of same player names
/// return in descending order


const array = [posts]
const winner = "Bart"
const count = console.log(array.filter((obj) => obj.winner === winner).length)
////https://stackoverflow.com/questions/45547504/counting-occurrences-of-particular-property-value-in-array-of-objects
// const topPlayers = (array) => {

//  return console.log(array)
// }

// topPlayers(array)
 
  return (

    
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align="left">Opponent</TableCell>
              <TableCell align="left">Game&nbsp;Played</TableCell>
              <TableCell align="left">Winner</TableCell>
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