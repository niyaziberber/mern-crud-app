/* eslint-disable no-useless-constructor */
import axios from "axios";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/students")
      .then((res) => this.setState({ students: res.data }))
      .catch((err) => console.log(err));
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
  s;
}
