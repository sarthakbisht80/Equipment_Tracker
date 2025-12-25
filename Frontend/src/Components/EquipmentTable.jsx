import React from "react";
import EquipmentRow from "./EquipmentRow";

const EquipmentTable = ({ equipmentList, onEdit, onSuccess }) => {
  return (
    <table className="equipment-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {equipmentList.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center", padding: "20px", color: "#6c757d" }}>
              No equipment found. Add some equipment to get started.
            </td>
          </tr>
        ) : (
          equipmentList.map((equipment) => (
            <EquipmentRow
              key={equipment._id}
              equipment={equipment}
              onEdit={onEdit}
              onSuccess={onSuccess}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default EquipmentTable;
