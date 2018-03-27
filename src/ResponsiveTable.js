import React, { Component } from 'react'
import Hidden from 'material-ui/Hidden'
import { withStyles } from 'material-ui/styles'

import DataList from './DataList'
import DataTable from './DataTable'

const styles = {
  root: {},
}

/**
 * Responsive read-only table (desktop devices) <-> read-only expandable list (tablet/mobile devices) for material-ui 1.0-beta.
 */
class ResponsiveTable extends Component {
  handleChangePage = (event, page) => this.props.onChangePage(event, page)

  render() {
    const {
      classes,
      columns,
      count,
      data,
      excludePrimaryFromDetails,
      noContentText,
      tableBreakpoints,
      listBreakpoints,
      page,
      rowsPerPage,
      showPagination,
      ExpansionPanelDetailsProps,
      ExpansionPanelDetailsTypographyProps,
      ExpansionPanelMoreIconProps,
      ExpansionPanelProps,
      ExpansionPanelSummaryProps,
      ExpansionPanelSummaryTypographyProps,
      TableBodyCellProps,
      TableBodyProps,
      TableBodyRowProps,
      TableHeadCellProps,
      TableHeadProps,
      TableHeadRowProps,
      TablePaginationProps,
      TableProps,
    } = this.props

    return (
      <div className={classes.root}>
        {/* DESKTOP BIG TABLE */}

        <Hidden only={tableBreakpoints || ['xs', 'sm', 'md']}>
          <DataTable
            columns={columns}
            count={count}
            data={data}
            noContentText={noContentText}
            page={page}
            rowsPerPage={rowsPerPage}
            showPagination={showPagination}
            TableBodyCellProps={TableBodyCellProps}
            TableBodyProps={TableBodyProps}
            TableBodyRowProps={TableBodyRowProps}
            TableHeadCellProps={TableHeadCellProps}
            TableHeadProps={TableHeadProps}
            TableHeadRowProps={TableHeadRowProps}
            TablePaginationProps={TablePaginationProps}
            TableProps={TableProps}
            onChangePage={this.handleChangePage}
          />
        </Hidden>

        {/* MOBILE EXPANDABLE LIST OF CARDS */}

        <Hidden only={listBreakpoints || ['lg', 'xl']}>
          <DataList
            columns={columns}
            count={count}
            data={data}
            excludePrimaryFromDetails={excludePrimaryFromDetails}
            noContentText={noContentText}
            page={page}
            rowsPerPage={rowsPerPage}
            showPagination={showPagination}
            ExpansionPanelDetailsProps={ExpansionPanelDetailsProps}
            ExpansionPanelDetailsTypographyProps={
              ExpansionPanelDetailsTypographyProps
            }
            ExpansionPanelMoreIconProps={ExpansionPanelMoreIconProps}
            ExpansionPanelProps={ExpansionPanelProps}
            ExpansionPanelSummaryProps={ExpansionPanelSummaryProps}
            ExpansionPanelSummaryTypographyProps={
              ExpansionPanelSummaryTypographyProps
            }
            TablePaginationProps={TablePaginationProps}
            onChangePage={this.handleChangePage}
          />
        </Hidden>
      </div>
    )
  }
}

export default withStyles(styles)(ResponsiveTable)
