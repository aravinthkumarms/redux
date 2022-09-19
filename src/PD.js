import React, { useState } from 'react'
import { updateVal } from './formSlice';
import { useDispatch, useSelector } from 'react-redux';

const PD = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const uname = useSelector(state => state.form1.name);
    const uemail = useSelector(state => state.form1.email);
    const uphone = useSelector(state => state.form1.phone);
    const upassword = useSelector(state => state.form1.password);
    const ucity = useSelector(state => state.form1.city);
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateVal({ name, email, phone, password, city }));
    }

    const [nvalid, nSetValid] = React.useState(false);
    const [evalid, eSetValid] = React.useState(false);
    const [eCheck, eSetCheck] = React.useState(false);
    const [phvalid, phSetValid] = React.useState(false);
    const [phCheck, phSetCheck] = React.useState(false);
    const [cvalid, cSetValid] = React.useState(false);
    const [pvalid, pSetValid] = React.useState(false);
    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const check = (type, value) => {
        fetch(`http://localhost:8080/${type}/${value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            }
        })
            .then(res => res.json()).then
            (data => {
                if (data) {
                    if (type === "email") {
                        eSetCheck(true);
                    }
                    else if (type === "phone") {
                        phSetCheck(true);
                    }
                }
                else if (!data) {
                    if (type === "email") {
                        eSetCheck(false);
                    }
                    else if (type === "phone") {
                        phSetCheck(false);
                    }
                }
            }
            ).catch(err => {
                console.log("");
            });
    }

    const inputElements = [
        {
            className: "name",
            htmlFor: "Name",
            placeholder: "Name",
            type: "text",
            name: "name",
            defaultValue: uname,
            onChange: (e) => {
                setName(e.target.value)
                handleUpdate(e)
                if (e.target.length < 3) {
                    nSetValid(true)
                }
                else {
                    nSetValid(false)
                }
            },
            onFocus: () => { nSetValid(false) },
            valid: nvalid,
            error: "Name should be atleast 3 characters long"
        },
        {
            className: "email",
            htmlFor: "Email",
            placeholder: "Email",
            type: "email",
            name: "email",
            defaultValue: uemail,
            onChange: (e) => { setEmail(e.target.value) },
            onFocus: (e) => {
                eSetCheck(false);
                eSetValid(false);
            },
            onBlur: (e) => {
                handleUpdate(e)
                check("email", uemail);
                console.log(uemail)
                if (!(emailRegex.test(e.target.value))) {
                    eSetValid(true);
                }
                else {
                    eSetValid(false);
                }
            },
            valid: evalid,
            valid2: eCheck,
            error: "Email is Invalid",
            error2: "Email is already Registered"
        },
        {
            className: "phone",
            htmlFor: "Phone",
            placeholder: "Phone",
            type: "number",
            name: "phone",
            defaultValue: uphone,
            onChange: (e) => { setPhone(e.target.value) },
            onFocus: (e) => {
                phSetCheck(false);
                phSetValid(false);
            },
            onBlur: (e) => {
                handleUpdate(e)
                check("phone", uphone);
                if (e.target.value.length !== 10) {
                    phSetValid(true)
                }
                else {
                    phSetValid(false)
                }
            },
            valid: phvalid,
            valid2: phCheck,
            error: "Phone number should be 10 digits long",
            error2: "Phone number is already Registered"
        },
        {
            className: "city",
            htmlFor: "City",
            placeholder: "City",
            type: "text",
            name: "city",
            defaultValue: ucity,
            onChange: (e) => {
                e.preventDefault();
                setCity(e.target.value)
            },
            onBlur: (e) => { handleUpdate(e) }
        },
        {
            className: "password",
            htmlFor: "Password",
            placeholder: "Password",
            type: "password",
            name: "password",
            defaultValue: upassword,
            onChange: (e) => { setPassword(e.target.value) },
            onBlur: (e) => { handleUpdate(e) }

        }

    ]

    return (

        <div>
            <h1>Register Here</h1>
            <form >
                {
                    inputElements.map(i => {
                        return (
                            <>
                                <div className={i.className} >
                                    <label htmlFor={i.htmlFor}>{i.placeholder}</label>
                                    <input
                                        placeholder={i.placeholder}
                                        type={i.type}
                                        name={i.name}
                                        noValidate
                                        defaultValue={i.defaultValue}
                                        onChange={i.onChange}
                                        onBlur={i.onBlur}
                                        onFocus={i.onFocus}
                                    />
                                    {i.valid ? <pre style={{ color: "red", fontFamily: "'San Francisco', Helvetica, Arial, san-serif" }}>{i.error}</pre> : ""}
                                    {i.valid2 ? <pre style={{ color: "red", fontFamily: "'San Francisco', Helvetica, Arial, san-serif" }}>{i.error2}</pre> : ""}
                                </div>
                            </>
                        )
                    })
                }
            </form>
        </div >

    )
}

export default PD