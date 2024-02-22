import { useState } from 'react';

function Header(props) {
  console.log(props);
  // const [getter, setter] = useState([]);

  return (
    <div>
      <h1>Custom Fit (this is the header)</h1>
    </div>
  );
}

export default Header;
