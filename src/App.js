import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Content from './components/Content'
import './App.css'

// const choicesList = [
//   {
//     id: 'ROCK',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
//   },
//   {
//     id: 'SCISSORS',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
//   },
//   {
//     id: 'PAPER',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
//   },
// ]

const App = () => (
  <>
    <Header />
    <div className="dash-content-container">
      <Dashboard />
      <Content />
    </div>
  </>
)

export default App
