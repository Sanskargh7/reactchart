import axios from 'axios';

import React, { useEffect, useState } from 'react';
import Component from './Component';



export default function App() {
  const [dataX, setDataX] = useState([]);
  const [dataY, setDataY] = useState([]);
  
   useEffect(() => {
    async function getData() {
      const responseX = await axios.get('https://retoolapi.dev/gDa8uC/data');
      const responseY = await axios.get('https://retoolapi.dev/o5zMs5/data');
      
      setDataX(responseX.data);
      setDataY(responseY.data);

    }
    getData()
   
  }, [dataX])
  return <>
  <Component dataX={dataX}dataY={dataY}/>
  </>;
}




















// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Component from './Component';


// const App = () => {
//   // Sample data for demonstration

  

  

//   return (
//     <div>


//       <Component dataX={dataX} dataY={dataY} />
//     </div>
//   );
// }

// export default App;
