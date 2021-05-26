import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  header: {
    boxShadow: '0px 3px 6px #4EB99029',
    borderRadius: ' 0px 0px 6px 6px',
    width: '100%',
    height: '65px',
    display: 'flex',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    zIndex: 999,
    position: 'fixed',
  },
  phonebook: {
    fontWeight: 'bold',
    fontSize: '49px',
    textAlign: 'left',
    letterSpacing: 0,
    margin: 'auto 0 auto 1rem',
    color: '#00955c',
  },
  link: {
    margin: 'auto 1.5rem auto 0',
    fontSize: '20px',
    fontWeight: 'bold',
    '& a:link, & a:active, & a:visited': {
      color: '#00955C',
      textDecoration: 'none',
    },
  },
});
