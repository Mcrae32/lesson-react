import React from "react"
import TextField from "./TextField";

const FirstNameField = ({ ...rest }) => (
    <TextField
        label="First name"
        name="firstName"
        {...rest}
    />
);

export default FirstNameField;