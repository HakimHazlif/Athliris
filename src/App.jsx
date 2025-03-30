import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './features/auth/pages/Login'
import Signup from './features/auth/pages/Signup'
import { Provider } from 'react-redux'
import store from './app/store'
import ResetPassword from './features/auth/pages/ResetPassword'
import ChangePassword from './features/auth/pages/ChangePassword'
import SendResetEmail from './features/auth/pages/SendResetEmail'
import { Toaster } from 'react-hot-toast'
import ThemeContextProvider from './context/ThemeContext'
import Survey from './features/survey/pages/Survey'
import PolicyPage from './pages/PolicyPage'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />}>
              <Route index element={<SendResetEmail />} />
              <Route path="change" element={<ChangePassword />} />
            </Route>
            <Route path="health-fitness-survey" element={<Survey />} />
            <Route
              path="terms-of-service"
              element={<PolicyPage document="termsOfService" />}
            />
            <Route
              path="privacy-policy"
              element={<PolicyPage document="privacyPolicy" />}
            />
          </Routes>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
                style: {
                  color: 'green',
                },
              },
              error: {
                duration: 5000,
                style: {
                  color: 'red',
                },
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: '#faf7f5',
              },
            }}
          />
        </Provider>
      </QueryClientProvider>
    </ThemeContextProvider>
  )
}

export default App
