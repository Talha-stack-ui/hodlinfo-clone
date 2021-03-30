import React from 'react';
import './App.css';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import img1 from './img1.jpg';  
import img2 from './img2.jpg';     



const Info = (props) =>{
  return(
  <>
  <div className="data">
  <p>{props.id}</p>
  <p>{props.plat}</p>
  <p>{props.Ltp}</p>
  <p>{props.BS}</p>
  <p>{props.diff}</p>
  <p>{props.sav}</p>
  </div>
  </>)};

 

  
function App() {
  const [val,setVal]=React.useState(false);
  const handleChange = (event) =>{
    setVal(event.target.checked)
  }


  return (
    <div className="App">
      <header className="App-header">
       <h1 className="header-left"><span id="logo">HODLINFO</span> <br/><p>Powered By <span>Finstreet</span></p></h1>
       <div className="header-center">
       <select className="select">
         <option>INR</option>
       </select>
       <select className="select">
         <option>BTC</option>
         <option>ETH</option>
         <option>USDT</option>
         <option>XRP</option>
         <option>TRX</option>
         <option>DASH</option>
         <option>ZEC</option>
         <option>XEM</option>
         <option>IOST</option>
       </select>
      <button className="select" ><a className="links"  href={"https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"}>BUY BTC</a></button>
       </div>
       <div className="header-right">
         <div className="counter"></div>
         <button id="telegram"><a className="links telegram" href={"https://hodlinfo.com/connect/telegram"}>🚀 Connect Telegram</a></button>
         <button id="display"><Switch checked={val}
           onChange={handleChange}
           name={'switch'} color={'primary'}>
           
         </Switch></button>
       </div>
      </header>
      <div className="main">
      <p id="main-text">Best Price to Trade</p>
      </div>
      <div className="numbers">
      <div className="left-main resp">
      <p><span>0.83 % </span><br/> 5 Mins</p>
      <p><span>1.49 % </span> <br />1 Hour</p>
      </div>
      <div className="main-center ">₹39,86,963</div>
      <div className="main-right resp">
      <p><span>10.81 % </span><br/> 1 Day</p>
      <p><span>14.26 % </span> <br />7 Days</p>
      </div>
      </div>
      <div id="center-text">Average BTC/INR net price including commission</div>
      <div className="img"><a href={'https://finstreet.in/courses'}><img className="image" src={img1} /></a></div>
      <div className="list-info">
        <p>#</p>
        <p>Platform</p>
        <p>Last Traded Price</p>
        <p>Buy / Sell Price</p>
        <p>Difference</p>
        <p>Savings</p>
      </div>
      <Info id={1} plat={'WasirX'}  Ltp={'43,20,000'} BS= {'43,26,674 / ₹ 43,34,566'} diff={'7.07 %'} sav={'▲ ₹ 2,85,366'} />
      <Info id={2} plat={'Bitbns'}  Ltp={'₹ 43,10,467'} BS= {'₹ 43,09,753 / ₹ 43,09,967'} diff={'6.90 %'} sav={'▲ ₹ 2,78,014'} />
      <Info id={3} plat={'Giotus'}  Ltp={'₹ 43,32,000'} BS= {'₹ 43,32,000 / ₹ 43,39,000'} diff={'7.44 %'} sav={'▲ ₹ 3,00,046'} />
      <Info id={4} plat={'Colodax'}  Ltp={'₹ 43,40,977'} BS= {'₹ 43,02,472 / ₹ 43,45,714'} diff={'0.33 %'} sav={'▲ ₹ 14,422'} />
      <Info id={5} plat={'Zebpay'}  Ltp={'₹ 43,18,000'} BS= {'₹ 43,19,999 / ₹ 43,18,000'} diff={'-0.22 %'} sav={'▼ ₹ 9,555'} />
      <Info id={6} plat={'CoinDCX'}  Ltp={'₹ 43,47,684'} BS= {'₹ 43,36,873 / ₹ 43,41,324'} diff={'0.47 %'} sav={'▲ ₹ 20,129'} />
      <div className="img2"><a href={'https://ftx.com/'}><img className="img2" src={img2} /></a></div>
      <br />
      <hr />
      <footer>
      <div className="left">
        <p>Copyright © 2019</p>
        <p>HodlInfo.com</p>
        <p>Developed By <a id="quad" href={'https://www.quadbtech.com/'}>QuadBTech</a></p>
        </div>
      <div className="right">
        <p><a id="mail" href="mailto:@hodlinfo.com.com">Support</a></p>
      </div>
      </footer>
      <div className="bottom"></div>

    </div>
  );
}

export default App;
