import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

const getCoinsQuery = gql`
  {
    coins
     {
        name
        tickerSymbol
        tickerImage
        icoUSDPrice
        icoETHPrice
        icoBTCPrice
        icoTotalUSDRaised
        icoDate
      }
   }
`
class coins extends Component {
    displayCoins = ()=>{
        var data = this.props.data;
        if(data.loading) {
            return(<div>Loading...</div>)
        }
        else {
            return(
            <Paper className={styles({spacing: {unit: 1}}).root}>
                <Table className={styles({spacing: {unit: 1}}).table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">ticker Symbol</TableCell>
                            <TableCell align="right">ticker Image </TableCell>
                            <TableCell align="right">icoUSDPrice</TableCell>
                            <TableCell align="right">icoETHPrice</TableCell>
                            <TableCell align="right">icoBTCPrice</TableCell>
                            <TableCell align="right">icoTotalUSDRaised</TableCell>
                            <TableCell align="right">icoDate</TableCell>
                        </TableRow>
                    </TableHead>
                    {data.coins.map(coin=>(
                    <TableBody>
                            <TableRow key={coin.id}>
                            <TableCell align="right"> {coin.name} </TableCell>
                            <TableCell align="right">{coin.tickerSymbol}</TableCell>
                            <TableCell align="right">{coin.tickerImage}</TableCell>
                            <TableCell align="right">{coin.icoUSDPrice}</TableCell>
                            <TableCell align="right">{coin.icoETHPrice}</TableCell>
                            <TableCell align="right">{coin.icoBTCPrice}</TableCell>
                            <TableCell align="right">{coin.icoTotalUSDRaised}</TableCell>
                            <TableCell align="right">{coin.icoDate}</TableCell>
                        </TableRow>
                    </TableBody>
                    ))}
                </Table> 
            </Paper>
            )
        }
    }
    render() {
    //     console.log("data",this.props.data.coins);
    //     // const { classes } = this.props;
    //     // const {data} = this.props
    //     const data = this.props.data.coins;
         return(
         <div>
             {this.displayCoins()}
          </div>
        )
    }
}
coins.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default graphql(getCoinsQuery)(coins);withStyles(styles)(coins);
//   withStyles(styles)(coins);

// export default graphql(getCoinsQuery)(coins);

