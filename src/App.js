import React, { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    // Метод сообщает что приложение полностью проиницализировалось
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  };

  let text = JSON.stringify(tg.initDataUnsafe);
  // console.log(tg.initData)

  return (
    <div className="App">
      {/* <div>{`username: ${tg.initDataUnsafe?.user?.username}`}</div> */}
      <div>{`${text}`}</div>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
