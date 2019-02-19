import React from "react";

export default function EmptyCart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">cart</h1>
          <h1>is</h1>
          <h2>empty</h2>
          <h3>
            Get back
            <span className="text-primary"> to the</span> products page!
          </h3>
        </div>
      </div>
    </div>
  );
}
