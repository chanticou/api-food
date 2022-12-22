export const Food = ({ data }) => {
  // console.log(data);
  return (
    <>
      <h1>{data.title}</h1>
      <img src={data.photo} alt=""></img>
      <p>{data.description}</p>
      <p>{data.preparationTime}</p>

      {/* {data.photo?.forEach((el) => (
        <img src={el} alt="">
          {el}
        </img>
      ))} */}
    </>
  );
};
