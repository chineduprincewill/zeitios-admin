import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./public/landing/Pages/Home";
import Login from "./public/authentication/Login";
import Register from "./public/authentication/Register";
import Error from "./public/landing/Pages/Error";
import RegisterOptions from "./public/authentication/RegisterOptions";
import ResendCode from "./public/authentication/ResendCode";
import Header from "./common/Header";
import Dashboard from "./protected/admin/Dashboard";
import PrivateRoute from "./common/PrivateRoute";
import AuthContextProvider from "./context/AuthContext";
import FreelancerDashboard from "./protected/freelancing/pages/FreelancerDashboard";
import FreelancerPayouts from "./protected/freelancing/pages/FreelancerPayouts";
import FreelancerReviews from "./protected/freelancing/pages/FreelancerReviews";
import FreelancerStatment from "./protected/freelancing/pages/FreelancerStatment";
import Jobs from "./protected/freelancing/pages/Jobs";
import ManageProjects from "./protected/freelancing/pages/ManageProjects";
import ManageServices from "./protected/freelancing/pages/ManageServices";
import ClientDashboard from "./protected/client/pages/ClientDashboard";
import ClientPayouts from "./protected/client/pages/ClientPayouts";
import ClientReviews from "./protected/client/pages/ClientReviews";
import ClientStatement from "./protected/client/pages/ClientStatement";
import ClientMessages from "./protected/client/pages/ClientMessages";
import MyProject from "./protected/client/pages/MyProject";
import Saved from "./protected/client/pages/Saved";
import ManageJobs from "./protected/freelancing/pages/ManageJobs";
import FreelancerMessages from "./protected/freelancing/pages/FreelancerMessages";
import FreelancerProjects from "./protected/freelancing/pages/FreelancerProjects";
import Projects from "./protected/admin/pages/Projects";
import Payouts from "./protected/admin/pages/Payouts";
import Statement from "./protected/admin/pages/Statement";

function App() {
  return (
    <>
      <div className="">
        <AuthContextProvider>
          <Router>
            {localStorage.getItem("logged_in") !== null && <Header />}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<Login />} />
              <Route
                path="/register-options"
                exact
                element={<RegisterOptions />}
              />
              <Route path="/register" exact element={<Register />} />

              <Route path="/resend-code" exact element={<ResendCode />} />
              <Route
                path="/dashboard"
                exact
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-dashboard"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-projects"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerProjects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-payouts"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerPayouts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-reviews"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerReviews />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-statement"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerStatment />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-messages"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerMessages />
                  </PrivateRoute>
                }
              />
              <Route
                path="/jobs"
                exact
                element={
                  <PrivateRoute>
                    <Jobs />
                  </PrivateRoute>
                }
              />
              <Route
                path="/jobs/all"
                exact
                element={
                  <PrivateRoute>
                    <ManageJobs />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manage-projects"
                exact
                element={
                  <PrivateRoute>
                    <ManageProjects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manage-services"
                exact
                element={
                  <PrivateRoute>
                    <ManageServices />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-dashboard"
                exact
                element={
                  <PrivateRoute>
                    <ClientDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-payouts"
                exact
                element={
                  <PrivateRoute>
                    <ClientPayouts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-reviews"
                exact
                element={
                  <PrivateRoute>
                    <ClientReviews />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-statement"
                exact
                element={
                  <PrivateRoute>
                    <ClientStatement />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-messages"
                exact
                element={
                  <PrivateRoute>
                    <ClientMessages />
                  </PrivateRoute>
                }
              />
              <Route
                path="/saved"
                exact
                element={
                  <PrivateRoute>
                    <Saved />
                  </PrivateRoute>
                }
              />
              <Route
                path="/my-project"
                exact
                element={
                  <PrivateRoute>
                    <MyProject />
                  </PrivateRoute>
                }
              />
              <Route
                path="/projects"
                exact
                element={
                  <PrivateRoute>
                    <Projects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/payouts"
                exact
                element={
                  <PrivateRoute>
                    <Payouts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/statement"
                exact
                element={
                  <PrivateRoute>
                    <Statement />
                  </PrivateRoute>
                }
              />
              <Route path="*" exact element={<Error />} />

              {/* <ProtectedRoute path='/' exact>

              </ProtectedRoute> */}
            </Routes>
          </Router>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
