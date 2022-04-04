import useRifa from "../hooks/useRifa";

export default function Carton() {
  const { carton } = useRifa();
  return (
    <>
      {console.log(carton)}
      <h1>Holi</h1>
    </>
  );
}
