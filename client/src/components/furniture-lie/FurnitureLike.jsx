import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router";
import { useUser } from "../../hooks/useUser";

export function FurnitureLike() {
    const { id } = useParams()
    const { request } = useFetch()
    const { user } = useUser()
    const navigate = useNavigate()


    const data = {
        likedBy: user?._id,
        furnitureId: id
    }
    useEffect(() => {
        request(`data/likes`, 'POST', data)
        .catch(error => alert(error.message))
        .finally(navigate(`/catalog/details/${id}`))
    }, [id, navigate, request])
}