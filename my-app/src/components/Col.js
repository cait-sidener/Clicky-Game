import React from "react";

// This Col component offers the convenience of setting a column's Column prop instead of its className

function Col(props) {
    const Col = props.Col.spit(" ").map(size => "col-" + Col).join(" ");

    return (
        <div className={Col}>
        {props.children}
        </div>
    );
}

export default Col