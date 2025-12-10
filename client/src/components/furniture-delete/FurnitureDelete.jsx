import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export function FurnitureDelete() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { request } = useFetch()

    useEffect(() => {
        const isConfirmed = confirm('Are you sure you want to delete this furniture')

        if(isConfirmed) {
            request(`data/furniture/${id}`, 'DELETE')
            .catch(error => alert(error.message))
            .finally(navigate('/catalog'))
        } else {
            navigate('/catalog')
        }
    }, [id, navigate, request])
}