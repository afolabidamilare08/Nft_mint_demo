import React from "react";
import Eth from './ethereum.png';
import { FaBarcode } from 'react-icons/fa';



const NftCardSmall = (props) => {


    return <>

        <div className={"SmallCard " + props.className } onClick={props.selected} style={props.ifchosen} >


            <div className="SmallCard-logo" >
                <img src={props.logo} className="SmallCard-logo-img" alt="SmallCard-logo" />
            </div>

            <div className="SmallCard-box" style={{
                "border":"2px solid "+ props.barcolor +""
            }} >
                <img className="SmallCard-box-img" src={props.midimage} alt="SmallCard-box"  />
            </div>

            <div className="SmallCard-box-eth" style={{
                backgroundColor:props.barcolor
            }} >
                <img className="SmallCard-box-eth-img" src={Eth} alt="SmallCard-box-eth" />
            </div>

            <div className="SmallCard-code" >

                <FaBarcode
                    className="SmallCard-code-ic"
                    color={props.barcolor}
                />
                                <FaBarcode
                    className="SmallCard-code-ic"
                    color={props.barcolor}
                />
                                <FaBarcode
                    className="SmallCard-code-ic"
                    color={props.barcolor}
                />
                                <FaBarcode
                    className="SmallCard-code-ic"
                    color={props.barcolor}
                />
                                                <FaBarcode
                    className="SmallCard-code-ic"
                    color={props.barcolor}
                />

            </div>

            <div className="SmallCard-label" style={{
                // "display" :props.displayName
            }} >
                {props.CardName} 
            </div>

        </div>

    </>

}

export default NftCardSmall;