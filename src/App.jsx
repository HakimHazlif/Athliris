import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './features/auth/pages/Login'
import Signup from './features/auth/pages/Signup'
import { Provider } from 'react-redux'
import store from './app/store'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
