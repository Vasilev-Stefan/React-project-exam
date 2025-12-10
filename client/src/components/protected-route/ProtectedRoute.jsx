import { Navigate } from "react-router";
import { useUser } from "../../hooks/useUser";

export function ProtectedRoute({children}) {
    const { isAuthenticated } = useUser()

    if(!isAuthenticated) {
        return <Navigate to='/user/login' replace />
    }

    return children
}