import React from "react";
//import "./ProjectBodyGrid.css";
import { MainContext } from "../MainContext";
import { ModifyPersonForm } from "../ModifyPersonForm";
import { ModifyPersonModal } from "../ModifyPersonModal";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

function ProjectBodyGrid(props) {
  const {
    openModifyModal,
    setOpenModifyModal,
    clickId,
    setClickId,
    setNewPersonName,
    setNewPersonLastName,
  } = React.useContext(MainContext);
  const onClickButton = (id, name, lastName) => {
    setClickId(id);
    setNewPersonName(name);
    setNewPersonLastName(lastName);
    setOpenModifyModal((prevState) => !prevState);
  };

  return (
    <>
      <tr key={props.id}>
        <td>{props.nroFactura}</td>
        <td>{props.descripcion}</td>
        <td>{props.fechaInicio}</td>
        <td>{props.monto}</td>
        <td>{props.fechaFin}</td>
        <td>{props.idPersona}</td>
        <td
          className="BodyGrid-button BodyGrid-editButton"
          //onClick={() => onClickButton(props.id, props.nombre, props.apellido)}
        >
          <ModeEditOutlineOutlinedIcon />
        </td>
        <td
          className="BodyGrid-button BodyGrid-deleteButton"
          onClick={props.onDelete}
        >
          <DeleteForeverOutlinedIcon />
        </td>
      </tr>
      {!!openModifyModal && (
        <ModifyPersonModal>
          <ModifyPersonForm id={clickId} />
        </ModifyPersonModal>
      )}
    </>
  );
}

export { ProjectBodyGrid };