import React from "react";
import { MainContext } from "../MainContext";
import { AddPersonModal } from "../AddPersonModal";
import { HeadGrid } from "../HeadGrid";
import { BodyGrid } from "../BodyGrid";
import { GridContainer } from "../GridContainer";
import { Input } from "../Input";
import { CreatePersonButton } from "../CreatePersonButton";
import { NewPersonForm } from "../NewPersonForm";
import { NewBillForm } from "../NewBillForm";
//import { ProyectoBodyGrid } from "../ProyectoBodyGrid";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { ProjectBodyGrid } from "../ProjectBodyGrid";
import { RetentionBodyGrid } from "../RetentionBodyGrid";
import { LiquidationBodyGrid } from "../LiquidationBodyGrid";
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
    retentions,
    searchRetention,
    setSearchRetention,
    liquidations,
    searchLiquidation,
    setSearchLiquidation,
    deleteRetention,
    deleteLiquidation,
    openAddBillModal,
    setOpenAddBillModal
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
      column: "cuitMatriculado",
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
      column: "cuitMatriculado",
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
                  estado={person.estado}
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
          <CreatePersonButton setModal={setOpenAddBillModal}>
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
                  fechaFactura={project.fechaFactura}
                  monto={project.monto}
                  fechaIngreso={project.fechaIngreso}
                  cuitMatriculado={project.cuitMatriculado}
                  onDelete={() => deleteProject(project.id)}
                ></ProjectBodyGrid>
              ))}
            </tbody>
          </GridContainer>
        </>
      )}
      {selectedNav === 3 && (
        <>
          <Input search={searchRetention} setSearch={setSearchRetention} />
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
              {retentions.map((retention) => (
                <RetentionBodyGrid
                  key={retention.id}
                  id={retention.id}
                  retencion={retention.retencion}
                  nombre={retention.nombre}
                  mes={retention.mes}
                  anio={retention.anio}
                  cuitMatriculado={retention.cuitMatriculado}
                  onDelete={() => deleteRetention(retention.id)}
                ></RetentionBodyGrid>
              ))}
            </tbody>
          </GridContainer>
        </>
      )}
      {selectedNav === 4 && (
        <>
          <Input search={searchLiquidation} setSearch={setSearchLiquidation} />
          <CreatePersonButton setModal={setOpenAddPersonModal}>
            +
          </CreatePersonButton>
          <GridContainer>
            <thead>
              <tr>
                {liquidacionesHeader.map((head) => (
                  <HeadGrid
                    value={head.value}
                    column={head.column}
                    id={head.id}
                    key={head.id}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {liquidations.map((liquidation) => (
                <LiquidationBodyGrid
                  key={liquidation.id}
                  id={liquidation.id}
                  montoMes={liquidation.montoMes}
                  montoRetenido={liquidation.montoRetenido}
                  fecha={liquidation.fecha}
                  cuit={liquidation.cuit}
                  nombre={liquidation.nombre}
                  onDelete={() => deleteLiquidation(liquidation.id)}
                ></LiquidationBodyGrid>
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
      {!!openAddBillModal && (
        <AddPersonModal>
          <NewBillForm />
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
