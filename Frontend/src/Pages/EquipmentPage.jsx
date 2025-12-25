import React, { useEffect, useState } from "react";
import EquipmentForm from "../Components/EquipmentForm";
import EquipmentTable from "../Components/EquipmentTable";
import { getAllEquipment } from "../Services/equipmentService";

const EquipmentPage = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const fetchEquipment = async () => {
    const data = await getAllEquipment();
    setEquipmentList(data);
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div className="equipment-page">
      <h1>Equipment Tracker</h1>

      <div className="equipment-form">
        <EquipmentForm
          selectedEquipment={selectedEquipment}
          onSuccess={fetchEquipment}
          clearSelection={() => setSelectedEquipment(null)}
        />
      </div>

      <EquipmentTable
        equipmentList={equipmentList}
        onEdit={setSelectedEquipment}
        onSuccess={fetchEquipment}
      />
    </div>
  );
};

export default EquipmentPage;
