import React from 'react'
import ToDoList from './components/ToDoList';
import store from './components/redux/store';
import {Provider} from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
    <div>
      <ToDoList />
    </div>
    </Provider>
  )
}

export default App
