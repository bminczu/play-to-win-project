import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableSortLabel } from '@material-ui/core';


import {useSelector} from 'react-redux'





const TableComponent = () => {
  
  const posts = useSelector(state => state.posts)
    


///LEADERBOARD
///iterate over each post object..
// pull out the winning player key value pair
//store in a seperate ariable
/// count occurance of same player names
/// return in descending order

// const winners = posts.map(obj => obj.winner[0]).reduce(function (acc, curr) {
//   return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
// }, {});

// winners.sort((a,b) => parseFloat())



const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(x[field])
    } :
    function(x) {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}

const alphaPlayers = () => console.log( posts.sort(sort_by('player', false, (a)=> a.toUpperCase())))
// console.log(posts.sort(sort_by('player', false, (a)=> a.toUpperCase())))
 
// const array = [posts]
// const winner = "Bart"
// const count = console.log(posts.map(obj => obj.winner[0]))
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
              {/* <TableCell><button > </button> </TableCell> */}
              <TableCell><button onClick={alphaPlayers}> A-Z </button>Player</TableCell>
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