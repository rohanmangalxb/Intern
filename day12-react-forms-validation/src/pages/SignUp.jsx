import React, { useState } from 'react';
import InputField from '../components/InputFields.jsx';
import Success from '../components/Succes.jsx';

const SignUp = () => {
    const [success, setSuccess] = useState(false);

    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPass, setPass] = useState('');
    const [userPassC, setPassC] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    });

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = () => {
        const newErrors = {};

        if (userName.trim().length < 3) {
            newErrors.name = 'Name must be at least 3 letters';
        }

        if (!emailFormat.test(userEmail)) {
            newErrors.email = 'Email must be in format: abc@pqr.xyz';
        }

        if (userPass.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (userPassC !== userPass) {
            newErrors.confirmPass = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert(`Name: ${userName}\nEmail: ${userEmail}\nPassword: ${userPass}`);
            setName('');
            setEmail('');
            setPass('');
            setPassC('');
            setSuccess(true);
        }
    };

    return (
        <div className="form-container">
            {success ? (
                <Success />
            ) : (
                <form onSubmit={handleSubmit} noValidate>
                    <InputField
                        label="Name"
                        type="text"
                        value={userName}
                        onChange={(e) => setName(e.target.value)}
                        error={errors.name}
                    />

                    <InputField
                        label="Email"
                        type="email"
                        value={userEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        error={errors.email}
                    />

                    <InputField
                        label="Password"
                        type="password"
                        value={userPass}
                        onChange={(e) => setPass(e.target.value)}
                        error={errors.password}
                    />

                    <InputField
                        label="Confirm Password"
                        type="password"
                        value={userPassC}
                        onChange={(e) => setPassC(e.target.value)}
                        error={errors.confirmPass}
                    />

                    <InputField type="submit" value="Sign Up" />
                </form>
            )}
        </div>
    );
};

export default SignUp;
