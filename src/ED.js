import React, { useState } from 'react'
import { updateVal1 } from './formSlice2';
import { useDispatch, useSelector } from 'react-redux';

const ED = () => {
    const [school, setSchool] = useState('');
    const [highschool, setHighSchool] = useState('');
    const [schoolm, setSchoolm] = useState('');
    const [highschoolm, setHighSchoolm] = useState('');
    const uschool = useSelector(state => state.form2.school);
    const uhighSchool = useSelector(state => state.form2.highschool);
    const uschoolM = useSelector(state => state.form2.schoolm);
    const uhighSchoolM = useSelector(state => state.form2.highschoolm);

    const dispatch = useDispatch();
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateVal1({ school, highschool, schoolm, highschoolm }));
    }

    const inputElements = [
        {
            label: "School",
            className: "school",
            htmlFor: "School",
            placeholder: "Enter School Name",
            type: "text",
            name: "school",
            defaultValue: uschool,
            onChange: (e) => { setSchool(e.target.value) },
            onBlur: (e) => { handleUpdate(e) }
        },
        {
            label: "High School",
            className: "highschool",
            htmlFor: "High School",
            placeholder: "Enter High School Name",
            type: "text",
            name: "highSchool",
            defaultValue: uhighSchool,
            onChange: (e) => { setHighSchool(e.target.value) },
            onBlur: (e) => { handleUpdate(e) }
        },
        {
            label: "SSLC Marks",
            className: "school",
            htmlFor: "School",
            placeholder: "Enter SSLC Mark",
            type: "number",
            name: "schoolM",
            defaultValue: uschoolM,
            onChange: (e) => { setSchoolm(e.target.value) },
            onBlur: (e) => { handleUpdate(e) }
        },
        {
            label: "HSC Marks",
            className: "highschool",
            htmlFor: "High School",
            placeholder: "Enter HSC Mark",
            type: "number",
            name: "highSchoolM",
            defaultValue: uhighSchoolM,
            onChange: (e) => { setHighSchoolm(e.target.value) },
            onBlur: (e) => { handleUpdate(e) }
        },
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

export default ED