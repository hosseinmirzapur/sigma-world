import { Icon } from '@iconify/react'
import {
  Breadcrumbs,
  Card,
  CardContent,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import OptionsMenu from 'src/@core/components/option-menu'

const columns: GridColDef[] = [
  {
    field: 'doc_number',
    headerName: 'شماره پرونده',
    maxWidth: 250
  },
  {
    field: 'submit_number',
    headerName: 'شماره ثبت سفارش',
    maxWidth: 250
  },
  {
    field: 'submit_date',
    headerName: 'تاریخ ثبت سفارش',
    maxWidth: 150
  },
  {
    field: 'expire_date',
    headerName: 'تاریخ اعتبار سفارش',
    maxWidth: 150
  },
  {
    field: 'status',
    headerName: 'وضعیت سفارش',
    maxWidth: 100
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
  status: 'pending' | 'prepaid' | 'docs_verified' | 'completed'
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
  return (
    <>
      <Breadcrumbs
        style={{
          marginBottom: '10px'
        }}
        separator={<Icon icon={'tabler:chevron-left'} />}
      >
        <Link underline='hover' color='inherit' href='#'>
          کاربران
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
                      <OptionsMenu
                        iconButtonProps={{ size: 'small' }}
                        menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
                        options={[
                          {
                            text: 'مشاهده جزییات',
                            icon: <Icon icon={'tabler:eye'} fontSize={'1.25rem'} />
                          },
                          {
                            text: 'ویرایش',
                            icon: <Icon icon='tabler:pencil' fontSize='1.25rem' />
                          },
                          {
                            text: 'حذف',
                            icon: <Icon icon='tabler:trash' fontSize='1.25rem' />
                          }
                        ]}
                      />
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
