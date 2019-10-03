import React, { Component } from 'react';
import { Button, Collapse, Form, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import {connect} from 'react-redux';
import {handleChange} from '../../actions/promoCodeActions';

class PromoCodeDiscount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    handleChange = e => {
        this.props.handleChange(e);
    };

    render() {
        return (
            <div>
                <Button
                    className="promo-code-button btn-secondary"
                    bsStyle="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? `Apply ` : `Hide `}
                    promo code
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <Row className="show-grid">
                        <Col md={12}>
                            <Form>
                                <FormGroup controlId="formInLineNumber">
                                    <FormLabel>Promo Code</FormLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter your promo code"
                                        value={this.props.promoCode}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <Button
                                    block
                                    bsStyle="success"
                                    className="btn-round"
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                >
                                    Apply
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Collapse>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange}) (PromoCodeDiscount);