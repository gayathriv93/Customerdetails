import axios from 'axios';
import { Component } from 'react';
class Customertab extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        console.log("db connected");
    }
    handleClick = () => {
        axios.get('http://localhost:3002/api/stuff')
            .then((res) => {
                this.setState({ users: res.data })
            })
    }
    render() {
        return (
            <div className="container">
                <button className="btn btn-success mt-5" onClick={this.handleClick}>Show All Customers</button>
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
                        {
                            this.state.users.map(x => {
                                return (
                                    <tr key={x.id}>
                                        <th scope="row">{x.id}</th>
                                        <td>{x.Firstname}</td>
                                        <td>{x.Lastname}</td>
                                        <td>{x.ContactNo}</td>
                                        <td>{x.EmailID}</td>
                                        <td>{x.Purchaseddate}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Customertab;