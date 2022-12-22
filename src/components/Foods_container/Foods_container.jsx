import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFoods, searchByWord } from "../../redux/actions/index";
import { Food } from "../Food/Food";
import { SearchByName } from "../SearchByName/SearchByName";

export const Foods_container = () => {
  const [input, setInput] = useState({ name: "" });

  const { filterAllFoods, allFoods } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoods());
  }, [JSON.stringify(allFoods).length]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    dispatch(searchByWord({ name: e.target.value }, allFoods));
  };

  return (
    <>
      <SearchByName handleChange={handleChange} />
      {!filterAllFoods?.length ? (
        <h1>No hay datos</h1>
      ) : (
        filterAllFoods?.map((el) => <Food key={el.id_recipe} data={el} />)
      )}
    </>
  );
};
