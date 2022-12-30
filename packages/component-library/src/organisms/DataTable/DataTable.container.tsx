import { Card } from '@mui/material'
import { DataGrid, GridDensity } from '@mui/x-data-grid'

import { TableHeader } from '@nuwe/materio'
import { MessageAlert } from '../MessageAlert'

interface DataTableProps {
  checkboxSelection: boolean
  columns: []
  data: []
  deleteAction: () => void
  disableColumnMenu: boolean
  filterValue: string
  handleCellChange: (newEditCellProps: any) => void
  handleClose: () => void
  handleFilter: (filter: any) => void
  headerAction: () => void
  headerActionTitle: object
  headerButton: object
  height: string | number
  launch: (() => Promise<boolean>) | null
  loading: boolean
  noRowsLabel: string
  pagination: boolean
  pageSize: number
  selectedOpen: boolean
  selectionModel: []
  setSelectionModel: (newSelectionModel: any) => void
  serverSideMode: object
  showHeader: boolean
  snackbar: {
    severity: 'error' | 'info' | 'success' | 'warning' | undefined
  }
  tableDensity: GridDensity | undefined
  width: string | number
}

const DataTable = ({
  checkboxSelection = false,
  columns,
  data,
  deleteAction,
  disableColumnMenu,
  filterValue,
  handleCellChange,
  handleClose,
  handleFilter,
  headerAction,
  headerActionTitle,
  headerButton,
  height,
  launch,
  loading,
  noRowsLabel,
  pagination,
  selectedOpen,
  selectionModel,
  serverSideMode = {},
  setSelectionModel,
  showHeader,
  snackbar,
  tableDensity,
  width
}: DataTableProps) => {
  return (
    <div style={{ width, height }}>
      <MessageAlert
        cancel={handleClose}
        title={`You have selected ${selectionModel?.length}.`}
        open={selectedOpen}
        deleteAction={deleteAction}
        launch={launch}
        severity={snackbar?.severity}
      />
      <Card>
        <DataGrid
          pagination
          rows={data}
          disableSelectionOnClick={true}
          pageSize={10}
          columns={columns}
          loading={loading}
          density={tableDensity || 'standard'}
          checkboxSelection={checkboxSelection}
          disableColumnMenu={disableColumnMenu}
          onSelectionModelChange={(newSelectionModel) => setSelectionModel(newSelectionModel)}
          onEditCellPropsChange={(newEditCellProps) => handleCellChange(newEditCellProps)}
          components={{
            Toolbar: showHeader ? TableHeader : null,
            NoRowsOverlay: () => (
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {noRowsLabel || 'No results found'}
              </div>
            )
          }}
          componentsProps={{
            toolbar: {
              value: filterValue,
              clearSearch: () => handleFilter(''),
              onChange: (event: any) => handleFilter(event.target.value),
              toggle: headerAction,
              ...(headerActionTitle && { title: () => headerActionTitle }),
              ...(headerButton && { headerButton: () => headerButton })
            }
          }}
          sx={{
            height: height || '500px',
            '& .MuiDataGrid-columnHeaders': {
              borderRadius: showHeader && '0px'
            }
          }}
          {...serverSideMode}
        />
      </Card>
    </div>
  )
}

export default DataTable
