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
import DashboardLayout from './pages/DashboardLayout'
import Progress from './features/userProgress/page/Progress'
import Workouts from './features/workouts/page/Workouts'
import Nutrition from './features/nutrition/page/Nutrition'
import Settings from './features/settings/page/Settings'
import ProtectedRoute from './components/ProtectedRoute'
import WorkoutDetails from './features/workouts/page/WorkoutDetails'
import WorkoutByBodyPart from './features/workouts/page/WorkoutByBodyPart'
import WorkoutByEquipment from './features/workouts/page/WorkoutByEquipment'
import WorkoutByMuscle from './features/workouts/page/WorkoutByMuscle'
import RecipePage from './features/nutrition/page/RecipePage'

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

            <Route
              path="user/:username"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route path="workouts" element={<Workouts />} />
              <Route path="nutrition" element={<Nutrition />} />
              <Route path="progress" element={<Progress />} />
              <Route path="settings" element={<Settings />} />
              <Route path="workouts/:exerciseId" element={<WorkoutDetails />} />
              <Route
                path="workouts/bodyPart/:bodyPart"
                element={<WorkoutByBodyPart />}
              />
              <Route
                path="workouts/equipment/:equipment"
                element={<WorkoutByEquipment />}
              />
              <Route
                path="workouts/muscle/:muscle"
                element={<WorkoutByMuscle />}
              />
              <Route path="nutrition/recipe/:id" element={<RecipePage />} />
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
