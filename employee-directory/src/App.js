import React from "react";
import API from "./utils/API";
import Wrapper from "./components/Wrapper/Wrapper";
import EmployeeDisplay from "./components/Employee/Employee";
import Header from "./components/Header/Header"

class App extends React.Component {
  state = {
    employees: [],
    term: "",
    masterList: [],
    hasBeenSorted: false,
  };

  componentDidMount() {
    API.getMany(250)
      .then((res) =>
        this.setState({
          employees: res.data.results,
          masterList: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }
  handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ term: event.target.value });
    const { value } = event.target;
    const searched = this.state.masterList.filter((employee) =>
      employee.name.first.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ employees: searched });
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <div className="search-bar">
          <input
            onChange={this.handleSearch}
            value={this.state.term}
            placeholder="search"
          ></input>
        </div>
        <table className="table">
          <thead>
            <tbody>
              <tr>
                <th>Image</th>
                <th style={{ cursor: "pointer" }} onClick={this.handleSort}>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
              </tr>
              {this.state.employees.map((employee) => (
                <EmployeeDisplay
                  key={employee.login.uuid}
                  name={`${employee.name.first} ${employee.name.last}`}
                  image={employee.picture.large}
                  location={`${employee.location.city} ${employee.location.state}`}
                  email={employee.email}
                  number={employee.phone}
                />
              ))}
            </tbody>
          </thead>
        </table>
      </Wrapper>
    );
  }
}

export default App;
