import './App.css'
import { Greet } from './components/Greet'

function App() {
	return (
		<div className='App'>
			<Greet name='JM' messageCount={20} isLoggedIn={false} />
		</div>
	)
}

export default App
