import * as S from '../../styles/layout/HeaderStyle';
import Logo from '../../assets/images/Logo.svg';

const Header = () => {
	return (
		<S.HeaderContainer>
			<S.Inner>
				<img src={Logo} alt="logo" />
			</S.Inner>
			<S.BottomBorder />
		</S.HeaderContainer>
	);
};

export default Header;
