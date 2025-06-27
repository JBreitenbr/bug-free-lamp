import {useEffect, useState} from 'react';
import Pagination from "./Pagination";
import Track from "./Track";
const Encyclopedy = ({tracks,bandName}) => {
  
  return (<>{tracks.length>0?
            (<Pagination
              data={tracks}
              RenderComponent={Track}
              title=""
              buttonConst={3}
              contentPerPage={10}
              siblingCount={1}
            />):<div className="spoti mt-7 sm:mt-36"></div>}</>)
}

export default Encyclopedy;