import './App.css'
import "./index.css";
import ApplicationLayout from './layouts/ApplicationLayout/ApplicationLayout'
import { AppRoutes } from './Routes'

function App() {

  return (
    <ApplicationLayout>
      <AppRoutes />
    </ApplicationLayout>
  )
}

export default App
