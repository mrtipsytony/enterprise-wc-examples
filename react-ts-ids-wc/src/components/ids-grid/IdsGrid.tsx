import React from 'react';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';
// import type IdsLayoutGrid from  'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
// import type IdsLayoutGridCell from  'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';


interface IdsGridProps {
  id?: string;
  class?: string;
  style?: { [key: string]: string }
  children?: any;
  slot?: string;

  cols?: number | string;
  rows?: number;
  fill?: boolean;
  fixed?: boolean | string;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  auto?: boolean;
  autoRows?: React.CSSProperties['gridAutoRows'];
  autoFlow?: React.CSSProperties['gridAutoFlow'];
  justify?: React.CSSProperties['justifyContent'];
  maxColWidth?: string | number;
  minColWidth?: string | number;
  noMargins?: boolean;
}

interface IdsGridCellProps {
  children?: any;
  id?: string;
  class?: string;
  style?: { [key: string]: string }
  auto?: boolean;
  justify?: string;
  rowSpan?: number;
  colSpan?: number | string | 'full';
  colSpanXs?: number | string;
  colSpanSm?: number | string;
  colSpanMd?: number | string;
  colSpanLg?: number | string;
  colSpanXl?: number | string;
  colSpanXxl?: number | string;
  colStart?: number | string;
  colEnd?: number | string;
}

export const IdsGrid: React.FC<IdsGridProps> = (props) => (
  <ids-layout-grid
    id={props.id}
    class={props.class}
    slot={props.slot}
    style={props.style}
    auto={props.auto}
    auto-rows={props.autoRows}
    auto-flow={props.autoFlow}
    cols={props.cols}
    rows={props.rows}
    fill={props.fill}
    fixed={props.fixed}
    gap={props.gap}
    justify-contnet={props.justify}
    max-col-width={props.maxColWidth}
    min-col-width={props.minColWidth}
    no-margins={props.noMargins}
  >
    {props.children}
  </ids-layout-grid>
);

export const IdsGridCell: React.FC<IdsGridCellProps> = (props) => (
  <ids-layout-grid-cell
    id={props.id}
    class={props.class}
    style={props.style}
    auto={props.auto}
    justify={props.justify}
    row-span={props.rowSpan}
    col-span={props.colSpan}
    col-span-xs={props.colSpanXs}
    col-span-sm={props.colSpanSm}
    col-span-md={props.colSpanMd}
    col-span-lg={props.colSpanLg}
    col-span-xl={props.colSpanXl}
    col-span-xxl={props.colSpanXxl}
    col-start={props.colStart}
    col-end={props.colEnd}
  >
    {props.children}
  </ids-layout-grid-cell>
);

export default IdsGrid;