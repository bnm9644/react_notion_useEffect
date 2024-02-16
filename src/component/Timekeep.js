import React, {useEffect} from "react";

const Timekeep = (props) => {

  // (맨 처음 Mount 되었을때) 화면이 처음 나타날때만 실행
  useEffect(() => {
    const timer = setInterval ( () => {
      console.log("Timer");
    } , 1000);
    
    // UnMount (화면에서 사라질 때) 즉, 정리, 짝수 번 눌렀을 때 setInterval 처리 없애는 것!
    return () => {
      clearInterval(timer);
      console.log("timer 종료");
    }
  }, []);

  return (
    <div>
      <span>타이머 시작, 콘솔 확인</span>
    </div>
  )
}

export default Timekeep;