import React from 'react';
import PD from './PD';
import ED from './ED';
import { FormProvider, useForm } from "react-hook-form";
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import EMPD from './EMPD';

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const methods = useForm();
  const name = useSelector(state => state.form1.name);
  const email = useSelector(state => state.form1.email);
  const phone = useSelector(state => state.form1.phone);
  const password = useSelector(state => state.form1.password);
  const city = useSelector(state => state.form1.city);
  const school = useSelector(state => state.form2.school);
  const highschool = useSelector(state => state.form2.highschool);
  const schoolm = useSelector(state => state.form2.schoolm);
  const highschoolm = useSelector(state => state.form2.highschoolm);
  const companyname = useSelector(state => state.form3.companyname);
  const salary = useSelector(state => state.form3.salary);
  const designation = useSelector(state => state.form3.designation);
  const jobtype = useSelector(state => state.form3.jobtype);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      fetch('http://localhost:8080/savedetails',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Accept': 'application/json',

          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            password: password,
            city: city,
            pagetwo: {
              school: school,
              highschool: highschool,
              schoolm: schoolm,
              highschoolm: highschoolm,
            },
            pagethree: {
              companyname: companyname,
              salary: salary,
              designation: designation,
              jobtype: jobtype
            }
          })
        })
        .then((res) => {
          if (res.status === 200) {
            setActiveStep(activeStep + 1);
          }
        }).catch((err) => {
          console.log("");
        }
        );
    }
    else {
      setActiveStep(activeStep + 1);
    }
  }
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  }

  function getSteps() {
    return ['Personal Details', 'Education Details', 'Employment Details'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PD />;
      case 1:
        return <ED />;
      case 2:
        return <EMPD />;
      default:
    }
  }

  const steps = getSteps();

  return (
    <div>
      {activeStep === steps.length ? (
        <div className="wrapper" >
          <div className="form-wrapper">
            <Typography variant="h3" align='center'>
              Thank you for your submission
            </Typography>
          </div>
        </div>
      ) : (
        <div className="wrapper" >
          <div className="form-wrapper">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}
                <div className='button'>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="contained"
                    color="primary"
                  >back</Button>
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div >)}
    </div>
  )
}

export default App;
