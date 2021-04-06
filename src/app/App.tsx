import { render } from 'react-dom';

/**
 * Application.
 */
import { Providers } from './Providers'
import { AppNavigation } from './Navigation'

/**
 * Render app.
 */
const App = () => (
  <Providers>
    <AppNavigation />
  </Providers>
)

render(<App />, document.getElementById('root'));

/**
 * Enable hot reload when in development mode.
 */
if (process.env.NODE_ENV == 'development' && (module as any).hot) {
  (module as any).hot.accept();
}
