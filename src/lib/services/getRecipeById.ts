import api from "../api/api";

export async function getRecipeById(id: number) {
  const { data } = await api.get(`/recipes/${id}/information`);
  return data;
}
