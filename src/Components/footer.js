import React from "react";
import "../App.css";

function Footer() {
    var year = new Date().getFullYear();
    return (<div className="foot">
        <p>
            copyright @{year}
        </p>
    </div>);
}

export default Footer;