import React from "react";
import styles from "../assets/styles/companies-footer.css";

const CompaniesFooter = props => {
    return (
        <div className="companies-footer">
            <div className="navbar-logo">
                <a href="foo" className={styles.logo}>
                    <img
                        src="https://via.placeholder.com/150x50/6050dc/ffffff"
                        alt="logo"
                    />
                </a>
            </div>
            <a className="link-profil" href="foo">
                Voir le profil
            </a>
        </div>
    );
};

export default CompaniesFooter;
