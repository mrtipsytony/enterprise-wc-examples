import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-search-field/ids-search-field';
import 'ids-enterprise-wc/components/ids-header/ids-header';
import 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';

const IdsSearchField = () => {
  return (
    <>
      <IdsTitle>Search Field Example</IdsTitle>

      <ids-layout-grid cols="3" gap="xl">
        <ids-layout-grid-cell>
          <ids-search-field
            clearable
            dirty-tracker
            label="Products"
            value="Anti-virus Software"
            validate="required"
          ></ids-search-field>
          <ids-search-field
            clearable-forced
            readonly
            label="Read-only Search Bar"
            value="Cellphone"
          ></ids-search-field>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-search-field
            clearable
            label="Search Field with Hidden Label"
            label-state="hidden"
            placeholder="Custom placeholder text"
          ></ids-search-field>
          <form>
            <ids-search-field
              label="Search Wrapped in a Form tag"
              value="Cellphone"
              clearable
            ></ids-search-field>
          </form>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-search-field
            disabled
            label="Disabled Search Bar"
            value="Anti-virus Software"
          ></ids-search-field>
          <ids-search-field
            clearable
            color-variant="alternate"
            label="Alternate Color Search Bar"
            value="Cellphone"
          ></ids-search-field>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-search-field
            id="search-field-autocomplete"
            label="Autocomplete Search Bar"
            placeholder="Search states..."
            autocomplete
            search-field="label"
          ></ids-search-field>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="1">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Inside a Header:
          </ids-text>
          <ids-header>
            <ids-toolbar>
              <ids-toolbar-section type="button">
                <ids-button icon="menu" role="button">
                  <span className="audible">
                    Application Menu Trigger
                  </span>
                </ids-button>
              </ids-toolbar-section>
              <ids-toolbar-section type="title">
                <ids-text font-size="20">My Header</ids-text>
                <ids-text font-size="14">
                  With some extra information below
                </ids-text>
              </ids-toolbar-section>
              <ids-toolbar-section type="search" align="end">
                <ids-search-field
                  clearable
                  color-variant="alternate"
                  label-state="collapsed"
                  id="header-search"
                  no-margins
                  placeholder="Type to Search"
                ></ids-search-field>
              </ids-toolbar-section>
              <ids-theme-switcher mode="light"></ids-theme-switcher>
            </ids-toolbar>
          </ids-header>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSearchField;
