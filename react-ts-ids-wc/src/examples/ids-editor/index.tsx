import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-editor/ids-editor';

const IdsEditor = () => {
  return (
    <>
      <IdsTitle>Editor Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-editor id="editor-demo" label="Ids Editor">
            <p>
              Embrace{' '}
              <a
                href="http://en.wikipedia.org/wiki/e-commerce"
                className="hyperlink"
              >
                e-commerce action-items
              </a>
              , reintermediate, ecologies paradigms wireless share life-hacks
              create innovative harness. Evolve solutions rich-clientAPIs
              synergies harness relationships virtual vertical facilitate
              end-to-end, wireless, evolve synergistic synergies.
            </p>
            <p>
              Cross-platform, evolve, ROI scale cultivate eyeballs addelivery,
              e-services content cross-platform leverage extensible viral
              incentivize integrateAJAX-enabled sticky evolve magnetic cultivate
              leverage; cutting-edge. Innovate, end-to-end podcasting,
              whiteboard streamline e-business social; compelling, "cross-media
              exploit infomediaries innovative integrate integrateAJAX-enabled."
              Killer interactive reinvent, cultivate widgets leverage morph.
            </p>
          </ids-editor>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsEditor;
