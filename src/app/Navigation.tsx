import { HashRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * Available routes.
 */
import { Splash } from '~/pages/Splash'

/**
 * Enabled routes.
 */
export function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Splash} />
      </Switch>
    </Router>
  )
}
