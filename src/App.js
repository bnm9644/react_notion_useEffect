import { useState, useEffect } from "react";
import Timekeep from "./component/Timekeep.js";


function App() {

  const [showtime , setShowTime] = useState(false);

  return (   
    <div>
      {showtime && <Timekeep />}
      <button onClick = {() => setShowTime(!showtime)}>Toggle Timer</button>
    </div>
  );
}

export default App;

/* 
  useEffect : 
  어떤 Component가 
  Mount :  화면에 첫 렌더링,
  Update : 재 렌더링 
  Unmount : 화면에서 사라질 때

  특정 작업을 처리할 코드를 실행시키고 싶을 때 사용

  1. useEffect(() => {원하는 작업}); 
  - 렌더링 될때마다 실행! - Component가 맨 처음 화면에 렌더링 될때 실행

  2.useEffect(() => {원하는 작업}), [value]); - 의존성 배열 인자로 추가!
  - 화면에 첫 렌더링 될때 실행 , value 값이 바뀔때 마다 실행!

  3.useEffect( () => {

    // 함수 진행 
    
    return () => { => 함수 해지! - 해당 Component 가 Unmount 될때 or 다음 렌더링 시 useEffect 가 실행되기 이전에 실행

    };

  }, []) 

  const [count , setCount] = useState(1);
  const [name , setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count+1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 맨 처음 Mount 될때만 실행하고 싶으면 - '빈 배열' 준다
  useEffect(
    () => {
      console.log("Mount 될때만");
    }
  , []);

  // 렌더링 될때마다 매번 실행된다. - 렌더링 이후
  useEffect (
    ()=> {
      // 작업
      console.log("jurgen clensman")
    }
  )

  // Mount 될때 + count가 변화 할때 마다 실행
  useEffect(
    () => {
      console.log("count 변경");
    }
  ,[count]);

  // Mount 될때 + name이 변화 할때 마다 실행
  useEffect(
    () => {
      console.log("name 변경");
    }
  ,[name]);

  return (
    <div>
      <button onClick={handleCountUpdate}> Update </button>
      <span> count : {count} </span><br/><br/>
      <input type = "text" value = {name} onChange = {handleInputChange}/><br/>
      <span>name : {name}</span>
    </div>
  );

*/