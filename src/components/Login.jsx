import { useState } from "react";
import { Input } from "./Input";
import {
    emailValidationMessage,
    PasswordValidationMessage,
    validateEmail,
    validatePassword
} from "../shared/validators";
import { Logo } from "./Logo";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();
    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        }
    });

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
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(formState.email.value, formState.password.value);
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid

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
                    <button className="button" onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                        Log in
                    </button>
                </form>
                <span onClick={switchAuthHandler} className="switch-auth">
                    ¿Aún no tienes una cuenta? ¡Registrate...!
                </span>
            </div>
        </>
    )

}