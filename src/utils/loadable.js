import Loadable from 'react-loadable'
import Loading from 'components/Loading'

export default comp =>
  Loadable({
    loader: () => import(comp),
    loading: Loading,
  })
