import React from 'react';
import API from '@app/api';
import { ContactTable } from '@app/ContactTable/ContactTable';
import { PageSection } from '@patternfly/react-core';

class ContactList extends React.Component {
  public state = {
    customers: []
  }

  public componentDidMount() {
    API.get()
      .then(res => {
        const customers = res.data;
        this.setState({ customers })},
        (error) => {
          // tslint:disable-next-line:no-console
          console.log(error);
      })
  }

  // public renderTableData() {
  //   return this.state.customers.map((customer, index) => {
  //     const { id, name, address, email } = customer
  //     return (
  //       <tr key={id}>
  //         <td>{id}</td>
  //         <td>{name}</td>
  //         <td>{address}</td>
  //         <td>{email}</td>
  //       </tr>
  //     )
  //   })
  // }

  public render() {
    const test = this.state.customers;
    return (
      <PageSection>
        <ContactTable rows={test}/>
      </PageSection>
    )}
  }

// export interface ISupportProps {
//   sampleProp?: string;
// }
//
// const customers = () => API.get(`http://localhost:8080/customer`);
//
// const ContactList: React.FunctionComponent<ISupportProps> = () => (
//     <PageSection>
//       <ContactTable row={customers}/>
//     </PageSection>
//   );

export { ContactList };
