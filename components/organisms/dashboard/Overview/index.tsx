import React from "react";
import Category from "./Category";
import TableRow from "./TableRow";

export default function Overview() {
  return (
    <div className="ps-lg-0">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
      <div className="top-up-categories mb-30">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Top Up Categories
        </p>
        <div className="main-content">
          <div className="row">
            <Category icon="icon-desktop" totalSpend={18000500}>
              Game
              <br />
              Desktop
            </Category>
            <Category icon="icon-mobile" totalSpend={8455000}>
              Game
              <br />
              Mobile
            </Category>
            <Category icon="icon-mobile" totalSpend={5000000}>
              Other
              <br />
              Category
            </Category>
          </div>
        </div>
      </div>
      <div className="latest-transaction">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Latest Transactions
        </p>
        <div className="main-content main-content-table overflow-auto">
          <table className="table table-borderless">
            <thead>
              <tr className="color-palette-1">
                <th className="text-start" scope="col">
                  Game
                </th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                image="overview-1"
                name="Game 1"
                category="Mobile"
                item={200}
                price={290000}
                status="Pending"
              />
              <TableRow
                image="overview-2"
                name="Game 2"
                category="Desktop"
                item={550}
                price={740000}
                status="Success"
              />
              <TableRow
                image="overview-3"
                name="Game 3"
                category="Mobile"
                item={100}
                price={120000}
                status="Failed"
              />
              <TableRow
                image="overview-4"
                name="Game 4"
                category="Mobile"
                item={225}
                price={200000}
                status="Pending"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
