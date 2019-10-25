import React, { Component } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import PrintRmaLabel from './printRmaLabel';
import ReactToPrint from "react-to-print";
class RmaForm extends Component {

    state = {
        scanUnit: "",
        rmaID: "",
        isTrue: true,
        unitData: []
    }

    handleOnChange = (e) => {
        let unit = e.target.value;
        this.setState({ scanUnit: unit });
        let res = unit.split(',');
        this.setState({ unitData: [...res] })
    }

    
    handleOnChangeRmaID = e => {
        this.setState({ rmaID: e.target.value })
        this.state.rmaID.length > 0 ? this.setState({ isTrue: false}) : this.setState({ isTrue: true})
    }

    handleOnReset = () => this.setState({ scanUnit: "", unitData: ["", "", "", "", ""], rmaID: "", isTrue: true })
    render() {
        const { unitData } = this.state;
        return (
            <div style={{ textAlign: "center", marginTop: "15px", marginLeft: "50px", display: "flex" }}>
                <Paper style={{ width: "600px" }}>
                    <Typography variant="h3" component="h3">
                        RMA Label Print Tool.
        </Typography>
                    <Typography variant="subtitle1" component="h5">
                        Please scan a unit to print the label.
        </Typography>
                    <TextField
                        id="outlined-email-input"
                        required
                        label="Scan a unit"
                        type="text"
                        name="scanUnit"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleOnChange}
                        value={this.state.scanUnit}
                        autoFocus={true}
                        fullWidth
                    /><br />
                    <Button variant="contained" color="secondary" onClick={this.handleOnReset}>
                        Reset
      </Button>
                </Paper>
                <Paper style={{ width: "400px", height: "500px", marginLeft: "5px" }}>
                    <TextField
                        required
                        id="outlined-email-input"
                        label="Serial Number"
                        type="text"
                        name="serial"
                        autoComplete="serial-number"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleOnChange}
                        value={unitData[0]}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                    < br />
                    <TextField
                        id="outlined-email-input"
                        label="RMA ID"
                        type="text"
                        name="rma-id"
                        autoComplete="rma-id"
                        margin="normal"
                        variant="outlined"
                        value={this.state.rmaID}
                        onChange={this.handleOnChangeRmaID}
                        required
                    />
                    < br />
                    <TextField
                        required
                        id="outlined-email-input"
                        label="Prod Unit"
                        type="text"
                        name="prod-unit"
                        autoComplete="prod-unit"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={unitData[1]}
                    />
                    < br />
                    <TextField
                        id="outlined-email-input"
                        label="C.O.O"
                        type="text"
                        name="country"
                        autoComplete="country"
                        margin="normal"
                        variant="outlined"
                        value={unitData[4]}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                    <br />
                    <ReactToPrint
                        copyStyles={false}
                        trigger={() => <Button variant="contained" disabled={this.state.isTrue} color="primary">
                        Print
            </Button>}
                        content={() => this.componentRef}
                    />

                </Paper>

                <PrintRmaLabel ref={el => (this.componentRef = el)} RMAID={this.state.rmaID} SerialNumber={unitData[0]} ProdUnit={unitData[1]} Country={unitData[4]} />


            </div >
        );
    }
}

export default RmaForm;