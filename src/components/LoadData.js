import { useState } from "react";
import axios from "axios";
import Department from "./Department";
import Student from "./Student";

const LoadData=()=>{
    const[dept,setDept]=useState({});
    const[std,setStudent]=useState({});
    const clickHandle=()=>{
        axios.get("https://mocki.io/v1/72353acd-8db8-4293-9df4-2e6c22920b55")
        .then((rsp)=>{
            setDept(rsp.data)
            setStudent(rsp.data.Students[0])
        },(err)=>{

        })
    }

    return(
        <div>
           <button onClick={clickHandle}>Load</button>
           {/* {dept.Name}
           {std.Name} */}
           <Department id={dept.Id} name={dept.Name}></Department>
           <Student id={std.Id} name={std.Name} dob={std.Dob} cgpa={std.Cgpa}></Student>
        </div>
    )
}
export default LoadData;