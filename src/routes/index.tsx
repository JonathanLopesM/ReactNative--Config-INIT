
import { DrawerRoutes } from './drawer.routes'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'
import { ClientsDrawerRoutes } from './client.drawer.routes';

export function Routes(){
  const { authenticated } = useContext(AuthContext)
  return (
      <>
        {
          !authenticated ? <ClientsDrawerRoutes /> : <DrawerRoutes />
        }
      </>
  )
}