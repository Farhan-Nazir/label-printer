import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import QRCode from "qrcode.react";

class PrintRmaLabel extends Component {
    render() {
        return (
            <Paper style={{ textAlign: "center", width: "600px", height: "500px", marginLeft: "5px" }}>
                <div style={{ marginTop: "20px" }}>
                    <h2>RMA Case Detail</h2>
                    <h3>RMA ID: {this.props.RMAID}</h3>
                    <h3>Serial # {this.props.SerialNumber} </h3>
                    <h3>Prod-Unit: {this.props.ProdUnit}</h3>
                    <h3>C.O.O: {this.props.Country}</h3>
                    <br />
                    <QRCode size={84} value={`rma${this.props.RMAID}`} />
                </div>
            </Paper>



        );
    }
}

export default PrintRmaLabel;

//ref={el => (this.componentRef = el)}