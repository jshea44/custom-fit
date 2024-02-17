import { useState } from 'react';

function Header(props) {
  console.log(props);
  // const [getter, setter] = useState([]);

  return (
    <div>
      <h2>This is my Header component</h2>
    </div>
  );
}

export default Header;
