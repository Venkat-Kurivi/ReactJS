import React from 'react'
import { Form, Button } from 'react-bootstrap';
import reactDom from 'react-dom';
import { connect } from "react-redux";
import{ url} from './Constants/constants';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    submit() {

        let BodyData = this.state;

        fetch("https://localhost:44332/Home/Login", {
            method: 'POST',

            headers: { "Content-type": "application/json; charset=UTF-8" },

            body: JSON.stringify(BodyData)

        }).then((result) => {
            result.json().then((res) => {

                console.log('res', res)
                console.log("Email details: ",document.getElementById("email").value);
                this.props.INSERT();
                this.props.history.push("/dashboard");

            })

        })
    }

    onTextChanged = (event) => {

        const target = event.target;

        var value = target.value;

        const name = target.name;

        this.setState({

            [name]: value

        });

    }


    render() {
        return (
            <div className="container align-content-center col-6">
                <div style={{
                    border: "1px solid #e9ecef", padding: "10px", backgroundColor: "#e9ecef",
                    borderRadius: "10px", margin: "10%"
                }}>
                    <h3 style={{ border: "1px solid #e9ecef", borderRadius: "10px" }}>DMS </h3>
                    <Form>
                        <Form.Group className="mt-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" id="email" name="email" placeholder="Enter email"

                                onChange={this.onTextChanged} />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required placeholder="Password" name="password"

                                onChange={this.onTextChanged} />
                        </Form.Group>
                        <Button className="mt-3"
                            onClick={() => this.submit()}
                            style={{ width: "30%" }} variant="primary" type="button">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>)

    }
}

const mapDispatchToProps = dispatch => {
    return {
        INSERT: () => dispatch({
            type: "INSERT",
            email:  document.getElementById("email").value,
        })
    }
};

const mapStateToProps = state => {
    return {      
      Email : state.email      
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);