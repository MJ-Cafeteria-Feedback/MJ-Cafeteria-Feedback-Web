import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SelectMealPage from './pages/SelectMealPage';
import ReviewPage from './pages/ReviewPage';
import StarPage from './pages/StarPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/select-meal" element={<SelectMealPage />} />
					<Route path="/review" element={<ReviewPage />}
					/><Route path="/star" element={<StarPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
