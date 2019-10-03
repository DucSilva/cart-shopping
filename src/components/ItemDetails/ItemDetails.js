import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div>
                <Button
                    className="item-details-button btn-warning"
                    bsStyle="link"
                    aria-controls="example-collapse-text"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? ` See ` : ` Hide `} item details
                {this.state.open === false ? ` + ` : ` - `}
                </Button>
                <Collapse in={this.state.open}>
                    <Row id="example-collapse-text" style={{backgroundColor: '#8080801c'}}>
                        <Col md={4} style={{margin: "auto"}}>
                            <img
                                width={100}
                                height={100}
                                alt="thumbnail"
                                src="./images/walmart.jpeg"
                            />
                        </Col>
                        <Col md={8}>
                            <p style={{textAlign: 'justify', fontSize: 14}}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                            </p>
                        </Col>
                    </Row>
                </Collapse>
            </div>
        )
    }
}