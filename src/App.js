
import './App.css';

function App() {
  const myName = "Іван";
  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/",
  };
  const num1 = 29;
  const num2 = 50;
  const sum = num1 + num2;
   const colors = ["Чорний", "Фіолетовий", "Зелений"];
  return (
    <div className="App">
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBBhx6-1bHI9nfO7iTlMkki_JffI3-Cl4kXs2Cetic9U54jwLGBD1QrrzNiLRBUAzFo1NPiGnMF3VVsr5SQeThDN-Ty6l6q-FMVbufOQ"
        alt="дерево"
      />
       <p>
        Улюблений сайт:{" "}
        <a href={favoriteSite.url}>
          {favoriteSite.name}
        </a>
      </p>
      <p>Сума чисел: {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
