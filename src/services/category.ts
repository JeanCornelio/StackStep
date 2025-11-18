import { get } from "@/utils/http-request";

export const fetchCategoriesDropdown = async (params = {}) => {
  const res = await get("/categories/dropdown", params);

  const mapped = res.data.map((item: { id: string; name: string }) => ({
    label: item.name,
    value: item.id,
  }));

  return mapped;
};
