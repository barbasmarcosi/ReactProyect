import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const MainContext = React.createContext();

function MainProvider(props) {
  /*const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);*/

  const [searchPerson, setSearchPerson] = React.useState("");
  const [searchProject, setSearchProject] = React.useState("");
  const [orderTable, setOrderTable] = React.useState("");
  const [openTable, setOpenTable] = React.useState(false);
  const [openAddPersonModal, setOpenAddPersonModal] = React.useState(false);
  const [openModifyModal, setOpenModifyModal] = React.useState(false);
  const [clickId, setClickId] = React.useState(0);
  const [newPersonName, setNewPersonName] = React.useState("");
  const [newPersonLastName, setNewPersonLastName] = React.useState("");
  const [selectedNav, setSelectedNav] = React.useState(1);

  //const completedTodos = todos.filter((todo) => !!todo.completed).length;
  //const totalTodos = todos.length;

  const localPersonStg = (set) => {
    if (set) {
      localStorage.setItem("PERSONAS", JSON.stringify(set));
    } else {
      return JSON.parse(localStorage.getItem("PERSONAS"));
    }
  };

  const localProjectStg = (set) => {
    if (set) {
      localStorage.setItem("PROYECTOS", JSON.stringify(set));
    } else {
      return JSON.parse(localStorage.getItem("PROYECTOS"));
    }
  };

  let persons = localPersonStg();
  let projects = localProjectStg();

  /*if (searchProject.length >= 1) {
    projects = localProjectStg().filter((project) => {
      const todoText = project.nombre.toLowerCase();
      const todoText2 = project.apellido.toLowerCase();
      const todoText3 = `${project.id}`;
      const searchText = searchPerson.toLowerCase();
      return (
        todoText.includes(searchText) ||
        todoText2.includes(searchText) ||
        todoText3.includes(searchText)
      );
    });
  }*/

  /*const projectByPerson = () => {
    for (let i = 0; i < localPersonStg().length; i++) {
      projects.push(
        localProjectStg().filter((project) => {
          const proj = `${project.idPersona}`;
          return proj.match(i + 1);
        })
      );
    }
  };*/

  //projectByPerson();

  if (searchPerson.length >= 1) {
    persons = persons.filter((person) => {
      const name = person.nombre.toLowerCase();
      const lastName = person.apellido.toLowerCase();
      const cuit = `${person.id}`;
      const searchText = searchPerson.toLowerCase();
      return (
        name.includes(searchText) ||
        lastName.includes(searchText) ||
        cuit.includes(searchText)
      );
    });
  }

  if (searchProject.length >= 1) {
    projects = projects.filter((project) => {
      //const billNumber = project.nombre.toLowerCase();
      const id = `${project.id}`;
      const description = project.descripcion.toLowerCase();
      const beginDate = project.fechaInicio.toLowerCase();
      const finishDate = project.fechaFin.toLowerCase();
      const cuit = `${project.idPersona}`;
      const searchText = searchProject.toLowerCase();
      return (
        id.includes(searchText) ||
        description.includes(searchText) ||
        beginDate.includes(searchText) ||
        finishDate.includes(searchText) ||
        cuit.includes(searchText)
      );
    });
  }

  const dynamicSort = (property) => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };
  if (selectedNav === 1) persons.sort(dynamicSort(`${orderTable}`));
  if (selectedNav === 2) projects.sort(dynamicSort(`${orderTable}`));

  const addPerson = (nombre, apellido) => {
    persons.sort(dynamicSort("id"));
    let person = {
      id: persons[persons.length - 1].id + 1,
      nombre: nombre,
      apellido: apellido,
    };
    persons.push(person);
    localPersonStg(persons);
  };

  const addProject = (descripcion, fechaInicio, fechaFin, idPersona) => {
    projects.sort(dynamicSort("id"));
    let project = {
      id: projects[projects.length - 1].id + 1,
      descripcion: descripcion,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      idPersona: idPersona,
    };
    projects.push(project);
    localPersonStg(persons);
  };

  const modifyPerson = (id, nombre, apellido) => {
    persons.sort(dynamicSort("id"));
    persons[id].nombre = nombre;
    persons[id].apellido = apellido;
    localPersonStg(persons);
  };

  const deletePerson = (id) => {
    const gridIndex = persons.findIndex((person) => person.id === id);
    persons.splice(gridIndex, 1);
    localPersonStg(persons);
  };

  const deleteProject = (id) => {
    const gridIndex = projects.findIndex((project) => project.id === id);
    projects.splice(gridIndex, 1);
    localProjectStg(projects);
  };

  return (
    <MainContext.Provider
      value={{
        //loading,
        //error,
        //totalTodos,
        //completedTodos,
        searchPerson,
        setSearchPerson,
        searchProject,
        setSearchProject,
        persons,
        orderTable,
        setOrderTable,
        openAddPersonModal,
        setOpenAddPersonModal,
        openModifyModal,
        setOpenModifyModal,
        clickId,
        setClickId,
        deletePerson,
        deleteProject,
        addPerson,
        modifyPerson,
        dynamicSort,
        newPersonName,
        setNewPersonName,
        newPersonLastName,
        setNewPersonLastName,
        openTable,
        setOpenTable,
        projects,
        //projectByPerson,
        selectedNav,
        setSelectedNav,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };

/*localStorage.setItem('PERSONAS', JSON.stringify([
    {
      id: 1,
      cuit: 20380831652,
      nombre: "Marcos",
      apellido: "Barbas",
    },
    {
      id: 2,
      cuit: 2358964235,
      nombre: "Juan Pablo",
      apellido: "Perez",
    },
    {
      id: 3,
      cuit: 1258665475,
      nombre: "Matias",
      apellido: "Silva",
    },
    {
      id: 4,
      cuit: 1234567890,
      nombre: "Pepe",
      apellido: "Fernandez",
    },
    {
      id: 5,
      cuit: 1616181618,
      nombre: "Maria",
      apellido: "Torre",
    },
    {
      id: 6,
      cuit: 7894561237,
      nombre: "Camila",
      apellido: "Lamda",
    },
    {
      id: 7,
      cuit: 4568791234,
      nombre: "Sofia",
      apellido: "Castro",
    },
  ]))
  
  localStorage.setItem('PROYECTOS', JSON.stringify([
    {
      id: 1,
      nroFactura: 16164681648164,
      descripcion: "Proyecto 1",
      fechaInicio: "11/11/2022",
      monto: 16646846,
      fechaFin: "13/12/2022",
      idPersona: 1,
    },
    {
      id: 2,
      nroFactura: 16164681631264,
      descripcion: "Proyecto 2",
      fechaInicio: "11/12/2022",
      monto: 16646846,
      fechaFin: "17/12/2022",
      idPersona: 1,
    },
    {
      id: 3,
      nroFactura: 16164682352354,
      descripcion: "Proyecto 3",
      fechaInicio: "07/11/2022",
      monto: 16646846,
      fechaFin: "07/12/2022",
      idPersona: 3,
    },
    {
      id: 4,
      nroFactura: 16164681642342,
      descripcion: "Proyecto 4",
      fechaInicio: "04/02/2022",
      monto: 16646846,
      fechaFin: "13/12/2022",
      idPersona: 4,
    },
    {
      id: 5,
      nroFactura: 1616464234264,
      descripcion: "Proyecto 5",
      fechaInicio: "11/11/2022",
      monto: 16646846,
      fechaFin: "13/12/2022",
      idPersona: 1,
    },
    {
      id: 6,
      nroFactura: 1616463453164,
      descripcion: "Proyecto 6",
      fechaInicio: "11/12/2022",
      monto: 16646846,
      fechaFin: "17/12/2022",
      idPersona: 7,
    },
    {
      id: 7,
      nroFactura: 161646816346364,
      descripcion: "Proyecto 7",
      fechaInicio: "07/11/2022",
      monto: 16646846,
      fechaFin: "07/12/2022",
      idPersona: 6,
    },
    {
      id: 8,
      nroFactura: 16164681641234,
      descripcion: "Proyecto 8",
      fechaInicio: "04/02/2022",
      monto: 16646846,
      fechaFin: "13/12/2022",
      idPersona: 3,
    },
    {
      id: 9,
      nroFactura: 16164681648234,
      descripcion: "Proyecto 9",
      fechaInicio: "11/11/2022",
      monto: 16646846,
      fechaFin: "13/12/2022",
      idPersona: 2,
    },
    {
      id: 10,
      nroFactura: 16164681644234,
      descripcion: "Proyecto 10",
      fechaInicio: "11/12/2022",
      monto: 16646846,
      fechaFin: "17/12/2022",
      idPersona: 5,
    },
    {
      id: 11,
      nroFactura: 16164481648164,
      descripcion: "Proyecto 11",
      fechaInicio: "07/11/2022",
      monto: 16646846,
      fechaFin: "07/12/2022",
      idPersona: 7,
    },
    {
      id: 12,
      nroFactura: 16164681628164,
      descripcion: "Proyecto 12",
      fechaInicio: "04/02/2022",
      monto: 16646846,
      fechaFin: "13/12/2022",
      idPersona: 7,
    },
  ]))
  */
