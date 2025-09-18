import { signInWithPopup, signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../config/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, removeUserData } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";
import { toggleLogin } from "../utils/toogleSlice";

function SigninBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.authSlice.userData);

    async function handleAuth() {
        try {
            let data = await signInWithPopup(auth, provider);
            const userData = {
                name: data.user.displayName,
                photo: data.user.photoURL,
            };
            dispatch(addUserData(userData));
            dispatch(toggleLogin())
            navigate("/");
        } catch (error) {
            console.warn("Firebase auth not configured, using demo login");
            // Demo login for testing purposes
            const demoUserData = {
                name: "Demo User",
                photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2RjEiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5EVTwvdGV4dD4KPC9zdmc+",
            };
            dispatch(addUserData(demoUserData));
            dispatch(toggleLogin())
            navigate("/");
        }
    }

    async function handleLogout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.warn("Firebase auth not configured, performing demo logout");
        }
        dispatch(removeUserData());
        dispatch(toggleLogin())
    }

    return (
        <>
            {userData ? (
                <button
                    onClick={handleLogout}
                    className="my-5 w-full text-2xl p-5 bg-[#fc8019] text-white"
                >
                    Logout
                </button>
            ) : (
                <button
                    onClick={handleAuth}
                    className="my-5 w-full text-2xl p-5 bg-[#fc8019] text-white"
                >
                    Login with GOOGLE
                </button>
            )}
        </>
    );
}

export default SigninBtn;
