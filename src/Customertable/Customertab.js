function Customertab() {
    return (
        <div className="container">
            <h2 className="text-center text-primary "> CUSTOMER DATABASE</h2>
            <table className="table table-bordered table-info">
                <thead >
                    <tr>
                        <th className="col">#</th>
                        <th className="col">FirstName</th>
                        <th className="col">LastName</th>
                        <th className="col">Contact No</th>
                        <th className="col">Email ID</th>
                        <th className="col"> Purchased Date</th>
                        <th className="col ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>98765467</td>
                        <td>fghjk@gmail</td>
                        <td>21-5-21</td>
                        <td ><select >
                            <option selected>Action..</option>
                            <option value="1">Update</option>
                            <option value="2">Delete</option>
                            <option value="3">Add New</option>
                        </select></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Customertab;