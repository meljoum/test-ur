import React from "react";
import styles from "../assets/styles/companies-header.css";

const CompaniesHeader = props => {
    return (
        <div className="companies-header">
            <div className="navbar-logo">
                <a href="foo" className={styles.logo}>
                    <img
                        src="https://via.placeholder.com/50/6050dc/ffffff"
                        alt="logo"
                    />
                </a>
                <p>Welcome to UR</p>
            </div>
        </div>
    );
};

export default CompaniesHeader;
