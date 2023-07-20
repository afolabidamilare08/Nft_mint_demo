import './App.css';
import './css/mainCard.css';
import './css/smallCard.css';
import "./css/PreviewCard.css"
import { useState } from 'react';
import MainCard from './Nft card/MainCard';
import Congratulations_Logo from "./img/congratulations_logo.png";
import Easter_Logo from "./img/easter_logo.png";
import Birthday_Logo from "./img/birthday_logo.png";
import Getwell_Logo from "./img/getwell_logo.png";
import Halloween_Logo from "./img/halloween_logo.png";
import Xmas_Logo from "./img/xmas_logo.png";
import ValePicture from "./img/vale.png";
import Halloween from "./img/halloween.png";
import SantaPicture from "./img/santa.png";
import BirthdayPicture from "./img/birthday.png";
import Congratulations from "./img/congratulations.png";
import EasterPicture from "./img/easter.png";
import NftCardSmall from './Nft card/Nft_cardSmall';
import { FaUser } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import PreviewCard from './Nft card/PreviewCard';

import Birthday_spalsh from './img/birthday_spalsh.png';
import Xmas_spalsh2 from './img/xmas_bg2.png';
import Easter_spalsh from './img/easter_bg.png';
import Halloween_spalsh from './img/halloween_bg.png';
import GetWellSoon from './img/get_well_soon.png';
import Congrats_left from './img/congrats_left.png';
// import Congrats_Right from './img/congrats_right.png';
// import GetWellSoon2 from './img/get_well_soon2.png';
import Congratulations_splash from './img/congratulations_splash.png';


import Xmas_Side from './img/Xmas_side.png';
import GetWellCAp from './img/get_well_cap.png';
import EasterLeft from './img/easter_left.png';
import HatBox from './img/hat.png';
import Yellow_Box from './img/yellow_small2.png';

import BirthDayText from './img/Happy_birthday_text.png';
import XmasText from './img/Xmas_text.png';
import GetWellText from './img/get_well_soon_text.png';
import HalloweenText from './img/halloween_text.png';
import EasterText from './img/happy_easter_text.png';
import CongratulationsText from './img/congratulations_text.png';

const App = () => {

  const [ Order , setOrder ] = useState({

    OrderBackground:null,
    OrderBgOptions:[
      "#F30188" , "goldenrod" , "blue"
    ],
    themeColor:"#F30188",
    OrderRecepientName:'',
    OrderPrice:'',
    OrderImage:null,
    ImagePreview:null,
    OccationImage:ValePicture,
    EthtoSpend:0,
    OpenPreview:false,
    OccationName:"Get Well Soon",
    GiftCardAmount:1,
    CardLogo:Getwell_Logo,
    CardBgandSetting:[
      {
        bg:GetWellSoon,
        top:"20px",
        left:"8px"
      }
    ],
    BgCap:GetWellCAp,
    BgSide:null,
    Bg_text:GetWellText
  })


// i love it




    
  const Pickingimage = (event) =>{
      
      const currentfile = event.target.files[0] 
      const reader = new FileReader()
      reader.addEventListener("load",()=>{
        setOrder({...Order,
              OrderImage:currentfile,
              ImagePreview:reader.result

          })
          // console.log(currentfile)
      },false)
      

      reader.readAsDataURL(currentfile)

  }





  


  



 


  return ( 
    <div className="App">

      




      <div className='App-Left' >
      
      <NftCardSmall
        displayName={ Order.OccationName === "Get Well Soon" ? "block" : "none" }
        CardName="Get Well Soon"
        midimage={ValePicture}
        barcolor={"#F30188"}
        logo={Getwell_Logo}
        className={"SmallCardget"}
        ifchosen={ Order.OccationName === "Get Well Soon" ? {
          "transform":"scale(1.4)",
          "z-index":"333",
          "box-shadow":"0px 0px 12px 10px " + Order.themeColor,
          "background-color":Order.themeColor,
        } : {} }
        selected={
            () => setOrder({
              ...Order,
              themeColor:"#F30188",
              OrderBgOptions:[
                "#F30188" , "goldenrod" , "blue"
              ],
              OccationImage:ValePicture,
              OccationName: "Get Well Soon",
              CardLogo:Getwell_Logo,
              CardBgandSetting:[
                {
                  bg:GetWellSoon,
                  top:"20px",
                  left:"8px"
                }
              ],
              BgCap:GetWellCAp,
              BgSide:null,
              Bg_text:GetWellText
            })
        }
      />

      
      <NftCardSmall
        displayName={  Order.OccationName === "Happy Halloween" ? "block" : "none"  }
        CardName="Halloween"
        midimage={Halloween}
        barcolor={"orange"}
        logo={Halloween_Logo}
        ifchosen={ Order.OccationName === "Happy Halloween" ? {
          "transform":"scale(1.4)",
          "z-index":"333",
          "box-shadow":"0px 0px 12px 10px " + Order.themeColor,
          "background-color":Order.themeColor,
        } : {} }
        selected={
            () => setOrder({
              ...Order,
              themeColor:"orange",
              OrderBgOptions:[
                "orange" 
              ],
              OccationImage:Halloween,
              OccationName: "Happy Halloween",
              CardLogo:Halloween_Logo,
              CardBgandSetting:[
                {
                  bg:Halloween_spalsh,
                  top:"20px",
                  left:"8px"
                }
              ],
              BgCap:null,
              BgSide:null,
              Bg_text:HalloweenText
            })
        }
      />

      
      <NftCardSmall
        displayName={ Order.OccationName === "Merry Christmas" ? "block" : "none" }
        CardName="Christmas"
        midimage={SantaPicture}
        barcolor={"red"}
        logo={Xmas_Logo}
        className="SmallCardxmas"
        ifchosen={ Order.OccationName === "Merry Christmas" ? {
          "transform":"scale(1.4)",
          "z-index":"333",
          "box-shadow":"0px 0px 12px 10px " + Order.themeColor,
          "background-color":Order.themeColor,
        } : {} }
        selected={
            () => setOrder({
              ...Order,
              themeColor:"red",
              OrderBgOptions:[
                "red"
              ],
              OccationImage:SantaPicture,
              OccationName:"Merry Christmas",
              CardLogo:Xmas_Logo,
              CardBgandSetting:[
                {
                  bg:Xmas_spalsh2,
                  top:"20px",
                  left:"8px"
                }
              ],
              BgSide:Xmas_Side,
              BgCap:null,
              Bg_text:XmasText
            })
        }
      />

      
      <NftCardSmall
        displayName={ Order.OccationName === "Happy Birthday" ? "block" : "none" }
        CardName="Birthday"
        midimage={BirthdayPicture}
        barcolor={"yellow"}
        logo={Birthday_Logo}
        className="SmallCardyellow"
        ifchosen={ Order.OccationName === "Happy Birthday" ? {
          "transform":"scale(1.4)",
          "z-index":"333",
          "box-shadow":"0px 0px 12px 10px " + Order.themeColor,
          "background-color":Order.themeColor,
        } : {} }
        selected={
            () => setOrder({
              ...Order,
              themeColor:"yellow",
              OrderBgOptions:[
                "yellow" , "#F30188" , "red", "green"
              ],
              OccationImage:BirthdayPicture,
              OccationName:"Happy Birthday",
              CardLogo:Birthday_Logo,
              CardBgandSetting:[
                {
                  bg:Birthday_spalsh,
                  top:"20px",
                  left:"8px"
                }
              ],
              BgCap:HatBox,
              BgSide:Yellow_Box,
              Bg_text:BirthDayText
            })
        }
      />

      
      <NftCardSmall
        displayName={ Order.OccationName === "Congratulations" ? "block" : "none" }
        CardName="Congratulations"
        midimage={Congratulations}
        barcolor={"purple"}
        className="SmallCardpurple"
        logo={Congratulations_Logo}
        ifchosen={ Order.OccationName === "Congratulations" ? {
          "transform":"scale(1.4)",
          "z-index":"333",
          "box-shadow":"0px 0px 12px 10px " + Order.themeColor,
          "background-color":Order.themeColor,
        } : {} }
        selected={
            () => setOrder({
              ...Order,
              themeColor:"purple",
              OrderBgOptions:[
                "yellow" , "#F30188" , "purple", "green"
              ],
              OccationImage:Congratulations,
              OccationName:"Congratulations",
              CardLogo:Congratulations_Logo,
              CardBgandSetting:[
                {
                  bg:Congratulations_splash,
                  top:"20px",
                  left:"8px"
                },
                {
                  bg:Congrats_left,
                  top:"31px",
                  left:"0px",
                  width:"70px",
                  height:"70px"
                },
                // {
                //   bg:Congrats_Right,
                //   bottom:"3px",
                //   right:"0px",
                //   width:"70px",
                //   height:"70px"
                // }
              ],
              BgCap:null,
              BgSide:null,
              Bg_text:CongratulationsText
            })
        }
      />
      
      {/* <NftCardSmall
        displayName={  }
        CardName=""
        midimage={}
      /> */}

      <NftCardSmall
        displayName={ Order.OccationName === "Easter" ? "block" : "none" }
        CardName="Easter"
        midimage={EasterPicture}
        barcolor={"#1964F6"}
        logo={Easter_Logo}
        ifchosen={ Order.OccationName === "Easter" ? {
          "transform":"scale(1.4)",
          "z-index":"333",
          "box-shadow":"0px 0px 12px 10px " + Order.themeColor,
          "background-color":Order.themeColor,
        } : {} }
        selected={
            () => setOrder({
              ...Order,
              themeColor:"#1964F6",
              OrderBgOptions:[
                "yellow" , "#F30188" , "#1964F6"
              ],
              OccationImage:EasterPicture,
              OccationName:"Easter",
              CardLogo:Easter_Logo,
              CardBgandSetting:[
                {
                  bg:Easter_spalsh,
                  top:"24px",
                  left:"8px",
                  width:"100px",
                  height:"100px"
                }
              ],
              BgSide:EasterLeft,
              BgCap:null,
              Bg_text:EasterText
            })
        }
        
        className="SmallCardblue"
      />

      </div>
















          <div style={{
            "display":"flex",
            "justifyContent":"space-evenly"
          }} >




            { Order.themeColor ? 
            
            <div className="App-Right" >

              <MainCard
                themecolor={ Order.themeColor ? Order.themeColor : "purple" }
                OnchangeImage={Pickingimage}
                logo={Order.CardLogo}
                userimage={

                    Order.OrderImage && Order.ImagePreview !== null ? 

                    <img className="PreviewCard-main-top-img-pic" src={Order.ImagePreview} alt="PreviewCard-main-top-img-pic"  />

                    : <FaUser style={{
                      "width":"100%",
                      "height":"100%",
                      "color":"white"}} />

                }
                recepient={Order.OrderRecepientName}
                recepientonChange={ (e) => setOrder({
                  ...Order,
                  OrderRecepientName:e.target.value
                }) }
                colorOptions={

                    Order.OrderBgOptions.length > 0 ? 
                    
                    Order.OrderBgOptions.map( (option) => {       
                      return <div className="MainCard-main-options-link" style={{"backgroundColor":option,"border": Order.themeColor === option ? "2px solid white" : "" }} onClick={
                        () => setOrder({
                          ...Order,
                          themeColor:option
                        })
                      } ></div>
                    } )
                    
                    : null

                }
                occationName={ Order.OccationName ? Order.OccationName : null }
                BtmOcation={
                  Order.OccationImage ? 
                  <img className="MainCard-gift-img" src={Order.OccationImage} alt="MainCard-gift" />
                  :  null
                }
                OrderPriceeth={Order.EthtoSpend}
                onChangeOrderPriceeth={ (e) => setOrder({
                  ...Order,
                  EthtoSpend: e.target.value
                }) }
                Totalprice={ Order.EthtoSpend * 20 }
              />

                <div className="App-Right-done" style={ Order.OrderRecepientName === '' || Order.ImagePreview === null ? {
                  "cursor" : "not-allowed",
                  "backgroundColor":"lightgrey"
                } : {} } onClick={ () => setOrder({
                  ...Order,
                  OpenPreview:  Order.OrderRecepientName === '' || Order.ImagePreview === null ? false : true
                }) } >
                    Done
                </div>


            </div>            
            
            : null }










                { Order.themeColor  ? 
                
                <PreviewCard

                logo={Order.CardLogo}
                themecolor={ Order.themeColor ? Order.themeColor : "purple" }
                OnchangeImage={Pickingimage}
                userimage={

                    Order.OrderImage && Order.ImagePreview !== null ? 

                    <img className="PreviewCard-main-top-img-pic" src={Order.ImagePreview} alt="" />

                    : <FaUser style={{
                      "width":"100%",
                      "height":"100%",
                      "color":"white"}} />

                }
                scale={"scale(.8)"}
                recepient={Order.OrderRecepientName}
                recepientonChange={ (e) => setOrder({
                  ...Order,
                  OrderRecepientName:e.target.value
                }) }
                BtmOcation={
                  Order.OccationImage ? 
                  Order.OccationImage
                  :  null
                }
                OrderPriceeth={Order.EthtoSpend}
                onChangeOrderPriceeth={ (e) => setOrder({
                  ...Order,
                  EthtoSpend: e.target.value
                }) }
                Totalprice={ Order.EthtoSpend * 20 }
                occationName={ Order.OccationName ? Order.OccationName : null }


                absolute={

                  <>
                  
                      {Order.CardBgandSetting.map( (bg) => {
                        return <img src={bg.bg} className="Bg-special-image" alt="powerful" style={{
                                    "top": bg.top ? bg.top : "",
                                    "left": bg.left ? bg.left : "",
                                    "right": bg.right ? bg.right : "",
                                    "height": bg.height ? bg.height : "",
                                    "width": bg.width ? bg.width : "",
                                    "bottom": bg.bottom ? bg.bottom : "",
                                }} />
                      } )}

                  </>

                }
                cap={Order.BgCap}
                leftpicture={Order.BgSide}
                TextImage={ Order.Bg_text }

              />                
              
                : null

              }



          </div>

















    
      <div className="App-top" style={{
        "display": Order.OpenPreview ? "flex" : "none"
      }} >
        
        <div className='App-top-center' >

        <div className='App-top-center-close' onClick={ () => setOrder({
          ...Order,
          OpenPreview:false
          }) } >
          <ImCross className='App-top-center-close-icon' />
        </div>














        <PreviewCard

          logo={Order.CardLogo}
          themecolor={ Order.themeColor ? Order.themeColor : "purple" }
          OnchangeImage={Pickingimage}
          userimage={

              Order.OrderImage && Order.ImagePreview !== null ? 

              <img className="PreviewCard-main-top-img-pic" src={Order.ImagePreview} alt="" />

              : <FaUser style={{
                "width":"100%",
                "height":"100%",
                "color":"white"}} />

          }
          recepient={Order.OrderRecepientName}
          recepientonChange={ (e) => setOrder({
            ...Order,
            OrderRecepientName:e.target.value
          }) }
          BtmOcation={
            Order.OccationImage ? 
            Order.OccationImage
            :  null
          }
          OrderPriceeth={Order.EthtoSpend}
          onChangeOrderPriceeth={ (e) => setOrder({
            ...Order,
            EthtoSpend: e.target.value
          }) }
          Totalprice={ Order.EthtoSpend * 20 }
          occationName={ Order.OccationName ? Order.OccationName : null }


          absolute={

            <>
            
                {Order.CardBgandSetting.map( (bg) => {
                  return <img src={bg.bg} className="Bg-special-image" alt="circum" style={{
                              "top": bg.top ? bg.top : "",
                              "left": bg.left ? bg.left : "",
                              "right": bg.right ? bg.right : "",
                              "height": bg.height ? bg.height : "",
                              "width": bg.width ? bg.width : "",
                              "bottom": bg.bottom ? bg.bottom : "",
                          }} />
                } )}

            </>

          }
          cap={Order.BgCap}
          leftpicture={Order.BgSide}
          TextImage={ Order.Bg_text }

        />



















          <div className='App-top-center-btm' >

            <div className='App-top-center-btm-txt' > Enter Number Of Gift cards to mint </div>

            <div className='App-top-center-btm-add' >

                <div className='App-top-center-btm-add-plus' onClick={ () => setOrder({
              ...Order,
              GiftCardAmount: parseInt(Order.GiftCardAmount)  + 1
            }) } >
                  <GoPlus className="App-top-center-btm-add-plus-icon" />
                </div>

                <div className='App-top-center-btm-add-digit' >
                  {Order.GiftCardAmount}
                </div>

                <div className='App-top-center-btm-add-plus' onClick={ () => setOrder({
                    ...Order,
                    GiftCardAmount: Order.GiftCardAmount > 1 ? parseInt(Order.GiftCardAmount)  - 1 : 1
                  }) } >
                  <AiOutlineMinus className="App-top-center-btm-add-plus-icon" />
                </div>

            </div>

            <button className='App-top-center-btn' >
              {Order.EthtoSpend} ETH
            </button>

            <div className='App-top-center-gas' >
              Excluding gas fee
            </div>

            <button className='App-top-center-final' >
                Mint
            </button>

          </div>

        </div>

      </div>
















    </div>
  );
}

export default App;







