import React from "react";
import Greetings from "../Greetings/Greetings";
import style from "./style"
import TextField from "./TextField"

class SimpleForm extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
    };

    validateName = name => {
        const regex = /[A-Za-z]{3,}/;

        return !regex.test(name)
            ? "The name must contain at least three letters. Numbers and special characters are not allowed."
            : "";
    }

    onFirstNameBlur = () => {
        const { firstName } = this.state;

        const firstNameError = this.validateName(firstName);

        return this.setState({ firstNameError });
    };

    onFirstNameChange = event =>
        this.setState({
            firstName: event.target.value
        });


    onLastNameBlur = () => {
        const { lastName } = this.state;

        const lastNameError = this.validateName(lastName);

        return this.setState({ lastNameError });
    };

    onLastNameChange = event =>
        this.setState({
            lastName: event.target.value
        });

    render() {
        const { firstNameError, firstName, lastNameError, lastName } = this.state;

        return (
            <div style={style.form} >
                <TextField
                    label="First name"
                    name="firstName"
                    onChange={this.onFirstNameChange}
                    onBlur={this.onFirstNameBlur}
                    error={firstNameError} />

                <TextField
                    label="Last name:"
                    name="lastName"
                    onChange={this.onLastNameChange}
                    onBlur={this.onLastNameBlur}
                    error={lastNameError} />

                <Greetings firstName={firstName} lastName={lastName} />
            </div>
        );
    }
}

export default SimpleForm;