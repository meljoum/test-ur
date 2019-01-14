import React, { Component } from "react";
import CompaniesHeader from "./components/companies-header";
import CompaniesFooter from "./components/companies-footer";
import Companies from "./components/companies";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <CompaniesHeader />
                    <Companies />
                    <CompaniesFooter />
                </div>
            </div>
        );
    }
}

export default App;
