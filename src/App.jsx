import Button from './components/button/Button';
import Container from './components/container/Container';
import Form from './components/form/Form';
import Header from './components/header/header';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<Header />
				<Button/>
				<Form />
			</Container>
		</>
	);
};

export default App;
