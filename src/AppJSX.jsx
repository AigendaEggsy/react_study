import './App.css';

function AppJSX() {
  const name = "EGGSY"
  const list = ['우유', '딸기', '바나나', '요거트']
  return (
    <div>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ui>
        {list.map(function(item){
          return <li>{item}</li>
        })}
      </ui>
      <img
        style= {{width: '200px', height: '200px'}}
        src="https://lh3.googleusercontent.com/proxy/rKz4Gyvdcw6P5fBHHKUHHKGMOG3H5tbDhB_J2UHzhSYrK36LIcRAjR5x1YclzQ8M8tk6qTfd7zkmroQUz11SIJuDMFtfEEraZTCkbJIaFFPmBtHvG6zUx7_P9XMtdds0XU9ASiCBGa1FGTugYutLRw"
        alt="nature"
      />
    </div>
  );
}

export default AppJSX;
