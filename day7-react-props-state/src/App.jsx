import Counter from './components/Counter';
import Toggle from './components/Toggle';
import UserCard from './components/UserCard';

function App() {

  const mssg = prompt("Enter message here: ");

  return (
    <div className='AContainer bg-red-400 my-10'>
      <div className="counter bg-green-200 flex flex-wrap justify-between items-center px-10 py-5 rounded-sm ">
        <span className=' inline-block font-bold'>COUNTER: </span>
        <Counter />
      </div>


      <div className='message bg-green-200 flex justify-between items-center px-10 py-5 rounded-sm'>
        <Toggle mssg={mssg} />
      </div>

      <div className="usercard bg-green-200 px-10 py-5 rounded-sm overflow-auto">
        <div className="title inline-block font-bold underline italic text-xl">
          User List: 
        </div>

        <UserCard name="Aman" email="aman@gmail.com" role="Full Stack Intern" />
        <UserCard name="Simran" email="simran@gmail.com" role="Frontend Intern" />
        <UserCard name="Simran" email="simran@gmail.com" role="Frontend Intern" />
        <UserCard name="Simran" email="simran@gmail.com" role="Frontend Intern" />
        <UserCard name="Simran" email="simran@gmail.com" role="Frontend Intern" />
        <UserCard name="Simran" email="simran@gmail.com" role="Frontend Intern" />
        <UserCard name="Simran" email="simran@gmail.com" role="Frontend Intern" />
      </div>
    </div>
  );
}

export default App; 
