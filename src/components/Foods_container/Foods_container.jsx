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
import { filterFoods } from "../../redux/actions/index";

import "./Foods_container.css";

export const Foods_container = () => {
  const [input, setInput] = useState({ name: "" });

  const { filterAllFoods, allFoods } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    dispatch(searchByWord({ name: e.target.value }, allFoods));
  };

  return (
    <>
      <div className="content_inputs">
        <select
          className="option_button"
          onChange={(e) =>
            dispatch(orderAlphabetic(filterAllFoods, e.target.value))
          }
        >
          <option className="option_button">De la A a la Z</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
        <SearchByName handleChange={handleChange} />
      </div>
      <div className="content_foods_container">
        <div className="content_fiters">
          <button
            className="filter_button"
            name="todos"
            onClick={(e) => dispatch(filterFoods(e.target.name, allFoods))}
          >
            TODOS
          </button>
          <button
            className="filter_button"
            name="bento"
            onClick={(e) => dispatch(filterFoods(e.target.name, allFoods))}
          >
            BENTO
          </button>
          <button
            className="filter_button"
            name="sushi"
            onClick={(e) => dispatch(filterFoods(e.target.name, allFoods))}
          >
            SUSHI
          </button>
          <button
            className="filter_button"
            name="entrada"
            onClick={(e) => dispatch(filterFoods(e.target.name, allFoods))}
          >
            ENTRADAS
          </button>
        </div>
        <div className="food_container_content_cards">
          {!filterAllFoods?.length ? (
            <Spinner />
          ) : (
            filterAllFoods?.map((el) => <Food key={el.id_recipe} data={el} />)
          )}
        </div>
      </div>
    </>
  );
};
