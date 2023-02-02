import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./SearchByName.css";

export const SearchByName = ({ handleChange }) => {
  return (
    <>
      {/* FILTRADO POR PALABRAS */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="contet_search_input">
          <input
            placeholder="Buscar por nombre..."
            onChange={(e) => handleChange(e)}
            type="text"
            name="name"
          />
          <SearchOutlinedIcon type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};
