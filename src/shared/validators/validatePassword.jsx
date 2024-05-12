export const validatePassword = (password) => {
    const regex = /^\S{6,12}$/

    return regex.test(password)
}

export const PasswordValidationMessage = 'Password must be between 6 and 12 characters long.'