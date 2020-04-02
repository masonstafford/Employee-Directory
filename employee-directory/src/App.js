import React from "react";
import "./App.css";
import API from "./utils/api";
import Container from "./components/Container/container"; 
import SearchBar from "./components/SearchBar/searchBar"; 

class App extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    API.getMany(10)
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(MediaStreamError));
  }

  handleSearch = event => {
    event.preventDefault();
    console.log(event.target.value);

    const { value } = event.target;
    const searched = this.state.employees.filter(employee =>
      employee.name.first.includes(value)
    );
    searched.map(employee => console.log(employee));
    this.setState({ employees: searched });
  };

  render() {
    const filtered = this.state.employees.filter();

    return (
    
    <Container>
      <SearchBar />
    
    </Container>
    
    );
  }
}

export default App;
