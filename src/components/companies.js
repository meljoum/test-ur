import React, { Component } from "react";
import Swiper from "react-id-swiper";
import CompaniesItem from "./companies-item";
import Articles from "../api";

import "../assets/styles/swiper.css";
import "../assets/styles/companies.css";

export default class Companies extends Component {
    constructor(props) {
        super(props);

        const query = new URLSearchParams(window.location.search);

        const columns = query.get("columns") ? Number(query.get("columns")) : 3;
        const rows = query.get("rows") ? Number(query.get("rows")) : 2;

        const url = `?columns=${columns}&rows=${rows}`;
        window.history.pushState("", "", url);

        this.state = {
            swiper: {
                slidesPerView: columns,
                slidesPerColumn: rows,
                spaceBetween: 0,
                pagination: { el: ".swiper-pagination", type: "progressbar" },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: { 640: { slidesPerView: 1 } }
            }
        };
    }
    render() {
        console.log(Articles);
        return (
            <div className="companies">
                <Swiper {...this.state.swiper}>
                    {Articles.map((article, index) => (
                        <div className="companies-slide" key={index}>
                            <CompaniesItem data={article} />
                        </div>
                    ))}
                </Swiper>
            </div>
        );
    }
}
