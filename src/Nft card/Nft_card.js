import React  from "react";
import Eth from './ethereum.png';



const NftCard = (props) => {

    return <>

            <div className="container" style={{
                "background-image": "linear-gradient(150deg, rgba(255, 255, 255, 0.353) 0%, rgba(255, 255, 255, 0.267) 40%), url(" + props.bg + ")"
            }} >

            <div className="internal" >
                    
                    <div className="internal-top" >

                    </div>

                    <div className="internal-btm" >

                        <div className="internal-btm-top" >

                            <div className="internal-btm-top-img" >
                                {props.topimg}
                            </div>


                            <input type="text" placeholder="Recepient Name" className="internal-btm-top-input" value={props.recepient_name} onChange={ props.recepient_nameonChange } />

                        </div>

                        <div className="internal-choose" >
                    
                            <div className="internal-choose-top" >

                               {props.options}

                            </div>

                            <div className="internal-choose-btm" >
                                Birthday gift
                            </div>

                        </div> 

                        <div className="internal-eth" >

                            <div className="internal-eth-left" >
                                <img src={Eth} className="internal-eth-left-img" alt="img" />
                            </div>

                            <div className="internal-eth-right" >
                                <input className="internal-eth-right-input" placeholder="0" value={props.OrderPriceeth} onChange={ props.onChangeOrderPriceeth } />
                                <div className="internal-eth-right-sub" >eth </div>
                            </div>                        

                        </div>

                    </div>                   

                </div>
                

            </div>

    </>

}

export default NftCard;