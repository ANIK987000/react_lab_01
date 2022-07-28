
const Department=(props)=>{
    return(
        <div>
             <h3>Department</h3>
        <table border={3}>
            <tr>
                <th> ID</th>
                <th> Name</th>
            </tr>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
            </tr>
        </table>
        </div>
       
    )
}
export default Department;