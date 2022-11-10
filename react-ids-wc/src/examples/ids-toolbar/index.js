import React from 'react';
import 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';

const IdsToolbar = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Toolbar
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-toolbar id="my-toolbar">
            <ids-toolbar-section type="button">
              <ids-button icon="menu" role="button">
                <span slot="text" className="audible">
                  Application Menu Trigger
                </span>
              </ids-button>
            </ids-toolbar-section>
            <ids-toolbar-section type="title" favor>
              <ids-text font-size="20">My Toolbar</ids-text>
              <ids-text font-size="14">With some extra information below</ids-text>
            </ids-toolbar-section>
            <ids-toolbar-section type="buttonset" align="end">
              <ids-button id="button-1" role="button" no-padding>
                <span slot="text">Text 1</span>
              </ids-button>
              <ids-button id="button-2" role="button" no-padding>
                <span slot="text">Text 2</span>
              </ids-button>
              <ids-button id="button-3" role="button" no-padding>
                <span slot="text">Text 3</span>
              </ids-button>

              <ids-menu-button
                menu="button-4-menu"
                role="button"
                trigger-type="click"
                id="button-4"
                dropdown-icon="dropdown"
                no-padding
              >
                <span slot="text">Menu</span>
              </ids-menu-button>
              <ids-popup-menu id="button-4-menu" target="#button-4">
                <ids-menu-group>
                  <ids-menu-item value="1">Item One</ids-menu-item>
                  <ids-menu-item value="2">Item Two</ids-menu-item>
                  <ids-menu-item value="3">Item Three</ids-menu-item>
                  <ids-menu-item>
                    More Items
                    <ids-popup-menu>
                      <ids-menu-group>
                        <ids-menu-item value="4">Item Four</ids-menu-item>
                        <ids-menu-item value="4">Item Five</ids-menu-item>
                        <ids-menu-item value="4">Item Six</ids-menu-item>
                      </ids-menu-group>
                    </ids-popup-menu>
                  </ids-menu-item>
                </ids-menu-group>
              </ids-popup-menu>

              <ids-button id="button-5" disabled>
                <span slot="text" className="audible">
                  Settings
                </span>
                <ids-icon slot="icon" icon="settings"></ids-icon>
              </ids-button>

              <ids-button id="button-6">
                <span slot="text" className="audible">
                  Trash
                </span>
                <ids-icon slot="icon" icon="delete"></ids-icon>
              </ids-button>
            </ids-toolbar-section>

            <ids-toolbar-more-actions overflow>
              <ids-menu-group>
                <ids-menu-item value="1">Option One</ids-menu-item>
                <ids-menu-item value="2">Option Two</ids-menu-item>
                <ids-menu-item value="3">Option Three</ids-menu-item>
                <ids-menu-item>
                  More Options
                  <ids-popup-menu>
                    <ids-menu-group>
                      <ids-menu-item value="4">Option Four</ids-menu-item>
                      <ids-menu-item value="5">Option Five</ids-menu-item>
                      <ids-menu-item value="6">Option Six</ids-menu-item>
                    </ids-menu-group>
                  </ids-popup-menu>
                </ids-menu-item>
              </ids-menu-group>
            </ids-toolbar-more-actions>
          </ids-toolbar>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsToolbar;
