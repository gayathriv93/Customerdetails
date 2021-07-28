import axios from 'axios';
import { Component } from 'react';


class Home extends Component {
    state = {
        users: []
    };

    componentDidMount() {
       

    }

    handleClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            this.setState({ users: res.data })
        })
    }

    render() {
        return (
            <div className="container">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(x => {
                                return (
                                    <tr key={x.id}>
                                        <th scope="row">{x.id}</th>
                                        <td>{x.name}</td>
                                        <td>{x.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}


export default Home;