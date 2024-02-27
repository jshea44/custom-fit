import { useState } from 'react';

function Header(props) {
  console.log(props);
  // const [getter, setter] = useState([]);

  return (
    <div>
      <p>Custom Fit (this is the header)</p>
    </div>
  );
}

export default Header;
