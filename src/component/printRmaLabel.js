import React, { Component } from 'react';
import QRCode from "qrcode.react";

class PrintRmaLabel extends Component {
    render() {
        return (
            <div style={{ display: "flex" }}>
                <div style={{ paddingLeft: "15px" }}>
                    <h3>RMA ID: {this.props.RMAID}<br />
                        Serial # {this.props.SerialNumber} <br />
                        Prod-Unit: {this.props.ProdUnit}<br />
                        C.O.O: {this.props.Country}</h3>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                    <QRCode size={84} value={"rma" + this.props.RMAID} />
                </div>
            </div>



        );
    }
}

export default PrintRmaLabel;

//ref={el => (this.componentRef = el)}