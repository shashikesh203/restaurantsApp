import React, { Children, useEffect, useRef, useState } from "react";

const SignUpData = () => {
  const emailRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log('hi');


  useEffect(()=>{

    fetch('')
  },[])
 

  const onclickhandler = async (e) => {
    e.preventDefault();

    const data = await fetch("http://localhost:8000/api/get-user-info", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await data.json();

    setName(result.data[0].name);
    setEmail(result.data[0].email);
  };

  return (
    <div>
      <input ref={emailRef} type="email"></input>
      <button onClick={onclickhandler}>click</button>
      <p>Name {name}</p>
      <p>email {email}</p>
    </div>
  );
};

export default SignUpData;
