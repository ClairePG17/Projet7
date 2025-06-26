import "./_equipmentslist.scss";

export default function EquipmentsList({ equipments }) {
    return (
      <ul className="equipments-list">
        {equipments.map((equip, index) => (
          <li key={index}>{equip}</li>
        ))}
      </ul>
    );
  }