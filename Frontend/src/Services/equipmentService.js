// const BASE_URL = "http://localhost:5000/api/equipment";
const BASE_URL = "https://equipment-tracker-3.onrender.com/api/equipment";

export const getAllEquipment = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addEquipment = async (data) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateEquipment = async (id, data) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteEquipment = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
