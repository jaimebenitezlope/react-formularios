
import Container from './components/container/Container';

import FormDiv from './components/formDiv/FormDiv';

import HeaderDiv from './components/headerDiv/HeaderDiv';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<HeaderDiv/>
				<FormDiv/>
				
			</Container>
		</>
	);
};

export default App;
