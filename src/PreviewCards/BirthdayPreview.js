import React  from "react";
import Eth from './ethereum.png';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaBarcode } from "react-icons/fa";
import BirthdayImage from "../img/birthday_spalsh.png";
import "./BirthdayPreview.css";
// import { GiFeather } from 'react-icons/gi';



const BirthDayReviewCard = (props) => {

    return <div className="MainCard" >


            <div className="MainCard-logo" >
                <img src={props.logo} className="MainCard-logo-img" alt="MainCard-logo" />
            </div>

            <div className="MainCard-main" style={{
                "border":"1px solid " + props.themecolor + ""
            }} >

                <div className="MainCard-main-top" style={{
                    "backgroundColor":props.themecolor
                }} >

                    <div className="MainCard-main-top-img" >
                        {props.userimage}
                    </div>

                    <input className="MainCard-main-top-input" value={props.recepient} onChange={props.recepientonChange} placeholder="Enter Recepient" />
                    
                    <label for="img-img" className="MainCard-main-add" >
                        <AiOutlinePlus
                            className="MainCard-main-add-icon"
                        />
                    </label>

                    <input id="img-img" type="file" className="image-file" onChange={props.OnchangeImage} />

                    <div className="price-div" >
                        $
                        <br/>
                        <b>{props.Totalprice}</b>
                    </div>

                </div>

                <div className="MainCard-main-options" >
                    
                    {props.colorOptions}
                    
                </div>

                <div className="MainCard-main-occation" >
                    {props.occationName}
                </div>


                
                <div className="MainCard-main-eth" style={{
                    "backgroundColor":props.themecolor

                }} >

                    <div className="MainCard-main-eth-left" >
                        <img src={Eth} className="MainCard-main-eth-left-img" alt="img" />
                    </div>

                    <div className="MainCard-main-eth-right" >
                        <input className="MainCard-main-eth-right-input" placeholder="0" value={props.OrderPriceeth} onChange={ props.onChangeOrderPriceeth } />
                        <div className="MainCard-main-eth-right-sub" >eth </div>
                    </div>                        

                </div>


            </div>

            <div className="Birthday-gift" >
                {props.BtmOcation}
            </div>

            <div className="MainCard-code" >
                
                {/* <img src={Barcode} className="MainCard-code-img" alt="MainCard-code-img" />
                <img src={Barcode} className="MainCard-code-img" alt="MainCard-code-img" />
                <img src={Barcode} className="MainCard-code-img" alt="MainCard-code-img" /> */}

                <FaBarcode className="MainCard-code-bar" style={{"color":props.themecolor}} />
                <FaBarcode className="MainCard-code-bar" style={{"color":props.themecolor}} />
                <FaBarcode className="MainCard-code-bar" style={{"color":props.themecolor}} />
                {/* <FaBarcode className="MainCard-code-bar" /> */}
                {/* <FaBarcode className="MainCard-code-bar" /> */}
                
            </div>

    </div>

}

export default BirthDayReviewCard;


// purple_bar-code