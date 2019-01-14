import React from "react";
import "../assets/styles/companies-item.css";

const CompaniesItem = props => {
    const { data } = props;
    return (
        <article className={["companies-item", `is-${data.type}`].join(" ")}>
            <div className="company">
                {data.image && (
                    <img
                        className="company-image"
                        src={data.image}
                        alt={data.title}
                    />
                )}
                <h1 className="company-title">{data.title}</h1>
            </div>
        </article>
    );
};

export default CompaniesItem;
