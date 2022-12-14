import { GridDensity } from '@mui/x-data-grid'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'

import DataTableView from './DataTable.container'

interface DataTableProps {
  columns: any
  data: any
  showHeader: boolean
  handleCellChange: any
  deleteData: any
  pageSize?: number
  urlPath?: string
  height?: number | string
  width?: number | string
  loading: boolean
  tableDensity?: GridDensity | undefined
  checkboxSelection: boolean
  headerAction: any
  showLauncher?: boolean
  customFilter?: any
  headerButton: any
  disableColumnMenu: boolean
  noRowsLabel: string
  headerActionTitle: object
  useServerSidePagination: any
  displayedTexts: {
    newTeamRequest: string
    teamRequestAccepted: string
    teamUpdate: string
    newNotification: string
    joinedYourTeam: string
    wantsToJoin: string
    invitedYou: string
    addedYou: string
    leftYourTeam: string
    newTeamLeader: string
    userWasKicked: string
  }
}

export const DataTable = ({
  columns,
  data,
  showHeader,
  handleCellChange,
  deleteData,
  pageSize,
  urlPath = 'username',
  height = '70vh',
  width = '100%',
  loading,
  tableDensity,
  checkboxSelection,
  headerAction,
  showLauncher,
  customFilter,
  headerButton,
  disableColumnMenu,
  noRowsLabel,
  headerActionTitle,
  useServerSidePagination,
  displayedTexts
}: DataTableProps) => {
  const [selectedOpen, setSelectedOpen] = useState<boolean>(false)
  const [filterValue, setFilterValue] = useState<string>('')
  const [selectionModel, setSelectionModel] = useState<any>([])
  const [rows, setRows] = useState<any>([])

  const initialRows = useMemo(() => data, [data])

  const [snackbar, setSnackbar] = useState<any>({
    severity: 'warning',
    message: '',
    open: false
  })

  useEffect(() => {
    if (data) setRows(data)
  }, [data])

  const router = useRouter()

  const launch = useCallback(
    () => router.push(router.asPath + '/' + data[selectionModel[0]][urlPath]),
    [router, data, selectionModel, urlPath]
  )

  const handleDeleteError = () => {
    setSelectionModel([])
    handleSnackBarChange(true, 'error', 'An error has occured while trying to delete.')
  }

  const handleDeleteSuccess = () => {
    const newData = rows.filter((item: any) => !selectionModel.includes(item.id))
    setRows(newData)
    setSelectionModel([])
    handleSnackBarChange(true, 'success', 'Successfully deleted.')
  }

  const deleteAction = async () => {
    const resp = await deleteData(selectionModel)
    if (resp) return handleDeleteSuccess()

    return handleDeleteError()
  }

  const filterRows = useCallback(
    (filterValue: any, rowsData: any) => {
      return customFilter
        ? customFilter(filterValue)
        : rowsData.filter((item: any) => {
            return Object.keys(item).some((key) => {
              return (
                String(item[key]).toLowerCase().includes(filterValue.toLowerCase()) ||
                (item[key] &&
                  typeof item[key] === 'object' &&
                  Object.keys(item[key]).some((key2) => {
                    return String(item[key][key2]).toLowerCase().includes(filterValue.toLowerCase())
                  })) ||
                (key === 'technologies' &&
                  item[key] instanceof Array &&
                  item[key].some((tech: any) =>
                    tech.name.toLowerCase().includes(filterValue.toLowerCase())
                  ))
              )
            })
          })
    },
    [customFilter]
  )

  const handleFilter = useCallback(
    (val: string) => {
      setFilterValue(val)
      const filteredRows = filterRows(val, initialRows)
      setRows(() => (val === '' ? data : filteredRows))
    },
    [initialRows, data, filterRows]
  )

  const handleClose = () => setSelectionModel([])

  const handleSnackBarChange = (open: boolean, severity: string, message: string) =>
    setSnackbar({ ...snackbar, open, severity, message })

  useEffect(() => {
    selectionModel?.length > 0 ? setSelectedOpen(true) : setSelectedOpen(false)
  }, [selectionModel])

  const launchCallback = selectionModel?.length === 1 && showLauncher ? launch : null

  return (
    <DataTableView
      data={rows}
      height={height}
      width={width}
      loading={loading}
      columns={columns}
      checkboxSelection={checkboxSelection}
      showHeader={showHeader}
      pageSize={pageSize || 10}
      filterValue={filterValue}
      handleFilter={handleFilter}
      handleCellChange={handleCellChange}
      headerAction={headerAction}
      headerActionTitle={headerActionTitle}
      launch={launchCallback}
      selectionModel={selectionModel}
      selectedOpen={selectedOpen}
      snackbar={snackbar}
      setSelectionModel={setSelectionModel}
      handleClose={handleClose}
      deleteAction={deleteAction}
      tableDensity={tableDensity}
      headerButton={headerButton}
      disableColumnMenu={disableColumnMenu}
      noRowsLabel={noRowsLabel}
      serverSideMode={useServerSidePagination}
      pagination={useServerSidePagination}
      displayedTexts={displayedTexts}
    />
  )
}

DataTable.defaultProps = {
  urlPath: 'username',
  height: '70vh',
  width: '100%'
}
