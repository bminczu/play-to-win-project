import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    background: "#000000",
  background: "-webkit-linear-gradient(to right, #000000 0%, #CF1512 78%)",
  background: "-moz-linear-gradient(to right, #000000 0%, #CF1512 78%)",
  background: "linear-gradient(to right, #000000 0%, #CF1512 78%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  },

  image: {
    marginLeft: '15px',
  },

  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }
  },

  
}));