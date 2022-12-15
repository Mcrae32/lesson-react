import React from "react"
import TextField from "./TextField";

const LastNameField = ({ ...rest }) => (
    <TextField
        label="Last name"
        name="lastName"
        {...rest}
    />
);

export default LastNameField;