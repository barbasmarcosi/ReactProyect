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
      value: "Id",
      column: "id",
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
      value: "Numero de proyecto",
      column: "id",
    },
    {
      id: 2,
      value: "Descripcion",
      column: "descripcion",
    },
    {
      id: 3,
      value: "Fecha de Inicio",
      column: "fechaInicio",
    },
    {
      id: 4,
      value: "Fecha de Fin",
      column: "fechaFin",
    },
    {
      id: 5,
      value: "Id de Persona",
      column: "idPersona",
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
            <AddRoundedIcon />
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
            <AddRoundedIcon />
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
                  descripcion={project.descripcion}
                  fechaInicio={project.fechaInicio}
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
            <AddRoundedIcon />
          </CreatePersonButton>
          <GridContainer>
            <thead>
              <tr>
                {personsHeader.map((todo) => (
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
            <AddRoundedIcon />
          </CreatePersonButton>
          <GridContainer>
            <thead>
              <tr>
                {personsHeader.map((todo) => (
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
