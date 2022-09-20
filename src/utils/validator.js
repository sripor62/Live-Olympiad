export const getErrorMsz = (type, value, value2) => {
    // console.log('type', type, value)
    if (type == "email") {
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-+]+@[a-zA-Z0-9.-]+\\.{1}[a-zA-Z]+$');
        return value == "" ? "Please enter email address" : (!validEmail.test(value) || (value.length > 40)) ? "Invalid email address" : ""
    }
    if (type == "password") {
        return value == "" ? "Please enter password"
            : ""
    }
    if (type == "conrfirm_password") {
        const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$");
        return value == "" ? "Please enter password"
            : value == value2 ? "New password should not be same as old password"
                : !validPassword.test(value) ? "Password must be of 8 characters and combination of numbers, alphabets & special characters"
                    : ""
    }
    if (type == "mobile" || type == "phone_number") {
        return value == "" ? "Please enter mobile number" : isNaN(value) ? "Mobile number must be in digits" : value.length != 10 ? "Mobile number must be 10 digit" : ""
    }
    if (type == "resetP") {
        return value == "" ? "Enter resetP" : ""
    }
}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}