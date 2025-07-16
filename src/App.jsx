import { useRef, useState } from "react";
import "./App.css";

function App() {
  // searchText 상태로 관리 -> 사용자에게 즉각적으로 UI를 보여주기 위해서
  const [searchText, setSearchText] = useState("");
  // 검색어에 값을 입력할 때 마다 리렌더링 되는 것을 방지하기 위해 useRef로 관리
  const inputRef = useRef(null);

  // input창에서 검색 단어를 받아오는 함수
  const getSearchValue = (e) => {
    setSearchText(inputRef.current.value);
  };

  return (
    <>
      <h2>OZ 코딩스쿨</h2>
      <p>검색할 키워드를 입력한 후 검색 버튼을 클릭하세요.</p>
      <div className="search-input">
        <input type="text" ref={inputRef} />
        <button onClick={getSearchValue}>검색</button>
      </div>
      {searchText && (
        <div>
          🔎 <b>{searchText}</b> 에 대해 검색합니다 . . .
        </div>
      )}
    </>
  );
}

export default App;
