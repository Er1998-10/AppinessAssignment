import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function LOgIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const obj={
    user:[{
    "id":1,
    "name":"Employee_One",
    "age" : "21",
    "gender":"Female",
    "email" : "employee.one@react.com",
    "phoneNo" : "9812312312"
    },
    {
    "id" : 2,
    "name":"Employee_Two",
    "age" : "23",
    "gender":"Female",
    "email" : "employee.two@react.com",
    "phoneNo" : "9534534534"
    },
    {
    "id":3,
    "name":"Employee_Three",
    "age" : "30",
    "gender":"Male",
    "email" : "employee.three@react.com",
    "phoneNo" : "8878978978" },
    {
    "id":4,
    "name":"Employee_Four",
    "age" : "42",
    "gender":"Female",
    "email" : "employee.four@react.com",
    "phoneNo" : "7045645645" },
    {
    "id":5,
    "name":"Employee_Five",
    "age" : "29",
    "gender":"Male",
    "email" : "employee.five@react.com",
    "phoneNo" : "8123898901" },
    {
    "id":6,
    "name":"Employee_Six",
    "age" : "25",
    "gender":"Male",
    "email" : "employee.six@react.com",
    "phoneNo" : "9988009976" }
    ]
  }    
  console.log(state);

  const onButtonClick = () => {
    if (email == state.username && password == state.password) {
      dispatch({ type: "USER-LOGED-IN" });
    }
    console.log(state);
  };

  return (
    <React.Fragment>
      {state.userLogedIn ? <h1>Log In</h1>: <h1>LogInPage</h1>}
      {state.userLogedIn ? (
        <div></div>
      ) : (
        <div>
          <div>
            <label>Email</label>
            <input
              type="type"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label>password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={onButtonClick}>LogIn</button>
        </div>
      )}
    </React.Fragment>
  );
}

export default LOgIn;
