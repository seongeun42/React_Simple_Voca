import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

/**
 * 여기가 메인 페이지!
 * 
 * 리액트 프로젝트를 실행시키려면 yarn start(or npm start)
 * 
 * 단어장 프로젝트에서는 백엔드 서버 대신 json 파일에 기록했고, json-server를 사용했음
 * 실행시키려면 json-server --watch 경로/[파일명].json --port [포트번호]
 * 
 * 서버를 먼저 실행시켜야 리액트 프로젝트가 문제없이 실행됨!
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="/create_day" element={<CreateDay />}></Route>
          {/* EmptyPage는 가장 밑에 적어야 위의 주소들이 전부 일치하지 않을 때 뜨게 됨 */}
          {/* 만약 제일 위에 두면 모든 페이지에가 다 걸려서 EmptyPage 뜨게 됨 */}
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
