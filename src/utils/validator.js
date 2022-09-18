export const getErrorMsz = (type, value, value2) => {
    // console.log('type', type, value)
    if (type == "email") {
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-+]+@[a-zA-Z0-9.-]+\\.{1}[a-zA-Z]+$');
        return value == "" ? "Please enter email address" : (!validEmail.test(value) || (value.length > 40)) ? "Invalid email address" : ""
    }
    // if (type == "password") {
    //     const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$");
    //     return value == "" ? "Enter Password" : !validPassword.test(value) ? "Password must be of 8 characters and combination of numbers, alphabets & special characters" : ""
    // }

    if (type == "password") {
        const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$");
        return value == "" ? "Please enter password"
            : value == value2 ? "New password should not be same as old password"
                : !validPassword.test(value) ? "Password must be of 8 characters and combination of numbers, alphabets & special characters"
                    : ""
    }

    if (type == "old_password") {
        const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$");
        return value == "" ? "Please enter old password" : !validPassword.test(value) ? "Password must be of 8 characters and combination of numbers, alphabets & special characters" : ""
    }

    if (type == "password_confirmation") {
        const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$");
        return value == "" ? "Please enter confirm password"
            : value != value2 ? " New password and confirm password is not same "
                : !validPassword.test(value) ? "Password must be of 8 characters and combination of numbers, alphabets & special characters"
                    : ""
    }

    if (type == "mobile" || type == "phone_number") {
        // return value == "" ? "Enter Phone Number" : isNaN(value) ? "Phone number must be in digits" : value.length != 10 ? "Phone number must be 10 digit" : ""
        return value == "" ? "Please enter mobile number" : isNaN(value) ? "Mobile number must be in digits" : value.length != 10 ? "Mobile number must be 10 digit" : ""
    }
    if (type == "phone_number_with_flag") {
        // return value == "" ? "Enter Phone Number" : isNaN(value) ? "Phone number must be in digits" : value.length != 10 ? "Phone number must be 10 digit" : ""
        return value == "" || value== null ? "Please enter mobile number" : isNaN(value) ? "Mobile number must be in digits" : value.length != 13 ? "Mobile number must be 10 digit" : ""
    }
    if (type == "resetP") {
        return value == "" ? "Enter resetP" : ""
    }

    if (type == "objective") {
        return value == "" ? "  Please enter objective" : ""
    }
    if (type == "round") {
        return value == "" ? "Please enter round name" : ""
    }

    if (type == "job_description") {
        return value == "" ? "Please enter job description" : ""
    }

    if (type == "educational_qualification") {
        return value == "" ? "Please enter educational qualification" : ""
    }

    if (type == "mandatory_skill") {
        return value == "" ? "Please enter mandatory skills " : ""
    }

    if (type == "optional_skill") {
        return value == "" ? "Please enter optional skills " : ""
    }

    if (type == "min_age") {

        return value == "" ? " Please enter minimum age" : value < 18 ? "age should be more than 18" : ""
    }

    if (type == "max_age") {
        return value == "" ? " Please enter maximum age" : value < 18 ? "age should not be more than 60" : ""
    }

    if (type == "current_employer") {
        return value == "" ? "Please enter current employer" : ""
    }

    if (type == "current_location") {
        return value == "" ? " Please enter current location" : ""
    }
    if (type == "city") {
        return value == "" ? " Please enter city" : ""
    }
    if (type == "country") {
        return value == "" ? " Please enter country" : ""
    }
    if (type == "ctc") {
        const validctc = new RegExp('^[0-9]{1,10}$');
        return value == "" ? `Please enter CTC` : !validctc.test(value) ? "Please enter valid amount" : ""
    }

    if (type == "current_ctc") {
        const validctc = new RegExp('^[0-9]{1,10}$');
        return value == "" ? `Please enter current CTC` : !validctc.test(value) ? "Please enter valid amount" : ""
    }

    if (type == "expected_ctc") {
        const validctc = new RegExp('^[0-9]{1,10}$');
        return value == "" ? `Please enter expected CTC` : !validctc.test(value) ? "Please enter valid amount" : ""
    }

    if (type == "organization") {
        const validName = new RegExp('^(([A-Za-z0-9&.]+) ?)+$');
        return value == "" || value == null ? "Please enter organisation name" : !validName.test(value) || (value?.trim().length == 0) ? "Please enter a valid organisation name" : ""

        // return value == "" ? "Enter Organization" : (value.length > 40) ? "Organization Name Should Have Maximum 40 Characters" : ""
    }
    if (type == "username") {
        return value == "" ? "Please enter email or username" : ""
    }


    if (type == "gender_id") {
        return value == "" ? "Please select gender" : ""
    }

    if (type == "remarks") {
        return value == "" ? "Please enter remarks" : ""
    }

    if (type == "notice_period") {
        return value == "" ? "Please enter notice period" : ""
    }

    if (type == "total_experience_year") {
        return value == "" ? "Please select years" : ""
    }

    if (type == "total_experience_month") {
        return value == "" ? " Please select months" : ""
    }

    if (type == "relevant_experience_year") {
        return value == "" ? "Please select years" : ""
    }

    if (type == "relevant_experience_month") {
        return value == "" ? "Please select months" : ""
    }
    if (type == "qualification") {
        return value == "" || value == null ? "Please enter qualification" : ""
    }
    if (type == "house_no") {
        return value == "" || value == null ? "Please enter house or building no." : ""
    }
    if (type == "pincode") {
        return value == "" || value == null ? "Please enter pincode" : (value?.length < 6) ? "Pincode must be 6 digits" : ""
    }

    if (type == "reason_for_change") {
        return value == "" ? "Please enter reason for change" : ""
    }

    if (type == "confirm") {
        const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
        return value == "" ? "Please enter confirm password"
            : value != value2 ? "Confirm password should be same as new password"
                : !validPassword.test(value) ? "Password must be of 8 characters and combination of numbers, alphabets & special characters password"
                    : ""
    }

    if (type == "Department") {
        return value == "" ? "Please select department" : value == "default0" ? " Please select department" : ""
    }
    if (type == "dropround") {
        return value == "" ? " Please select round name" : value == "default0" ? " Please select round name" : ""
    }

    if (type == "Role") {
        return value == "" ? "Please select role" : value == "default0" ? " Please select role" : ""
    }

    if (type == "workingHrValue") {
        return value == "" ? "Enter workingHrValue" : value == "default0" ? "Enter workingHrValue" : ""
    }

    if (type == "Approver") {
        return value == "" ? "Please select approver" : value == "default0" ? "Please select approver" : ""
    }

    if (type == "depId") {
        return value == "" ? "Enter depId" : value == "default0" ? "Enter depId" : ""
    }

    if (type == "gender") {
        return value == "" ? `Please select gender` : value == "default0" ? `Please select gender` : ""
    }
    if (type == "department") {
       // return value == "" || value == null ? "Please select department" : value == "default0" ? "Please select department" : ""
       return (value == "" || Object.keys(value).length === 0) ? "Please select department" : value == "default0" ? "Please select department" : ""
   
    }
    if (type == "marital_status") {
        return value == "" ? "Please select marital status" : value == "default0" ? "Please select marital status" : ""
    }

    if (type == "role") {
       
        return (value == "" || Object.keys(value).length === 0) ? "Please select role" : value == "default0" ? "Please select role" : ""
    }
    if (type == "reporting") {
        return (value == "" || Object.keys(value).length === 0) ? "Please select reporting person" : value == "default0" ? "Please select reporting person" : ""
    }
    if (type == "status") {
        return value == "" ? "Please select status" : value == "default0" ? "Please select status" : ""
    }
    if (type == "interviewer") {
       // return value == "" ? `Please select interviewer` : value == "default0" ? `Please select interviewer` : ""
       return (value == "" || Object.keys(value).length === 0) ? "Please select interviewer" : value == "default0" ? "Please select interviewer" : ""
   
    }
    if (type == "approver") {
        return value == "" ? `Please select approver` : value == "default0" ? `Please select approver` : ""
    }

    // if (type == "current employer" || type == "reason" || type == "current location") {
    //     return value == "" ? `Enter ${type}` : ""
    // }
    if (type == "value") {
        return value == "" ? "Please select an option" : ""
    }

    if (type == "exp") {
        // return value == "" ? "Please Select Experience" : ""
        return ""
    }

    // if (type == "gender") {
    //     return value == "" ? "Select gender" : value == "default0" ? "Select gender" : ""
    // }
    // if (type == "department") {
    //     return value == "" ? "Select Department" : value == "default0" ? "Select Department" : ""
    // }
    // if (type == "role") {
    //     return value == "" ? "Select Role" : value == "default0" ? "Select Role" : ""
    // }
    // if (type == "reporting") {
    //     return value == "" ? "Select Reporting Person" : value == "default0" ? "Select Reporting Person" : ""
    // }
    if (type == "confirmResetP") {
        return value == "" ? "Enter confirmResetP" : value != value2 ? "resetP and confirmResetP password is not same " : ""
    }
    if (type == "otp") {
        return value == "" ? "Enter Otp" : value.length != 4 ? "Enter empty Otp" : value != value2 ? "Otp is not valid" : ""
    }
    if (type == "full_name") {
        const validName = new RegExp('^(([A-Za-z\.]+) ?)+$');
        return value == "" || value == null ? "Please enter name" : !validName.test(value) || (value?.trim().length == 0) ? "Please enter valid name" : ""
    }

    if (type == "link") {
        const validName = new RegExp('^https?://[a-zA-Z0-9._:=\\?\\$!%-\\+\\-]+\\.[a-zA-Z0-9._:=\\?\\$!%\\-\\+/\\.]+$');
        return value == "" || value == null ? "Please enter a meeting link" : !validName.test(value) ? "Please enter a valid URL" : ""
    }

    if (type == "date_of_joining") {
        return value == "" || value == null ?
            "Please enter date of joining" :
            value == "Invalid Date" ? "Invalid date format" :
                value.getFullYear() < 1950 ? "Date should not be before 1950" :
                    value > new Date() ? "Date should not be after current date" : ""
    }
    if (type == "new_doj") {
        return value == "" || value == null ?
            "Please enter date of joining" :
            value == "Invalid Date" ? "Invalid date format" :
                value < new Date() ? "Date should not be before current date" :
                    (value.getFullYear()-2) > new Date().getFullYear() ? 'Date should be within next 2 years' : ""
    }
    if (type == "start_date") {
        return value == "" || value == null ?
            "Please select start date" :
            value == "Invalid Date" ? "Invalid date format" :
                value.getDate() < new Date().getDate() || value.getMonth() < new Date().getMonth() ? "Date should not be before current date" :
                    (value.getFullYear()-1) > new Date().getFullYear() ? "Date should not be after maximum date" : ""
    }
    if (type == "end_date") {
        return value == "" || value == null ?
            "Please select end date" :
            value == "Invalid Date" ? "Invalid date format" :
            (value.getDate() < value2.getDate() && value.getMonth() == value2.getMonth() ) || value.getMonth() < value2.getMonth() ? "Date should not be before start date" :
                    (value.getFullYear()-1) > value2.getFullYear() ? "Date should not be after maximum date" : ""
    }
    if (type == "interviewDate") {
        return value == "" || value == null ?
            "Please enter date" :
            value == "Invalid Date" ? "Invalid date format" :
                value < new Date() ? "Date should not be before current date" :
                    (value.getFullYear()-1) > new Date().getFullYear() ? "Date should not be after maximum date" : ""
    }
    if (type == "date_of_birth") {
        return value == "" || value == null ?
            "Please enter date of birth" :
            value == "Invalid Date" ? "Invalid date format" :
                value.getFullYear() < 1950 ? "Date should not be before minimum date" :
                new Date(`${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`) > new Date() ? `Date should not be after ${new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()}-${new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}-${new Date().getFullYear()}` : 
                value2.getFullYear() - value.getFullYear() < 18 ? "Should be atleast 18 years" : ""
    }
    if (type == "remarks") {
        return value == "" || value == null ? "Please enter remarks" : ""
    }
    if (type == "round") {
        return value == "" || value == null ? "Please enter the round name" : ""
    }

    // if (type == "department") {
    //     return value == "" ? "Please select a department" : ""
    // }

    if (type == "decline") {
        return value == "" || value == null ? "Please enter decline reason" : ""
    }

    if (type == "father_name") {
        return value == "" || value == null ? "Please enter father's name" : ""
    }

    // if (type == "ctc") {
    //     return value == "" ? "Enter CTC" : ""
    // }

    if (type == "address_line1") {
        return value == "" || value == null ? "Please enter address" : ""
    }

    if (type == "phone" || type == "phone_number") {
        return value == "" ? " Please enter phone no." : isNaN(value) ? "Phone number is in digits" : value.length != 10 ? "Phone number is of 10 digits" : ""
    }

    if (type == "department_name") {
        const validName = new RegExp('^(([A-Za-z0-9&.]+) ?)+$');
        return value == "" || value == null ? "Please enter department" : (!validName.test(value) || (value.trim().length === 0) || (value[0] == " ")) ? "Please enter valid department name" : ""
    }
    if (type == "leave_type") {
        return value == "" ? "Please enter leave type" : ""
    }
    if (type == "file") {
        return value == "" ? "Please select a file to upload" : ""
    }
    if (type == "leave_days") {

        return value == "" ? `Please enter no. of days` : (value > 365 || value < 1) ? "Please enter valid number" : ""
    }

    if (type == "role_name") {
        const validName = new RegExp('^([A-Z]?[a-z ]*){1,}$');
        return value == "" || value == null ? " Please enter role" : (!validName.test(value) || (value.trim().length === 0) || (value[0] == " ")) ? "Please enter valid role" : ""
    }

    if (type == 'holiday_name') {
        const validName = new RegExp('^([A-Z]?[a-z ]*){1,}$');
        return value == "" || value == null ? "Please enter holiday name" : (!validName.test(value) || (value.trim().length === 0) || (value[0] == " ")) ? "Please enter valid holiday name" : ""
    }

    if (type == "holday_date") {
        return value == "" || value == null ?
            "Please enter holiday date" :
            value == "Invalid Date" ? "Invalid date format" : ""  
    }

    if (type == "document_category_header") {
        return value == "" ? " Please enter document category" : (value.trim().length === 0) || (value[0] == " ") ? "Please enter valid document category" : ""
    }
    if (type == "document_type") {
        return value == "" ? " Please enter document type" : (value.trim().length === 0) || (value[0] == " ") ? "Please enter valid document type" : ""
    }
    if (type == "shift_name") {
        return value == "" || value == null ? "Please enter shift name" : ""
    }

    if (type == "shift_timing_from") {
        return value == "" || value == null ?
        "Please enter shift start time" :
        value == "Invalid Date" ? "Invalid time format" : ""  
        
    }

    if (type == "shift_timing_to") {
        return value == "" || value == null ?
        "Please enter shift end time" :
        value == "Invalid Date" ? "Invalid time format" : ""  
    }

    if (type == "name") {
        return value == "" ? "Please enter name" : ""
    }

    if (type == "employee_leave_id") {
        return value == "" ? "Enter decline Reason" : ""
    }

    if (type == "start_date") {
        return value == "" ? " Please enter leave start date" : ""
    }

    if (type == "end_date") {
        return value == "" ? " Please enter leave end date" : ""
    }

    if (type == "reason") {
        return value == "" ? " Please enter reason" : ""
    }
    if (type == "leaveapproveobject") {
        return value == "" ? " Please enter leave approve" : ""
    }

    if (type == "leaveObject") {
        return value == "" ? " Please enter leave type" : ""
    }

    if (type == "departmentobject") {
        return value == "" ? " Please select department" : ""
    }

    if (type == "ApproverObject") {
        return value == "" ? " Please select approver name" : ""
    }
    if (type == "interviewObject") {
        return value == "" ? " Please select interviewer name" : ""
    }

    if (type == "affirmation_from") {
        return value == "" || value == null ? " Please select Time" : ""
    }

    if (type == "affirmation_to") {
        return value == "" || value == null ? " Please select to" : 
        ( (value.getHours() <= value2.getHours()) ? (value.getMinutes() < value2.getMinutes()) : (value.getMinutes() > value2.getMinutes()) ) ? "Can't select time before from" : ""
    }

    if (type == "frequency") {
        return value == "" ? " Please select frequently" : ""
    }

    if (type == "repeat_days") {
        return value == "" ? " Please select a day" : ""
    }
    if (type == "designation_name") {
        const validName = new RegExp('^([A-Z]?[a-z ]*){1,}$');
        return value == "" || value == null ? " Please enter Designation" : (!validName.test(value) || (value.trim().length === 0) || (value[0] == " ")) ? "Please enter valid Designation" : ""
    }

}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}