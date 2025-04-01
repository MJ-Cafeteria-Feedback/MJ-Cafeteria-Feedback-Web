import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SelectMealPage from './pages/SelectMealPage';
import ReviewPage from './pages/ReviewPage';
import StarPage from './pages/StarPage';
import SelectReviewMenu from './pages/SelectReviewMenu';
import LoginPage from './pages/LoginPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/select-meal" element={<SelectMealPage />} />
					<Route path="/review" element={<ReviewPage />}
					/>
					<Route path="/star" element={<StarPage />} />
					<Route path="/select-review-menu" element={<SelectReviewMenu />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
