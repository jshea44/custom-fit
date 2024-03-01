import { Button } from '@mui/material';
function Header({ onHomeButtonClick }) {
  return (
    <div id="header">
      <Button type="button" onClick={onHomeButtonClick}>
        Home
      </Button>
      <p>Custom Fit (this is the header)</p>
    </div>
  );
}

export default Header;
