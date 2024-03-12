'use state'

import { Icon } from '@iconify/react'
import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Link,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { useState } from 'react'

const columns: GridColDef[] = [
  {
    field: 'doc_number',
    headerName: 'شماره پرونده',
    maxWidth: 200
  },
  {
    field: 'submit_number',
    headerName: 'شماره ثبت سفارش',
    maxWidth: 200
  },
  {
    field: 'submit_date',
    headerName: 'تاریخ ثبت سفارش',
    maxWidth: 200
  },
  {
    field: 'expire_date',
    headerName: 'تاریخ اعتبار سفارش',
    maxWidth: 200
  },
  {
    field: 'status',
    headerName: 'وضعیت سفارش',
    maxWidth: 200
  },
  {
    field: 'action',
    headerName: 'اقدامات',
    maxWidth: 40
  }
]

interface Order {
  doc_number: string | number
  submit_number: string
  submit_date: string | Date
  expire_date: string | Date
  status: 'pending' | 'pending' | 'docs_verified' | 'completed'
}

interface Row {
  order: Order
  icon: any
}

const rows: Row[] = [
  {
    order: {
      doc_number: 667066269,
      status: 'pending',
      submit_date: '1402/07/27',
      expire_date: '1403/01/28',
      submit_number: '24483903'
    },
    icon: 'tabler:dots-vertical'
  }
]

const OrdersList = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Breadcrumbs
        style={{
          marginBottom: '10px'
        }}
        separator={<Icon icon={'tabler:chevron-left'} />}
      >
        <Link underline='hover' color='inherit' href='#'>
          خدمات
        </Link>
        <Link underline='hover' color='inherit' href='#' aria-current='page'>
          سفارشات
        </Link>
      </Breadcrumbs>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.field}
                      style={{
                        fontSize: '15px',
                        fontWeight: 'bold'
                      }}
                    >
                      {column.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.order.doc_number}</TableCell>
                    <TableCell>{row.order.submit_number}</TableCell>
                    <TableCell>{row.order.submit_date as string}</TableCell>
                    <TableCell>{row.order.expire_date as string}</TableCell>
                    <TableCell>{row.order.status}</TableCell>
                    <TableCell>
                      <Button
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        <Icon icon={row.icon} fontSize={20} />
                      </Button>

                      <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button'
                        }}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left'
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left'
                        }}
                      >
                        <MenuItem
                          onClick={handleClose}
                          style={{
                            display: 'flex',
                            gap: '10px'
                          }}
                        >
                          <Icon icon={'tabler:eye'} fontSize={16} />
                          <span>مشاهده جزییات</span>
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose}
                          style={{
                            display: 'flex',
                            gap: '10px'
                          }}
                        >
                          <Icon icon={'tabler:edit'} fontSize={16} />
                          <span>ویرایش</span>
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose}
                          style={{
                            display: 'flex',
                            gap: '10px'
                          }}
                        >
                          <Icon icon={'tabler:trash'} />
                          <span>حذف</span>
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  )
}

export default OrdersList
