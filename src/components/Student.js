const Student=(props)=>{
    return(
       
        <div>
             <h3>Student</h3>
        <table border={3}>
            <tr>
                <th> ID</th>
                <th> Name</th>
                <th> Dob</th>
                <th> Cgpa</th>
            </tr>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.dob}</td>
                <td>{props.cgpa}</td>
            </tr>
        </table>
        </div>
    
    )
}
export default Student;
