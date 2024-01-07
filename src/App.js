import Childcomponent from "./child-component";
function App() {
  return (
    <div className="mt-4 flex flex-col justify-center items-center bg-blue-500 md:bg-white">
      <h1 className="text-center text-blue-900 font-bold text-[3rem]">My first react app</h1>
      <b className="mt-2 text-[20px]">Tailwind integration in my first react app</b>
      <Childcomponent child={"'I am a prop in a child component'"} />
    </div>
  );
}

export default App;
