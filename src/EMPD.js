import React, { useState } from 'react'
import { updateVal2 } from './formSlice3';
import { useDispatch, useSelector } from 'react-redux';

const EMPD = () => {
    const [companyname, setCompanyname] = useState('');
    const [salary, setSalary] = useState('');
    const [jobtype, setJobtype] = useState('');
    const [designation, setDesignation] = useState('');
    const dispatch = useDispatch();
    const ucompanyname = useSelector(state => state.form3.companyname);
    const usalary = useSelector(state => state.form3.salary);
    const ujobtype = useSelector(state => state.form3.jobtype);
    const udesignation = useSelector(state => state.form3.designation);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateVal2({ companyname, salary, jobtype, designation }));
    }

    const inputElements = [
        {
            label: "Company",
            className: "name",
            htmlFor: "Company Name",
            placeholder: "Company Name",
            type: "text",
            name: "companyname",
            defaultValue: ucompanyname,
            onChange: (e) => {
                e.preventDefault();
                setCompanyname(e.target.value)
            },
            onBlur: (e) => { handleUpdate(e) }
        },
        {
            label: "Salary",
            className: "name",
            htmlFor: "Salary",
            placeholder: "Salary",
            type: "number",
            name: "salary",
            defaultValue: usalary,
            onChange: (e) => { setSalary(e.target.value) },
            onBlur: (e) => { handleUpdate(e) }
        },
        {
            label: "Job Type",
            className: "name",
            htmlFor: "Job Type",
            placeholder: "Job Type",
            type: "text",
            name: "jobtype",
            defaultValue: ujobtype,
            onChange: (e) => { setJobtype(e.target.value) },
            onBlur: (e) => { handleUpdate(e) }
        },
        {
            label: "Designation",
            className: "name",
            htmlFor: "Designation",
            placeholder: "Designation",
            type: "text",
            name: "designation",
            defaultValue: udesignation,
            onChange: (e) => { setDesignation(e.target.value) },
            onBlur: (e) => { handleUpdate(e) }
        }
    ]

    return (

        <div >
            <h1>Register Here</h1>
            <form >
                {
                    inputElements.map(i => {
                        return (
                            <>
                                <div className={i.className} >
                                    <label htmlFor={i.htmlFor}>{i.label}</label>
                                    <input
                                        placeholder={i.placeholder}
                                        type={i.type}
                                        name={i.name}
                                        noValidate
                                        defaultValue={i.defaultValue}
                                        onChange={i.onChange}
                                        onBlur={i.onBlur}
                                    />
                                </div>
                            </>
                        )

                    })
                }
            </form>
        </div >

    )
}

export default EMPD