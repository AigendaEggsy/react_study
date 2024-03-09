import './App.css';

function App() {
  const name = "EGGSY"
  return (
    <div>
      <h1 className='orange'>Hello!</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ui>
        <ul>우유</ul>
        <ul>딸기</ul>
        <ul>바나나</ul>
      </ui>
      <img
        style= {{width: '200px', height: '200px'}}
        src="https://lh3.googleusercontent.com/proxy/rKz4Gyvdcw6P5fBHHKUHHKGMOG3H5tbDhB_J2UHzhSYrK36LIcRAjR5x1YclzQ8M8tk6qTfd7zkmroQUz11SIJuDMFtfEEraZTCkbJIaFFPmBtHvG6zUx7_P9XMtdds0XU9ASiCBGa1FGTugYutLRw"
        alt="nature"
      />
    </div>
  );
}

export default App;
