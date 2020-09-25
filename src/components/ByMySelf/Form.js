import React from "react";
import {
    Grid,
    Row,
    Col,
    DropdownButton,
    MenuItem,
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";
export const CustomFormGroup = (argument) => {
    let inputElement = null;
    switch (argument.type) {
        case ('input'):
            return (
                <Col xs={argument.xsNumber}>
                    <FormGroup>
                        <label>
                            {argument.labelText}
                        </label>
                        <FormControl
                            required
                            placeholder={argument.placeholderText}
                            defaultValue={argument.defaultValue}
                            onChange={argument.change}
                        >

                        </FormControl>
                    </FormGroup>
                </Col>
            )
            break;
        case ('select'):
            return (<Col xs={argument.xsNumber}>
                <FormGroup>
                    {/* <DropdownButton title="Genders" id="GendersInput"
                    onSelect={argument.select} >
                        <MenuItem eventKey={1 + 'Male'}>Male</MenuItem>
                        <MenuItem eventKey={2 + 'Female'}>Female</MenuItem>
                    </DropdownButton> */}
                    <label>
                        {argument.labelText}
                    </label>
                    <FormControl componentClass="select" placeholder="select">
                        {/* {
                            argument.options.map((opt) => {
                              return  <option value={opt}>{opt}</option>
                            })
                        } */}
                    </FormControl>
                </FormGroup>
            </Col>);
            break;
        case 'password':
            return (
                <Col xs={argument.xsNumber}>
                    <FormGroup>
                        <label>
                            {argument.labelText}
                        </label>
                        <FormControl
                            type={'password'}
                            required
                            placeholder={argument.placeholderText}
                            defaultValue={argument.defaultValue}
                            onChange={argument.change}
                        >

                        </FormControl>
                    </FormGroup>
                </Col>
            )
            break;

    }
}