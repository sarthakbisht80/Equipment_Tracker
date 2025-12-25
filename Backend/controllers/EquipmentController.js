import Equipment from "../models/Equipment.js";

// GET /api/equipment
const getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/equipment
// Check if equipment already exists before adding
const addEquipment = async (req, res) => {
  try {
    const { name, type, status, lastCleanedDate } = req.body;

    // Basic validation
    if (!name || !type || !status) {
      return res.status(400).json({
        message: "Name, type and status are required",
      });
    }

    //  Check if equipment already exists (by name)
    const existingEquipment = await Equipment.findOne({ name });

    if (existingEquipment) {
      return res.status(409).json({
        message: "Equipment already exists, cannot add duplicate",
      });
    }

    //  Create new equipment
    const newEquipment = new Equipment({
      name,
      type,
      status,
      lastCleanedDate,
    });

    const savedEquipment = await newEquipment.save();

    res.status(201).json(savedEquipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/equipment/:id
const updateEquipment = async (req, res) => {
  try {
    const updated = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/equipment/:id
const deleteEquipment = async (req, res) => {
  try {
    const deleted = await Equipment.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  getAllEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment,
};
