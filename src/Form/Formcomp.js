// import logo from './formlogo.png';
import { Component } from 'react';
import './Formcomp.css';
import axios from 'axios';

class Formcomp extends Component {
    componentDidMount() {

        axios.post('http://localhost:3002/api/stuff')
            .then((res) => {
                this.setState({ users: res.data })
            })

    }

    render() {
        return (
            <div className="container mt-4 bg-info ">
                <div className="row ">
                    <h3 className="my-3 text-center"> Customer Details</h3>
                    <form className="mx-5 ">
                        <div className="row ">
                            <div className="col-12 col-md-1 my-2 mx-1">
                                <select className="form-control">
                                    <option selected>Mrs..</option>
                                    <option value="1">Mr</option>
                                    <option value="2">Mrs</option>
                                    <option value="3">Miss</option>
                                </select>
                            </div>
                            <div className="col-12 m-2 col-md-4">
                                <input type="text" className="form-control" placeholder="First name" required />
                            </div>
                            <div className="col-12 m-2 col-md-4">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="row  ">
                            <div className="col-12  col-md-4">
                                <input type="tel" className="form-control m-2" placeholder=" Mobile Number" required />
                            </div>

                        </div>
                        <div className="row  ">
                            <div className="col-12 col-md-4">
                                <input type="email" className="form-control m-2" placeholder=" Email ID" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-md-4">
                                <input type="text" className="form-control m-2" placeholder=" Address" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <input type="number" className="form-control m-2" placeholder=" Pincode" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <input type="number" className="form-control m-2" placeholder=" Age" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <input type="datetime-local" className="form-control m-2" placeholder=" Purchase Date" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <input type="number" className="form-control m-2" placeholder=" Bill Amount" required />
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-6 col-md-2 m-4 ">
                                <button className="btn btn-primary p-2 fw-bold" >Submit</button>
                            </div>
                            <div className="col-6 col-md-2 m-4">
                                <button className="btn btn-primary p-2 fw-bold">Reset</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div >
        );
    }

}


export default Formcomp;