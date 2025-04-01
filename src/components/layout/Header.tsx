import * as S from '../../styles/layout/HeaderStyle';
import Logo from '../../assets/images/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<S.HeaderContainer>
			<S.Inner>
				<img src={Logo} alt="logo" onClick={()=>navigate('/')}/>
			</S.Inner>
			<S.BottomBorder />
		</S.HeaderContainer>
	);
};

export default Header;
