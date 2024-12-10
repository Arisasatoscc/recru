import './App.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bulkregister, Inforsessionschedule } from './ui-components';
import { Entry, Inforsession, Resumesubmission, Firstinterview, Roundtablediscussion, Finalinterview, Selectedcandidates } from './ui-components';
import { Entryselect, Inforsessionselect, Resumesubmissionselect, Firstinterviewselect, Roundtablediscussionselects } from './ui-components';
import { Studentlist } from './ui-components';
import { Studentlistselect, Studentlistname, Studentlistfurigana, Studentlistunivname, Studentlistinfor, Studentlistchance, Studentlistsituation }from './ui-components';
import { Studentlistselect2, Studentlistname2, Studentlistfurigana2, Studentlistunivname2,Studentlistinfor2, Studentlistchance2, Studentlistsituation2 }from './ui-components';
import { Pageleftnot, Page1blue, Page2, Page, Page4, Pageright } from './ui-components';
import { Pageleft, Page1, Page2blue, Page3, Page3blue, Page4blue, Pagerightnot } from './ui-components';
import { StudentsituAtten, StudentsituAtten1, StudentsituAtten2 } from './ui-components';
import { StudentsituSub, StudentsituSub1 } from './ui-components';
import { StudentsituPass, StudentsituPass1, StudentsituPass2 } from './ui-components';
import { StudentsituAttenblue, StudentsituAtten1blue, StudentsituAtten2blue } from './ui-components';
import { StudentsituSubblue, StudentsituSub1blue } from './ui-components';
import { StudentsituPassblue, StudentsituPass1blue, StudentsituPass2blue } from './ui-components';
import { Number, Studentregister }from './ui-components';
import SiscoBear from './ui-components/siscobear.png'; // 画像をインポート



function App() {
  const [data, setData] = useState();

  //AppRoute
  const navigate = useNavigate(); 
  const handleClick = () => {navigate("/inforsession");};
  const handleClick2 = () => {navigate("/studentregister");};

  //Phase
  const [isEntrySelected, setIsEntrySelected] = useState(true);
  const [isInforsessionSelected, setIsInforsessionSelected] = useState(false);
  const [isResumeSelected, setIsResumeSelected] = useState(false);
  const [isFirstInterviewSelected, setIsFirstInterviewSelected] = useState(false);
  const [isRoundtableSelected, setIsRoundtableSelected] = useState(false);
  const [isFinalInterviewSelected, setIsFinalInterviewSelected] = useState(false);
  const [isSelectedCandidates, setIsSelectedCandidates] = useState(false);
  const resetSelections = () => {
    setIsEntrySelected(false);
    setIsInforsessionSelected(false);
    setIsResumeSelected(false);
    setIsFirstInterviewSelected(false);
    setIsRoundtableSelected(false);
    setIsFinalInterviewSelected(false);
    setIsSelectedCandidates(false);
};

const handleStudentListClick = (component) => {
  setSelectedComponent(component); // 選択中の項目を更新
};

  //Page
  const [activePage, setActivePage] = useState(1);
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  //Day
  const [Day] = useState("");
  const [isDateVisible] = useState(false);
  const [dates, setDates] = useState({
    Studentlistfirst: "",
    Studentlistround: "",
    Studentlistfinal: "",
  });
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDates((prevDates) => ({
      ...prevDates,
      [selectedComponent]: newDate, // 選択された日付を更新
    }));
  };

  //Nendo
  const baseYear = 2025;
  const range = 3; // 範囲（-2～+3）
  const [selectedYear, setSelectedYear] = useState(baseYear); // 初期選択
  const years = Array.from({ length: range * 2 + 1 }, (_, i) => baseYear - range + i);
  const handleChange = (event) => {
    setSelectedYear(event.target.value); // 選択された年度を更新
  };

  //Serch
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // 入力値を状態に設定
    console.log("現在の検索クエリ:", event.target.value);
  };

  const [selectedComponent, setSelectedComponent] = useState(null); // 選択中の項目

  //Popup
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const registerPopup = () => {
    setIsPopupOpen(false);
  };


  const handleComponentClick = (component) => {
    setSelectedComponent(component); // クリックされたコンポーネントを設定
  };


useEffect(() => {
  fetch("https://cu33x54xhe.execute-apIi.ap-northeast-1.amazonaws.com/dev/")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .then((json) => setData(json))
    .catch((err) => {
      console.error("APIエラー:", err); // エラーをコンソールに表示
    });
}, []);

  console.log(data);

  return (
    <div className="App">
      <div className="background">
      <div className="responsive-box">
  
      <div className="Scroll">
      <header className="App-header">
        <main>
        <div className="Phase">
        <button
          onClick={() => {
            resetSelections();
            setIsEntrySelected(true);
          }}
          disabled={isEntrySelected} // 選択中のボタンは押せない
          style={{
            background: isEntrySelected ? "#CBE4FF" : "#FFFFFF",
            border: "1px solid #ccc",
            cursor: isEntrySelected ? "not-allowed" : "pointer",
            padding: "10px",
            margin: "5px",
          }}
        >
          <Entry data={data} />
        </button>

        <button
          onClick={() => {
            resetSelections();
            setIsInforsessionSelected(true);
          }}
          disabled={isInforsessionSelected}
          style={{
            background: isInforsessionSelected ? "#CBE4FF" : "#FFFFFF",
            border: "1px solid #ccc",
            cursor: isInforsessionSelected ? "not-allowed" : "pointer",
            padding: "10px",
            margin: "5px",
          }}
        >
          <Inforsession data={data} />
        </button>

        <button
          onClick={() => {
            resetSelections();
            setIsResumeSelected(true);
          }}
          disabled={isResumeSelected}
          style={{
            background: isResumeSelected ? "#CBE4FF" : "#FFFFFF",
            border: "1px solid #ccc",
            cursor: isResumeSelected ? "not-allowed" : "pointer",
            padding: "10px",
            margin: "5px",
          }}
        >
          <Resumesubmission data={data} />
        </button>

        <button
          onClick={() => {
            resetSelections();
            setIsFirstInterviewSelected(true);
          }}
          disabled={isFirstInterviewSelected}
          style={{
            background: isFirstInterviewSelected ? "#CBE4FF" : "#FFFFFF",
            border: "1px solid #ccc",
            cursor: isFirstInterviewSelected ? "not-allowed" : "pointer",
            padding: "10px",
            margin: "5px",
          }}
        >
          <Firstinterview data={data} />
        </button>

        <button
          onClick={() => {
            resetSelections();
            setIsRoundtableSelected(true);
          }}
          disabled={isRoundtableSelected}
          style={{
            background: isRoundtableSelected ? "#CBE4FF" : "#FFFFFF",
            border: "1px solid #ccc",
            cursor: isRoundtableSelected ? "not-allowed" : "pointer",
            padding: "10px",
            margin: "5px",
          }}
        >
          <Roundtablediscussion data={data} />
        </button>

        <button
          onClick={() => {
            resetSelections();
            setIsFinalInterviewSelected(true);
          }}
          disabled={isFinalInterviewSelected}
          style={{
            background: isFinalInterviewSelected ? "#CBE4FF" : "#FFFFFF",
            border: "1px solid #ccc",
            cursor: isFinalInterviewSelected ? "not-allowed" : "pointer",
            padding: "10px",
            margin: "5px",
          }}
        >
          <Finalinterview data={data} />
          </button>

          <button
            onClick={() => {
              resetSelections();
              setIsSelectedCandidates(true);
            }}
            disabled={isSelectedCandidates}
            style={{
              background: isSelectedCandidates ? "#CBE4FF" : "#FFFFFF",
              border: "1px solid #ccc",
              cursor: isSelectedCandidates ? "not-allowed" : "pointer",
              padding: "10px",
              margin: "5px",
            }}
          >
            <Selectedcandidates data={data} />
          </button>
          <div>
            <img src={SiscoBear} alt="Sisco Bear" className="image" />
          </div>
          </div>
      
          <div className="Container">
          <div className="Studentregister">
          <button onClick={handleClick2}><Studentregister data={data} /></button>
          </div>
          </div>
          
          <div className="Nendo">
          <select id="year-select" value={selectedYear} onChange={handleChange}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}年度
              </option>
            ))}
          </select>
          </div>

          <div className="Infor2">
  <select id="inforsession-dates" className="dropdown">
    <option value="">説明会日程</option>
    {(Array.isArray(dates) ? dates : []).map((date, index) => (
      <option key={index} value={date}>
        {date}
      </option>
    ))}
  </select>
</div>


          <div className="Upload">
          
            <input type="file" accept="application/pdf,image/jpeg" />
            <button type="submit">アップロード</button>
  
          </div>

    <div className="Serch">
      <input
        type="search"
        id="search"
        placeholder="氏名/大学名/メール/当社を知ったきっかけ"
        value={searchQuery} // 入力値を状態にバインド
        onChange={handleInputChange} // 入力変更時に状態を更新
      />
    </div>

          <div className="Inforsessionschedule">
          <button onClick={handleClick}><Inforsessionschedule data={data} /></button> 
          </div>

          <div>
      <div className="Bulkregister" onClick={openPopup}>
      <button ><Bulkregister data={data} /></button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>ポップアップのタイトル</h2>
            <p>ここにポップアップの内容を記述します。</p>
            <button onClick={closePopup}>閉じる</button>
            <button onClick={registerPopup}>登録</button> 
          </div>
        </div>
      )}
    </div>

          <div className="Number">
            <Number data={data}/>
          </div>

          <div className="Studentlist">
            <Studentlist data={data} />
            <div className="Select">
            <input type="checkbox" /><br />
            <input type="checkbox" /><br />
            </div>

      <div className="infor">
      <p>説明会</p>  
      </div>      

      <div className="Studentsituation">

      <div
        className="StudentsituAtten"
        onClick={() => handleComponentClick("StudentsituAtten")}
      >
        {selectedComponent === "StudentsituAtten" ? (
          <StudentsituAttenblue />
        ) : (
          <StudentsituAtten />
        )}
      </div>

      <div
        className="StudentsituAtten1"
        onClick={() => handleComponentClick("StudentsituAtten1")}
      >
        {selectedComponent === "StudentsituAtten1" ? (
          <StudentsituAtten1blue />
        ) : (
          <StudentsituAtten1 />
        )}
      </div>

      <div
        className="StudentsituAtten2"
        onClick={() => handleComponentClick("StudentsituAtten2")}
      >
        {selectedComponent === "StudentsituAtten2" ? (
          <StudentsituAtten2blue />
        ) : (
          <StudentsituAtten2 />
        )}
      </div>

      <div className="Studentsituation">
      <div
        className="StudentsituSub"
        onClick={() => handleComponentClick("StudentsituSub")}
      >
        {selectedComponent === "StudentsituSub" ? (
          <StudentsituSubblue />
        ) : (
          <StudentsituSub />
        )}
      </div> 
      <div
        className="StudentsituSub1"
        onClick={() => handleComponentClick("StudentsituSub1")}
      >
        {selectedComponent === "StudentsituSub1" ? (
          <StudentsituSub1blue />
        ) : (
          <StudentsituSub1 />
        )}
      </div>
      
      {/* <div
        className="StudentsituPass"
        onClick={() => handleComponentClick("StudentsituPass")}
      >
        {selectedComponent === "StudentsituPass" ? (
          <StudentsituPassblue />
        ) : (
          <StudentsituPass />
        )}
      </div> */}

      {/* <div
        className="StudentsituPass1"
        onClick={() => handleComponentClick("StudentsituPass1")}
      >
        {selectedComponent === "StudentsituPass1" ? (
          <StudentsituPass1blue />
        ) : (
          <StudentsituPass1 />
        )}
      </div>
      <div
        className="StudentsituPass2"
        onClick={() => handleComponentClick("StudentsituPass2")}
      >
        {selectedComponent === "StudentsituPass2" ? (
          <StudentsituPass2blue />
        ) : (
          <StudentsituPass2 />
        )}
      </div> */}
    </div>
  </div>
  </div>
          

          <div className="Studentlist2">
            <Studentlistselect data={data} />
            <Studentlistname data={data} />
            <Studentlistfurigana data={data} />
            <Studentlistunivname data={data} />
            <Studentlistinfor data={data}/>
          </div>

          <div className="Studentlist-container">
      <div
        className="Studentlist-a"
        onClick={() => handleStudentListClick("Studentlistfirst")}
      >
        {dates.Studentlistfirst && (
          <p>{dates.Studentlistfirst}</p>
        )}
        {selectedComponent === "Studentlistfirst" && (
          <div className="calendar">
            <input
              type="date"
              id="date-first"
              value={dates.Studentlistfirst || ""}
              onChange={handleDateChange}
            />
          </div>
        )}
      </div>

      <div
        className="Studentlist-b"
        onClick={() => handleStudentListClick("Studentlistround")}
      >
        {dates.Studentlistround && (
          <p>{dates.Studentlistround}</p>
        )}
        {selectedComponent === "Studentlistround" && (
          <div className="calendar">
            <input
              type="date"
              id="date-round"
              value={dates.Studentlistround || ""}
              onChange={handleDateChange}
            />
          </div>
        )}
      </div>

      <div
        className="Studentlist-c"
        onClick={() => handleStudentListClick("Studentlistfinal")}
      >
        {dates.Studentlistfinal && (
          <p>{dates.Studentlistfinal}</p>
        )}
        {selectedComponent === "Studentlistfinal" && (
          <div className="calendar">
            <input
              type="date"
              id="date-final"
              value={dates.Studentlistfinal || ""}
              onChange={handleDateChange}
            />
          </div>
        )}
      </div>
    </div>

          <div className="Studentlist2-1">
            <Studentlistchance data={data} />
            <Studentlistsituation data={data} />
          </div>

          <div className="Studentlist3">
            <Studentlistselect2 data={data} />
            <Studentlistname2 data={data} />
            <Studentlistfurigana2 data={data} />
            <Studentlistunivname2 data={data} />
            <Studentlistinfor2 data={data}/>
          </div>

          <div className="Studentlist-container2">
      <div
        className="Studentlist-d"
        onClick={() => handleStudentListClick("Studentlistfirst2")}
      >
        {dates.Studentlistfirst2 && (
          <p>{dates.Studentlistfirst2}</p>
        )}
        {selectedComponent === "Studentlistfirst2" && (
          <div className="calendar">
            <input
              type="date"
              id="date-first"
              value={dates.Studentlistfirst2 || ""}
              onChange={handleDateChange}
            />
          </div>
        )}
      </div>

      <div
        className="Studentlist-e"
        onClick={() => handleStudentListClick("Studentlistround2")}
      >
        {dates.Studentlistround2 && (
          <p>{dates.Studentlistround2}</p>
        )}
        {selectedComponent === "Studentlistround2" && (
          <div className="calendar">
            <input
              type="date"
              id="date-round"
              value={dates.Studentlistround2 || ""}
              onChange={handleDateChange}
            />
          </div>
        )}
      </div>

      <div
        className="Studentlist-f"
        onClick={() => handleStudentListClick("Studentlistfinal2")}
      >
        {dates.Studentlistfinal2 && (
          <p>{dates.Studentlistfinal2}</p>
        )}
        {selectedComponent === "Studentlistfinal2" && (
          <div className="calendar">
            <input
              type="date"
              id="date-final"
              value={dates.Studentlistfinal2 || ""}
              onChange={handleDateChange}
            />
          </div>
        )}
      </div>
    </div>

          <div className="Studentlist3-1">
            <Studentlistchance2 data={data} />
            <Studentlistsituation2 data={data} />
          </div>

          {isDateVisible && (

          <div className="FirstDate">
         <label htmlFor="day"></label>
          <input
            type="date"
            id="date"
            value={Day}
            onChange={handleDateChange}
            className="date-input"
          />
          </div>
          )}
        

          <div className="Pagenation">

            {activePage === 1 ? (
              <Pageleftnot data={data} />
            ) : (
              <Pageleft data={data} onClick={() => handlePageClick(activePage - 1)} />
            )}

            {activePage === 1 ? (
              <Page1blue
                data={data}
                onClick={() => handlePageClick(1)}
              />
            ) : (
              <Page1
                data={data}
                onClick={() => handlePageClick(1)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            )}
            {activePage === 4 ? (
              <Page
                data={data}
                onClick={() => handlePageClick(2)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            ) : activePage === 2 ? (
              <Page2blue
                data={data}
                onClick={() => handlePageClick(2)}
              />
            ) : (
              <Page2
                data={data}
                onClick={() => handlePageClick(2)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            )}

            {activePage === 1 ? (
              <Page
                data={data}
                onClick={() => handlePageClick(3)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            ) : activePage === 3 ? (
              <Page3blue
                data={data}
                onClick={() => handlePageClick(3)}
              />
            ) : (
              <Page3
                data={data}
                onClick={() => handlePageClick(3)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            )}
            {activePage === 4 ? (
              <Page4blue
                data={data}
                onClick={() => handlePageClick(4)}
              />
            ) : (
              <Page4
                data={data}
                onClick={() => handlePageClick(4)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            )}

            {activePage === 4 ? (
              <Pagerightnot data={data} />
            ) : (
              <Pageright
                data={data}
                onClick={() => handlePageClick(activePage + 1)}
              />
            )}
          </div>
          <div className="Pagenation1">

            {activePage === 1 ? (
              <Pageleftnot data={data} />
            ) : (
              <Pageleft data={data} onClick={() => handlePageClick(activePage - 1)} />
            )}

            {activePage === 1 ? (
              <Page1blue
                data={data}
                onClick={() => handlePageClick(1)}
              />
            ) : (
              <Page1
                data={data}
                onClick={() => handlePageClick(1)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            )}
            {activePage === 4 ? (
              <Page
                data={data}
                onClick={() => handlePageClick(2)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            ) : activePage === 2 ? (
              <Page2blue
                data={data}
                onClick={() => handlePageClick(2)}
              />
            ) : (
              <Page2
                data={data}
                onClick={() => handlePageClick(2)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            )}

            {activePage === 1 ? (
              <Page
                data={data}
                onClick={() => handlePageClick(3)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            ) : activePage === 3 ? (
              <Page3blue
                data={data}
                onClick={() => handlePageClick(3)}
              />
            ) : (
              <Page3
                data={data}
                onClick={() => handlePageClick(3)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            )}
            {activePage === 4 ? (
              <Page4blue
                data={data}
                onClick={() => handlePageClick(4)}
              />
            ) : (
              <Page4
                data={data}
                onClick={() => handlePageClick(4)}
                style={{ backgroundColor: "#FFFFFF" }}
              />
            )}

            {activePage === 4 ? (
              <Pagerightnot data={data} />
            ) : (
              <Pageright
                data={data}
                onClick={() => handlePageClick(activePage + 1)}
              />
            )}
          </div>

          
        </main>
        
      </header>
      </div>
      </div>
      </div>
    </div>
    
  );
}


export default App;
