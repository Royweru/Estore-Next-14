import { isAdmin } from '@/lib/isAdmin'

import { App } from './app'
import { redirect } from 'next/navigation'

const AdminPage = () => {
if (!isAdmin()) return redirect("/")
  return (
    <App />
  )
}

export default AdminPage