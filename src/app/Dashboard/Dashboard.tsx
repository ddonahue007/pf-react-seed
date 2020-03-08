import * as React from 'react';

import { PageSection } from '@patternfly/react-core';
import { ContactList } from '@app/ContactList/ContactList';


const Dashboard: React.FunctionComponent<{}> = () => (
    <PageSection>
      <ContactList>Table</ContactList>
    </PageSection>
  )

export { Dashboard };
