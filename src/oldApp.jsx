import Contact from "./assets/Contact"
import Counter from "./assets/Counter";
import Hello from "./assets/Hello"

function App() {
  const helloData = [
    {name: 'Budsayamas', message:'Hi there'},
    {name: 'chom', message:'Goodbye..'}
  ];

  return (
      <div className='App'>
        <Counter/>
       {helloData.map((data , index) =>
       <Hello key={index} name={data.name} message={data.message} />
       )}
       <Contact email="mail" phone="number" />
      </div>
  );
}

export default App
