import React from "react";
import { deleteEquipment } from "../Services/equipmentService";

const EquipmentRow = ({ equipment, onEdit, onSuccess }) => {
  const handleDelete = async () => {
    if (window.confirm("Delete this equipment?")) {
      await deleteEquipment(equipment._id);
      onSuccess();
    }
  };

  return (
    <tr>
      <td>{equipment.name}</td>
      <td>{equipment.type}</td>
      <td>{equipment.status}</td>
      <td>{equipment.lastCleanedDate || "N/A"}</td>
      <td>
        <div className="actions">
          <button className="edit-btn" onClick={() => onEdit(equipment)}>Edit</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default EquipmentRow;
