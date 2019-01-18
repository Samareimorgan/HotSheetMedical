import React, {Component} from "react";
import Input from "../../components/Input/Input";



class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Email Address"
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Enter your Password"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        }
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.authform) {
            formElementsArray.push({
                id: key, 
                config: this.state.authform[key]
            });
        }
        const form = formElementsArray.map(formElement => (
            <div>
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler( event, formElement)} />
            
            {/* <button btnType={classes.Success}>SUBMIT</button> */}
            </div>
        ))
        return (
            <div>
                <form>
                    {form}
                </form>
            </div>
        );
    }
}

export default Auth;