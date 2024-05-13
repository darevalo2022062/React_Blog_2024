import { useState } from "react";
import { Input } from "./Input";
import {
    emailValidationMessage,
    PasswordValidationMessage,
    passwordConfirmationMessage,
    validateConfirPassword,
    validateUsernameMessage,
    validateEmail,
    validatePassword,
    validateUsername,

} from "../shared/validators";
import { useRegister } from "../shared/hooks";
import { Logo } from "./Logo";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister();

    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
        passwordConfir: {
            value: "",
            isValid: false,
            showError: false,
        },
        username: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const navigate = useNavigate();

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "email":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            case "passwordConfir":
                isValid = validateConfirPassword(formState.password.value, value);
                console.log(isValid)
                console.log(formState.password.value + " " + value)
                break;
            case "username":
                isValid = validateUsername(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleRegister = (event) => {
        event.preventDefault();
        register(formState.email.value, formState.password.value, formState.username.value);
        window.location.reload();
        
    };

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid || !formState.passwordConfir.isValid || !formState.username.isValid;

    return (
        <>
            <div className="background-image"></div>
            <div className="form-container">
                <Logo text={""} />
                <form >
                    <div className="input-field">
                        <Input
                            field="email"
                            label="Email"
                            value={formState.email.value}
                            onChangeHandler={handleInputValueChange}
                            type="text"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.email.showError}
                            validationMessage={emailValidationMessage}
                        />
                    </div>
                    <div className="input-field">
                        <Input
                            field="username"
                            label="Username"
                            value={formState.username.value}
                            onChangeHandler={handleInputValueChange}
                            type="text"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.username.showError}
                            validationMessage={validateUsernameMessage}
                        />
                    </div>
                    <div className="input-field">
                        <Input
                            field="password"
                            label="Password"
                            value={formState.password.value}
                            onChangeHandler={handleInputValueChange}
                            type="password"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.password.showError}
                            validationMessage={PasswordValidationMessage}
                        />
                    </div>
                    <div className="input-field">
                        <Input
                            field="passwordConfir"
                            label="Passowrd Confirmation"
                            value={formState.passwordConfir.value}
                            onChangeHandler={handleInputValueChange}
                            type="password"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.passwordConfir.showError}
                            validationMessage={passwordConfirmationMessage}
                        />
                    </div>
                    <button className="button" onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                        Register
                    </button>
                </form>
                <span onClick={switchAuthHandler} className="switch-auth">
                    ¿Ya tienes cuenta? ¡Inicia sesión acá!...
                </span>
            </div>
        </>
    )

}