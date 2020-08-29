import API from "../utils/API";
import React, { Component } from "react"
import SearchBox from "./SearchBox"
import TableData from "./TableData"
import "./style.css";

class Container extends Component {

    // Setting the component's initial state
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""

    };

    // page initialization below
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }

    //if "name" is clicked employees are shown by asc/desc order
    sortByName = () => {
        const filtereds = this.state.filteredEmployees;
        if (this.state.order === "asc") {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds,
                order: "desc"
            })
        } else {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds,
                order: "asc"
            })
        }
    }
    handleInputChange = event => {

        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        )
        this.setState({
            // change state to filterd employees
            filteredEmployees,
        });
    };
    //API call triggered when page loads
    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({
                // both states store API info & pass along using props
                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }
    // search function below
    handleSearch = event => {
        event.preventDefault();
        if (!this.state.search) {
            alert("Enter a name")
        }
        const { employees, search } = this.state;
        // filter to search inputs
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));
        this.setState({
            filteredEmployees
        });
    }

    render() {
        return (
            <div>
                <SearchBox
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <TableData results={this.state.filteredEmployees}
                    sortByName={this.sortByName}

                />
            </div >
        )
    }
}
export default Container