import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-button/ids-button';
import 'ids-enterprise-wc/ids-input/ids-input';
import 'ids-enterprise-wc/ids-checkbox/ids-checkbox';
import 'ids-enterprise-wc/ids-fieldset/ids-fieldset';

const IdsFieldset = () => {
  return (
    <>
      <ids-layout-grid>
        <ids-text font-size="12" type="h1">
          Fieldset
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <form>
          <ids-fieldset>
            <legend>
              <ids-text font-size="24" type="h2" id="user-info">
                User Information
              </ids-text>
            </legend>
            <ids-input type="text" label="User Name" id="user-name"></ids-input>
            <ids-input
              type="text"
              label="User Address"
              id="user-address"
            ></ids-input>
          </ids-fieldset>
          <ids-fieldset>
            <legend>
              <ids-text font-size="24" type="h2" id="company-info">
                Company Information
              </ids-text>
            </legend>
            <ids-input
              type="text"
              label="Company Name"
              id="company-name"
            ></ids-input>
            <ids-input type="text" label="Company Type" id="type"></ids-input>
            <ids-input
              type="text"
              label="Company Address"
              id="company-address"
            ></ids-input>
            <ids-checkbox label="Checked" checked="true"></ids-checkbox>
            <ids-button type="primary">Submit</ids-button>
          </ids-fieldset>
        </form>
      </ids-layout-grid>
    </>
  );
};

export default IdsFieldset;