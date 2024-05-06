import { useState } from "react";
import styless from "./UserManagement.module.scss";
// import React , {useState} from 'react';
type cmpType = "Arc" | "infosys";
type userType = {
    name: string;
    age: number;
    cmp: cmpType;
  }
const UserManagement: React.FC<{
  isLogin: boolean;
}> = ({ isLogin }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [cmp, setCmp] = useState<cmpType>("Arc");
  const userArr:userType[] = [
    {
      name: "nikita",
      age: 23,
      cmp: "Arc",
    },
  ];
  const[userData,setUserData] = useState<userType[]>(userArr);
  
  const saveUserData = (): void => {
    console.log(name,age,cmp);
    // userArr.push({name,age,cmp})
    // setUserData([{name,age,cmp}])
    const newArr:userType[] = [...userData,{name,age,cmp}]
    setUserData(newArr);
    console.log("userArr",userArr)
  };
  const classValue = isLogin ? "maincontainer" : "mainecontainerLogout";
  const  userArrData = userData.map(user =>{
    return(
        <div>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>Cmp:{user.cmp}</p>
        </div>
    )

  }
   
  )
  return (
    <div className={styless[classValue]}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <input
        type="text"
        name="cmp"
      value={cmp}
        onChange={(e) => {
          const newValue: any = e.target.value;
          setCmp(newValue);
        }}
      />
      <button onClick={saveUserData}>Save</button>
      user Management
      {userArrData}
    </div>
  );
};


export default UserManagement;
