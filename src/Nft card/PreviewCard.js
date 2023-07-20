import React  from "react";
import Eth from './ethereum.png';
// import BirthBox from '../img/yellow_small2.png';

import { FaBarcode } from "react-icons/fa";
// import { GiFeather } from 'react-icons/gi'; xmas_bg



const PreviewCard = (props) => {

    return <div className="PreviewCard" style={{
        "transform":props.scale,
        // "backgroundColor":"white"
    }} >

{/* <img src={Birthday_spalsh} className="Bg-special-image" /> */}
{/* <img src={Xmas_spalsh2} className="Bg-special-image " style={{
    "top":"20px",
    "left":"8px"
}} /> */}

            { props.absolute }



            <div className="PreviewCard-logo" >
                <img src={props.logo} className="PreviewCard-logo-img" alt="PreviewCard-logo" />
            </div>

            <div className="PreviewCard-main" style={{
                // "border":"1px solid " + props.themecolor + ""
            }} >

                <div className="PreviewCard-main-top" style={{
                    "backgroundColor":props.themecolor
                }} >

                    <div className="PreviewCard-main-top-img" >
                        {props.userimage}
                    </div>

                    <div className="PreviewCard-gift3" >
                        { props.cap ?
                        <img className="PreviewCard-gift3-img" src={props.cap} alt="" />:
                        null }
                    </div> 

                    <div className="preview-name" style={{
                          "text-shadow": "-1px 1px 0 #000, 1px 1px 0 #000,  1px -1px 0 #000,  -1px -1px 0 #000"
                    }} >
                        {props.recepient}
                    </div>

                    <div className="Preview-price-div" >
                        <div className="Preview-price-div-top" >$</div>
                        <div className="Preview-price-div-bottom" >{props.Totalprice}</div> 
                    </div>

                </div>

                <div className="PreviewCard-main-options" >
                    
                    {props.colorOptions}
                    
                </div>

                {/* <div className="PreviewCard-main-occation" >
                    {props.occationName}
                </div> */}


                <img src={props.TextImage} alt="" className="bg-text" />

                
                <div className="PreviewCard-main-eth" style={{
                    "backgroundColor":props.themecolor

                }} >

                    <div className="PreviewCard-main-eth-left" >
                        <img src={Eth} className="PreviewCard-main-eth-left-img" alt="img" />
                    </div>

                    <div className="PreviewCard-main-eth-right" style={{
                        "backgroundColor":props.themecolor
                    }} >
                        <div className="PreviewCard-main-eth-right-input">{props.OrderPriceeth}</div>
                        <div className="PreviewCard-main-eth-right-sub" >eth </div>
                    </div>                        

                </div>


            </div>

            {/* <div className="PreviewCard-gift" >
                {props.BtmOcation}
            </div> */}

            <img className="PreviewCard-gift4-img" src={props.BtmOcation} alt="" />
        
            { props.leftpicture ?
            <img className="PreviewCard-gift2-img" src={props.leftpicture} alt="" />: null }

            <div className="PreviewCard-code" >

                <FaBarcode className="PreviewCard-code-bar" style={{"color":props.themecolor}} />
                <FaBarcode className="PreviewCard-code-bar" style={{"color":props.themecolor}} />
                <FaBarcode className="PreviewCard-code-bar" style={{"color":props.themecolor}} />
                
            </div>

    </div>

}

export default PreviewCard;


// purple_bar-code