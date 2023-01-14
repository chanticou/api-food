import "./SearchByName.css";

export const SearchByName = ({ handleChange }) => {
  return (
    <>
      {/* FILTRADO POR PALABRAS */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Buscar por nombre</label>
        <div className="content_form">
          <input onChange={(e) => handleChange(e)} type="text" name="name" />
          <input className="button_searchByName" type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};
