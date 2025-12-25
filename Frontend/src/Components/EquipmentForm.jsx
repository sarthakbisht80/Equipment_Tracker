import React, { useEffect, useState } from "react";
import { EQUIPMENT_TYPES, EQUIPMENT_STATUS } from "../constants";
import { addEquipment, updateEquipment } from "../Services/equipmentService";

const initialState = {
  name: "",
  type: "",
  status: "",
  lastCleanedDate: "",
};

const EquipmentForm = ({ selectedEquipment, onSuccess, clearSelection }) => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedEquipment) {
      setFormData(selectedEquipment);
    } else {
      setFormData(initialState);
    }
    setError("");
  }, [selectedEquipment]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name || !formData.type || !formData.status) {
      setError("All fields are required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (selectedEquipment) {
      await updateEquipment(selectedEquipment._id, formData);
    } else {
      await addEquipment(formData);
    }

    setFormData(initialState);
    clearSelection();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedEquipment ? "Edit Equipment" : "Add Equipment"}</h2>

      {error && <p className="error">{error}</p>}

      <input
        name="name"
        placeholder="Equipment Name"
        value={formData.name}
        onChange={handleChange}
      />

      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="">Select Type</option>
        {EQUIPMENT_TYPES.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="">Select Status</option>
        {EQUIPMENT_STATUS.map((status) => (
          <option key={status}>{status}</option>
        ))}
      </select>

      <input
        type="date"
        name="lastCleanedDate"
        value={formData.lastCleanedDate}
        onChange={handleChange}
      />

      <button type="submit">
        {selectedEquipment ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default EquipmentForm;
