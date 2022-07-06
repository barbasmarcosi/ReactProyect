import React from "react";
import { MainContext } from "../MainContext";
import { AddPersonModal } from "../AddPersonModal";
import { HeadGrid } from "../HeadGrid";
import { BodyGrid } from "../BodyGrid";
import { GridContainer } from "../GridContainer";
import { Input } from "../Input";
import { CreatePersonButton } from "../CreatePersonButton";
import { NewPersonForm } from "../NewPersonForm";
//import { ProyectoBodyGrid } from "../ProyectoBodyGrid";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { ProjectBodyGrid } from "../ProjectBodyGrid";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
function AppUI() {
  const {
    //error,
    //loading,
    //searchedTodos,
    //completeTodo,
    searchPerson,
    setSearchPerson,
    deletePerson,
    deleteProject,
    openAddPersonModal,
    setOpenAddPersonModal,
    searchProject,
    setSearchProject,
    openModifyModal,
    setOpenModifyModal,
    persons,
    projects,
    selectedNav,
  } = React.useContext(MainContext);
  const personsHeader = [
    {
      id: 1,
      value: "CUIT",
      column: "cuit",
    },
    {
      id: 2,
      value: "Nombre",
      column: "nombre",
    },
    {
      id: 3,
      value: "Apellido",
      column: "apellido",
    },
    

  ];

  const projectHeader = [
    {
      id: 1,
      value: "Numero de factura",
      column: "nroFactura",
    },
    {
      id: 2,
      value: "Descripcion",
      column: "descripcion",
    },
    {
      id: 3,
      value: "Fecha de Factura",
      column: "fechaFactura",
    },
    {
      id: 4,
      value: "Monto",
      column: "monto",
    },
    {
      id: 5,
      value: "Fecha de Ingreso",
      column: "fechaIngreso",
    },
    {
      id: 6,
      value: "CUIT de Matriculado",
      column: "cuit",
    },
  ];

  const retencionesHeader = [
    {
      id: 1,
      value: "Porcentaje de Retencion",
      column: "retencion",
    },
    {
      id: 2,
      value: "Mes",
      column: "mes",
    },
    {
      id: 3,
      value: "Anio",
      column: "anio",
    },
    {
      id: 4,
      value: "CUIT de Matriculado",
      column: "fechaIngreso",
    },
    {
      id: 5,
      value: "Nombre de Matriculado",
      column: "nombre",
    },
  ];

  const liquidacionesHeader = [
    {
      id: 1,
      value: "Monto del Mes",
      column: "montoMes",
    },
    {
      id: 2,
      value: "Monto Retenido",
      column: "montoRetenido",
    },
    {
      id: 3,
      value: "Fecha",
      column: "fecha",
    },
    {
      id: 4,
      value: "CUIT de Matriculado",
      column: "fechaIngreso",
    },
    {
      id: 5,
      value: "Nombre de Matriculado",
      column: "nombre",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <NavBar />
      {selectedNav === 1 && (
        <>
          <Input search={searchPerson} setSearch={setSearchPerson} />
          <CreatePersonButton setModal={setOpenAddPersonModal}>
            +
          </CreatePersonButton>
          <GridContainer>
            <thead>
              <tr>
                {personsHeader.map((header) => (
                  <HeadGrid
                    value={header.value}
                    column={header.column}
                    id={header.id}
                    key={header.id}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <BodyGrid
                  key={person.id}
                  id={person.id}
                  cuit={person.cuit}
                  nombre={person.nombre}
                  apellido={person.apellido}
                  onDelete={() => deletePerson(person.id)}
                />
              ))}
            </tbody>
          </GridContainer>
        </>
      )}
      {selectedNav === 2 && (
        <>
          <Input search={searchProject} setSearch={setSearchProject} />
          <CreatePersonButton setModal={setOpenAddPersonModal}>
            +
          </CreatePersonButton>
          <GridContainer>
            <thead>
              <tr>
                {projectHeader.map((header) => (
                  <HeadGrid
                    value={header.value}
                    column={header.column}
                    id={header.id}
                    key={header.id}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <ProjectBodyGrid
                  key={project.id}
                  id={project.id}
                  nroFactura={project.nroFactura}
                  descripcion={project.descripcion}
                  fechaInicio={project.fechaInicio}
                  monto={project.monto}
                  fechaFin={project.fechaFin}
                  idPersona={project.idPersona}
                  onDelete={() => deleteProject(project.id)}
                ></ProjectBodyGrid>
              ))}
            </tbody>
          </GridContainer>
        </>
      )}
      {selectedNav === 3 && (
        <>
          <Input search={searchPerson} setSearch={setSearchPerson} />
          <CreatePersonButton setModal={setOpenAddPersonModal}>
            +
          </CreatePersonButton>
          <GridContainer>
            <thead>
              <tr>
                {retencionesHeader.map((todo) => (
                  <HeadGrid
                    value={todo.value}
                    column={todo.column}
                    id={todo.id}
                    key={todo.id}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {persons.map((todo) => (
                <BodyGrid
                  key={todo.id}
                  id={todo.id}
                  nombre={todo.nombre}
                  apellido={todo.apellido}
                  onDelete={() => deletePerson(todo.id)}
                ></BodyGrid>
              ))}
            </tbody>
          </GridContainer>
        </>
      )}
      {selectedNav === 4 && (
        <>
          <Input search={searchPerson} setSearch={setSearchPerson} />
          <CreatePersonButton setModal={setOpenAddPersonModal}>
            +
          </CreatePersonButton>
          <GridContainer>
            <thead>
              <tr>
                {liquidacionesHeader.map((todo) => (
                  <HeadGrid
                    value={todo.value}
                    column={todo.column}
                    id={todo.id}
                    key={todo.id}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {persons.map((todo) => (
                <BodyGrid
                  key={todo.id}
                  id={todo.id}
                  nombre={todo.nombre}
                  apellido={todo.apellido}
                  onDelete={() => deletePerson(todo.id)}
                ></BodyGrid>
              ))}
            </tbody>
          </GridContainer>
        </>
      )}

      {!!openAddPersonModal && (
        <AddPersonModal>
          <NewPersonForm />
        </AddPersonModal>
      )}
      {!!openAddPersonModal && (
        <AddPersonModal>
          <NewPersonForm />
        </AddPersonModal>
      )}

      {/*<TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />*/}
    </React.Fragment>
  );
}

export { AppUI };
