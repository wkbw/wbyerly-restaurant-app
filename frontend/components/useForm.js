import React, { useState } from "react";

const useForm = () => {

  //Form values
  const [values, setValues] = useState({});

  //Error values
  const [errors, setErrors] = useState({});

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default values
    event.persist();

    console.log("Input Name ", event.target.name);
    console.log("Input Value ", event.target.value);

  }


  return (
    values,
    errors,
    handleChange
  )
}

export default useForm
