// ** Next Import
import dynamic from 'next/dynamic'

// ! To avoid 'Window is not defined' error
export const ReactApexcharts = dynamic(() => import('react-apexcharts'), { ssr: false })
