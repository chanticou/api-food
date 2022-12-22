export const SearchByName = ({ handleChange }) => {
  return (
    <>
      {/* FILTRADO POR PALABRAS */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Buscar por nombre
          <input onChange={(e) => handleChange(e)} type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
