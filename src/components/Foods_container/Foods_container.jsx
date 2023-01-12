import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllFoods,
  searchByWord,
  orderAlphabetic,
} from "../../redux/actions/index";
import { Food } from "../Food/Food";
import { Spinner } from "../Spinner/Spinner";
import { SearchByName } from "../SearchByName/SearchByName";
import "./Foods_container.css";

export const Foods_container = () => {
  const [input, setInput] = useState({ name: "" });

  const { filterAllFoods, allFoods } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoods());
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    dispatch(searchByWord({ name: e.target.value }, allFoods));
  };

  return (
    <>
      <select
        onChange={(e) =>
          dispatch(orderAlphabetic(filterAllFoods, e.target.value))
        }
      >
        <option>De la A a la Z</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>

      <SearchByName handleChange={handleChange} />
      <div className="food_container_content_cards">
        {!filterAllFoods?.length ? (
          <Spinner />
        ) : (
          filterAllFoods?.map((el) => <Food key={el.id_recipe} data={el} />)
        )}
      </div>
    </>
  );
};
