// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  const items: VerticalNavItemsType = [
    {
      title: 'داشبورد',
      icon: 'tabler:smart-home',
      path: '/dashboards/ecommerce'
    },
    {
      sectionTitle: 'کاربران'
    },
    {
      title: 'سفارشات',
      icon: 'tabler:truck-delivery',
      path: '/services/orders'
    },
    {
      sectionTitle: 'ادمین ها'
    },
    {
      title: 'مدیریت ادمین ها',
      icon: 'tabler:users',
      path: '#'
    },
    {
      title: 'نقش ها و سطوح دسترسی',
      icon: 'tabler:license',
      path: '#'
    },
    {
      sectionTitle: 'اعلانات'
    },
    {
      title: 'مدیریت اعلانات',
      icon: 'tabler:bell',
      path: '#'
    },
    {
      sectionTitle: 'فرم ها'
    },
    {
      title: 'مدیریت فرم ها',
      icon: 'tabler:news',
      path: '#'
    },
    {
      title: 'فرم ساز',
      icon: 'tabler:wand',
      path: '#'
    }
  ]

  return items
}

export default navigation
