import { createSlice } from "@reduxjs/toolkit";

// Add sanitization to avoid external placeholder avatar URLs persisting from older sessions
const DEFAULT_AVATAR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2RjEiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5EVTwvdGV4dD4KPC9zdmc+";

const sanitizeUser = (user) => {
    if (!user) return null;
    const photo = user.photo;
    const isBad = typeof photo === "string" && /(^https?:\/\/)?([\w.-]*placeholder\.com|via\.placeholder\.com)/i.test(photo);
    const safePhoto = !photo || isBad ? DEFAULT_AVATAR : photo;
    return { ...user, photo: safePhoto };
};

const savedUserRaw = JSON.parse(localStorage.getItem("userData"));
const savedUser = sanitizeUser(savedUserRaw);
if (savedUserRaw && savedUser?.photo !== savedUserRaw.photo) {
    // migrate stored value to sanitized version to prevent future loads from using external placeholder
    localStorage.setItem("userData", JSON.stringify(savedUser));
}

const authSlice = createSlice({
    name : "AuthSlice",
    initialState : {
        userData : savedUser
    },
    reducers : {
        addUserData : (state,action) => {
            const sanitized = sanitizeUser(action.payload);
            state.userData = sanitized
            localStorage.setItem("userData", JSON.stringify(sanitized))
        },
        removeUserData: (state) => {
            state.userData = null
            localStorage.removeItem("userData")
        }
    }
})

export const {addUserData, removeUserData} = authSlice.actions;
export default authSlice.reducer;