import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useUser } from "../../hooks/useUser";

export function FurnitureDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { request, data: item } = useFetch(`data/furniture/${id}`, [id]);
  const { user } = useUser();

  useEffect(() => {
    if (!item || !user) return;

    if (user._id !== item._ownerId) {
      navigate(`/catalog/details/${id}`, { replace: true });
      return;
    }

    const isConfirmed = confirm(
      "Are you sure you want to delete this furniture?"
    );
    if (isConfirmed) {
      request(`data/furniture/${id}`, "DELETE")
        .then(() => navigate("/catalog", { replace: true }))
        .then(navigate('/catalog'))
        .catch((error) => alert(error.message));
    } else {
      navigate("/catalog", { replace: true });
    }
  }, [id, item, user, navigate, request]);

  return null;
}
