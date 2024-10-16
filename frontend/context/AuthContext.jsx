// import { createContext, useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";

// export const AuthContext = createContext();

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// }

// export const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkUserloggeIn = async () => {
//       try {
//         const res = await fetch(`/api/auth/check`, {
//           credentials: "include",
//         });
//         const data = await res.json();

//         console.log(data);

//         setAuthUser(data.user);

//       } catch (error) {
//         toast.error(error.message);

//       }
//     };

//     checkUserloggeIn();
//   }, []);

//   return <AuthContext.Provider value={{authUser, setAuthUser }}>{children}</AuthContext.Provider>;
// };


import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkUserLoggedIn = async () => {

			setLoading(true);
			try {

				const response = await fetch("/api/auth/check", { credentials: "include" });
				const data = await response.json();
				setAuthUser(data.user); // null or authenticated user object
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		checkUserLoggedIn();
	}, []);

	return <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>{children}</AuthContext.Provider>;
};