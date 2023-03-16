import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-wizard/ids-wizard';


const IdsWizard = () => {
  return (
    <>
      <IdsTitle>Wizard Example</IdsTitle>

      <ids-layout-grid cols="4">
        <ids-layout-grid-cell col-span="2" id="ex-ids-wizard-parent-clickable">
          <ids-wizard step-number="3">
            <ids-wizard-step>Step One</ids-wizard-step>
            <ids-wizard-step>Step Two</ids-wizard-step>
            <ids-wizard-step>Step Three</ids-wizard-step>
            <ids-wizard-step>Step Four</ids-wizard-step>
          </ids-wizard>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsWizard;
