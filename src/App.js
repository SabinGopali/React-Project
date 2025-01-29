import React from 'react'

export default function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path = "/about">
          <about/>

          </Route>

          <Route path = "/">
            <home/>          
          </Route>

        </Switch>
      </Router>
      
    </div>
  )
}
