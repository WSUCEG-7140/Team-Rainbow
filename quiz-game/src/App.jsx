import { BrowserRouter, Route } from "react-router-dom"
import './App.css'
import AccountPage from './Components/Account'
import LandingPage from './Components/Landing'
import Navbar from './Components/Navbar'
import PasswordForgetPage from './Components/PasswordForget'
import SignInPage from './Components/SignIn'
import SignUpPage from './Components/SignUp'
import HomePage from './Components/Student/Home'
import Quiz from './Components/Student/Quiz'
import AddQuiz from './Components/Faculty/AddQuiz'
import * as routes from "./constants/routes"


function App() {
  return (
      <BrowserRouter>
      <div className='app' >
      <Navbar />
      <Route exact path={routes.LANDING} component={LandingPage}/>
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.QUIZ+':id'} component={Quiz} />
      <Route exact path={routes.ADD_QUIZ} component={AddQuiz} />

      <Route path ="/*" component={E404} />

      
        </div>
  </BrowserRouter> 
  )
}

export default withAuthentication(App);
