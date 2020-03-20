import React from 'react';
import axios from 'axios';
import {
  PageSection,
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';

class ContactList extends React.Component {
  public state = {
    customers: []
  }

  public componentDidMount() {
    axios.get(`http://localhost:8080/customer`)
      .then(res => {
        const customers = res.data;
        this.setState({ customers })},
        (error) => {
          // tslint:disable-next-line:no-console
          console.log(error);
      })
  }

  public renderTableData() {
    return this.state.customers.map((customer, index) => {
      const { id, name, address, email } = customer
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{address}</td>
          <td>{email}</td>
        </tr>
      )
    })
  }

  public render() {
    return (
      <PageSection>
        <table id="table-basic">
          <thead>
          <tr role="row">
            <th role="columnheader" scope="col">ID</th>
            <th role="columnheader" scope="col">Name</th>
            <th role="columnheader" scope="col">Address</th>
            <th role="columnheader" scope="col">Email</th>
          </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </PageSection>
    )}
  }

  export { ContactList };
