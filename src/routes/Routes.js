import React from "react";
const Fail = React.lazy(() => import("../pages/Checkout/Fail"));
const Sucess = React.lazy(() => import("../pages/Checkout/Sucess"));

const Home = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/Home/About"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Entertainment = React.lazy(() => import("../pages/Products/Entertainment"));
const Favourites = React.lazy(() => import("../pages/Favourites"));
const Laptops = React.lazy(() => import("../pages/Products/Laptops"));
const Mobiles = React.lazy(() => import("../pages/Products/Mobiles"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
const AdminDashBoard = React.lazy(() => import("../pages/Profile/AdminDashBoard"));
const Login = React.lazy(() => import("../pages/Auth/Login"));
const SignUp = React.lazy(() => import("../pages/Auth/SignUp"));
const ResetPassword = React.lazy(() => import("../pages/Auth/ResetPassword"));




const components = {
	Home: {
		path: "/base/home",
		name: "home",
		element: <Home />,
	},
	About: {
		path: "/base/about",
		name: "abour",
		element: <About />,
	},
	Profile: {
		path: "/base/profile",
		name: "Profile",
		element: <Profile />,
	},
	Cart: {
		path: "/base/cart",
		name: "cart",
		element: <Cart />,
	},
	Entertainment: {
		path: "/base/Entertainment",
		name: "Entertainment",
		element: <Entertainment />,
	},
	Login: {
		path: "/",
		name: "Login",
		element: <Login />,
	},

	ResetPassword: {
		path: "/reset-password",
		name: "ResetPassword",
		element: <ResetPassword />,
	},

	Favourites: {
		path: "/base/Favourites",
		name: "Favourites",
		element: <Favourites />,
	},
    Laptops: {
		path: "/base/Laptops",
		name: "Laptops",
		element: <Laptops />,
	},
    Mobiles: {
		path: "/base/Mobiles",
		name: "Mobiles",
		element: <Mobiles />,
	},
    AdminDashBoard: {
		path: "/base/AdminDashBoard",
		name: "AdminDashBoard",
		element: <AdminDashBoard />,
	},
	SignUp: {
		path: "/signUp",
		name: "SignUp",
		element: <SignUp />,
	},
	PaymentSucess:{
		path: "/base/checkout-sucess",
		name: "sucess",
		element: <Sucess/>,
	},
	PaymentFail:{
		path: "/base/checkout-fail",
		name: "fail",
		element: <Fail />,
	}
};
const rolesConfig = {
	Admin: {
		routes: [
			components.Home,
			components.About,
			components.Profile,
            components.Cart,
            components.Favourites,
            components.Laptops,
            components.Mobiles,
            components.Entertainment,
            components.AdminDashBoard,
			components.PaymentFail,
			components.PaymentSucess,
		],
	},
	user: {
		routes: [
            components.Home,
			components.About,
			components.Profile,
            components.Cart,
            components.Favourites,
            components.Laptops,
            components.Mobiles,
            components.Entertainment,
			components.PaymentFail,
			components.PaymentSucess,
        ],
	},
};
const BasicRoutesConfig = [
	components.Login,
	components.ResetPassword,
	components.SignUp,
];
export { rolesConfig, BasicRoutesConfig };