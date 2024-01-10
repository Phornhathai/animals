import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

//ประกาศฟังก์ชันข้างนอก เพราะเราไม่ต้องใช้ตัวแปร หรือ useState ในฟังก์ชันหลัก
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  // value random between 0 to 5
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  //ค่าเริ่มต้น count = 0 ถ้าไม่ได้ระบุไว้จะเป็น undefined
  //ค่าเริ่มต้นที่ array เปล่า
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // animals = [] -> ['cat' , 'cow']
    // [...animals , getRandomAnimal()] = ['cat']
    setAnimals([...animals, getRandomAnimal()]);
  };

  // [1,2,3] => [6,7,8]
  // use map for creating with new arrays
  // [< /> , < /> , ...]
  // this function transfer array string to array component and store div instead
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      {/* return like as div */}
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
