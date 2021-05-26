import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  signIn: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E0E0E0',
    borderRadius: '6px',
    textAlign: 'center',
    position: 'static',
    margin: '100px auto 0 auto',
  },
  title: {
    margin: '4rem 5.625rem',
    fontSize: '40px',
  },
  inputContainer: {
    margin: '0 3.39rem',
    display: 'flex',
    flexDirection: 'column',
  },
  password: {
    marginBottom: '2rem',
  },
  inputButton: {
    fontSize: '20px',
    color: ' #FFFFFF',
    padding: '20px 0',
    border: 'none',
    borderRadius: '6px',
    marginBottom: '4rem',
    backgroundColor: ' #00955C',
  },
  input: {
    fontSize: '20px',
    lineHeight: '64px',
    borderRadius: '6px',
    marginTop: 0,
    padding: '8px',
    height: '64px',
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#00955c',
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: '20px',
    lineHeight: '64px',
    textAlign: 'left',
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '0.125rem',
  },
});
