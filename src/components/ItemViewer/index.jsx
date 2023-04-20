import React from 'react'
import ViewerChunck from '../ViewerChunck'
import mainImgPath from "../../Assets/game-pad-main.png"
import { ViewerData } from './data'
import './master.css'

function ItemViewer() {
  const e = ViewerData.filter(element => element.id === "Havic HV G-92 Gamepad");
  console.log(e);
  console.log(e[0].side);
  const images = [ require("../../Assets/game-pad-1.png"),
  require("../../Assets/game-pad-2.png"),
  require("../../Assets/game-pad-3.png"),
  require("../../Assets/game-pad-4.png")];
  return (
    <div className='item-viewer-container'>
      <div className='viewer-side-bar-container'>
        {e[0].side.map((item) => 
          <ViewerChunck img={item}/>
        )}
      </div>

      <div className='viewer-main-container'>
        {/* <img src={mainImgPath} alt="" /> */}
        <ViewerChunck img={e[0].main}/>
      </div>

    </div>
  )
}

export default ItemViewer
