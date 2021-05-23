import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  header: {
    boxShadow: '0px 3px 6px #4EB99029',
    borderRadius: ' 0px 0px 6px 6px',
    opacity: 1,
    width: '100%',
    display: 'flex',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    position: 'fixed',
  },
  phonebook: {
    paddingLeft: '1.5rem',
    opacity: 1,
    color: '#00955c',
  },
  link: {
    marginRight: '1.5rem',
  },
});
