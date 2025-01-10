import '../Main.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bulkregister } from './ui-components';
import { Studentregister } from './ui-components';
import SiscoBear from './ui-components/siscobear.png'; // 画像をインポート
import { useCookies } from "react-cookie";

function App() {
  const [data, setData] = useState([]);
  const [phaseData, setPhaseData] = useState({});
  const username = 'arisa';
  const functionid = 'SC01';

  const handleRowClick = (studentId) => {
    navigate(`/studentinfor/${studentId}`);
  };

  //Cookies
  const [cookies, setCookie] = useCookies();

  //Studentlist
  const [selectedIds, setSelectedIds] = useState([]);

  //checkbok
  const handleCheckboxChange = (studentId) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(studentId)) {
        return prevSelectedIds.filter((id) => id !== studentId);
      } else {
        return [...prevSelectedIds, studentId];
      }
    });
  };

  //AppRoute
  const navigate = useNavigate();
  const handleClick = () => { navigate("/inforsession"); };
  const handleClick2 = () => { navigate("/student"); };
  const handleClick3 = () => { navigate("/studentinfor"); };

  // Phase
  const [selectedPhase, setSelectedPhase] = useState(0); // フェーズの選択状態を管理
  const [filteredData, setFilteredData] = useState([]);
  const [totalPhaseCount, setTotalPhaseCount] = useState(0);

  const handlePhaseChange = (phase) => {
    setSelectedPhase(phase); // フェーズを更新
    if (phase === 0) {
      setFilteredData(data); // 全データ表示
    } else {
      setFilteredData(data.filter((student) => student.phase_num >= phase)); // フィルタリング
    }

    //Number
    const totalCount =
      phaseData[phase]?.[`phase${phase}_count`] || 0; // 指定フェーズの人数
    setTotalPhaseCount(totalCount);
  };

  //Day
  const formatJapaneseDate = (datetime) => {
    if (!datetime) return "";

    const date = new Date(datetime);
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

    const month = date.getMonth() + 1; // 月 (0-11なので+1)
    const day = date.getDate();
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${month}月${day}日 (${dayOfWeek})`;
  };

  const formatJapaneseTime = (datetime) => {
    if (!datetime) return "";

    const date = new Date(datetime);
    const hours = date.getHours(); // 時
    const minutes = date.getMinutes(); // 分

    return `${hours}時${minutes}分`;
  };

  const [dates, setDates] = useState({
    Studentlistfirst: "",
    Studentlistround: "",
    Studentlistfinal: "",
  });

  const [activeCalendar, setActiveCalendar] = useState(null);
  const toggleCalendar = (studentId, field) => {
    setActiveCalendar((prev) =>
      prev?.student_id === studentId && prev?.field === field
        ? null
        : { student_id: studentId, field }
    );
  };

  const setCalendar = async (studentId, phase, date) => {
    try {
      const response = await fetch("https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/setCalendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_id: studentId,
          phase_num: phase,
          date: date,
          user: username,
          function_id: functionid



        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Success:", json);
    } catch (error) {
      console.error("Error in setCalendar:", error);
    }
  };



  const handleDateChange = (studentId, field, value) => {
    setFilteredData((prevData) =>
      prevData.map((student) =>
        student.student_id === studentId
          ? { ...student, [field]: value }
          : student
      )
    );
  };


  //Infor
  const [jobfairOptions, setJobfairOptions] = useState([]);
  const [formData, setFormData] = useState({ date: "" });

  useEffect(() => {
    const fetchJobfairDates = async () => {
      try {
        const response = await fetch(
          "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/selectStudent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recruit_year: cookies?.recruit_year,
            }),
          });

        const json = await response.json();
        console.log("Fetched Data:", json);
        console.log('aaa',json['jobfairlist']);
        await setJobfairOptions(json['jobfairlist']);

      } catch (error) {
        console.log(error);
      }
    };
    fetchJobfairDates();
  }, []);



  // Studentsituation
  const [selectedButtons, setSelectedButtons] = useState({}); // ボタンの選択状態を管理

  const handleButtonClick = async (studentId, phase, group, buttonIndex) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [studentId]: {
        ...prevState[studentId],
        [group]: buttonIndex, // 学生ごとのボタン状態を更新
      },
    }));

    const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/rec2-status";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: studentId,
          phase_num: phase,
          group: group,
          buttonIndex: buttonIndex,
          function_id: functionid,
          user: username,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Lambda Response:", result);
    } catch (error) {
      console.error("Error sending button index to Lambda:", error);
    }
  };



  //Page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage); //全体の長さを割る
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };//前のページに戻る

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };//次のページへ進む



  //Nendo
  const baseYear = 2025;
  const range = 3; // 範囲（-2～+3）
  const [selectedYear, setSelectedYear] = useState(baseYear);

  const years = Array.from({ length: range * 2 + 1 }, (_, i) => baseYear - range + i);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
    setCookie("recruit_year", event.target.value);
    console.log(cookies.recruit_year)
  };


  //Serch
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const results = data.filter((student) => {
      return (
        student.name.includes(query) ||
        student.university.includes(query) ||
        student.email?.includes(query) ||
        student.know_opportunity.includes(query)
      );
    });

    setFilteredData(query ? results : data); // クエリが空の場合は全データを表示
    setCurrentPage(1);
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
    const fetchData = async () => {
      try {
        const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/selectStudent";

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            function_id: functionid,
            user: username,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        console.log("Fetched Data:", json); // デバッグ用

        const initialButtons = {};
        (json["tabledata"] || []).forEach((student) => {
          if (student.phase_num === 1 || student.phase_num === 2) {
            initialButtons[student.student_id] = { Studentsituation1: 1 }; // 未提出
          } else if (student.phase_num === 3) {
            initialButtons[student.student_id] = { Studentsituation2: 2 }; // 未定
          } else if (student.phase_num === 4) {
            initialButtons[student.student_id] = { Studentsituation2: 2 }; // 未定
          } else if (student.phase_num === 5) {
            initialButtons[student.student_id] = { Studentsituation2: 2 }; // 未定
          }
        });
        setSelectedButtons(initialButtons);

        setData(json["tabledata"] || []); // テーブルデータ
        setFilteredData(json["tabledata"] || []); // 初期表示用
        setPhaseData(json["phases"] || {}); // フェーズデータ
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [functionid, username]);




  return (
    <div className="App">
      <div className="background">

        <div className="Scroll">
          <header className="App-header">
            <main>
              <div className="Phase">
                <button
                  onClick={() => handlePhaseChange(0)}
                  disabled={selectedPhase === 0}
                  className={`phase-button ${selectedPhase === 0 ? "disabled" : ""}`}
                >
                  <div>
                    エントリー
                    <br />
                    {phaseData[0]?.phase0_count || 0} 人
                  </div>
                </button>

                <button
                  onClick={() => handlePhaseChange(1)}
                  disabled={selectedPhase === 1}
                  className={`phase-button ${selectedPhase === 1 ? "disabled" : ""}`}
                >
                  <div>
                    説明会
                    <br />
                    {phaseData[1]?.phase1_count || 0} 人
                  </div>
                </button>

                <button
                  onClick={() => handlePhaseChange(2)}
                  disabled={selectedPhase === 2}
                  className={`phase-button ${selectedPhase === 2 ? "disabled" : ""}`}
                >
                  <div>
                    履歴書提出
                    <br />
                    {phaseData[2]?.phase2_count || 0} 人
                  </div>
                </button>

                <button
                  onClick={() => handlePhaseChange(3)}
                  disabled={selectedPhase === 3} // 選択中のボタンだけ無効化
                  className={`phase-button ${selectedPhase === 3 ? "disabled" : ""}`}
                >
                  <div>
                    一次面接
                    <br />
                    {phaseData[3]?.phase3_count || 0} 人
                  </div>
                </button>


                <button
                  onClick={() => handlePhaseChange(4)}
                  disabled={selectedPhase === 4}
                  className={`phase-button ${selectedPhase === 4 ? "disabled" : ""}`}
                >
                  <div>
                    座談会
                    <br />
                    {phaseData[4]?.phase4_count || 0} 人
                  </div>
                </button>

                <button
                  onClick={() => handlePhaseChange(5)}
                  disabled={selectedPhase === 5}
                  className={`phase-button ${selectedPhase === 5 ? "disabled" : ""}`}
                >
                  <div>
                    最終面接
                    <br />
                    {phaseData[5]?.phase5_count || 0} 人
                  </div>
                </button>

                <button
                  onClick={() => handlePhaseChange(6)}
                  disabled={selectedPhase === 6}
                  className={`phase-button ${selectedPhase === 6 ? "disabled" : ""}`}
                >
                  <div>
                    内定者
                    <br />
                    {phaseData[6]?.phase6_count || 0} 人
                  </div>
                </button>
              </div>

              <div className="Number">
                <p>件数: {filteredData.length} 人</p>
              </div>


              <div className="Container">
                <div className="Studentregister">
                  <button onClick={handleClick2}><Studentregister data={data} /></button>
                </div>
              </div>

              <div className="Nendo">
                <select id="year-select" value={selectedYear} onChange={handleChange} >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}年
                    </option>
                  ))}
                </select>
              </div>

              <div className="Infor2">
                <select
                  id="date"
                  name="date"
                  className="short-input"
                >
                  <option value="">説明会日時</option>
                  {jobfairOptions?.map((option) => {
                    return (
                      <option value={option.jobfair_id}>
                        {option.date}
                      </option>
                    )
                  })}
                </select>
              </div>


              <div className="Upload">

                <input type="file" accept="application/csv" />
                <button type="submit">アップロード</button>

              </div>

              <div className="Search">
                <input
                  type="search"
                  id="search"
                  placeholder="氏名/大学名/メール/当社を知ったきっかけ"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </div>




              <div className="Inforsessionschedule">
                <button onClick={handleClick}>
                  説明会日程
                </button>
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

              <div className="table-container">
                <table className="student-table">
                  <thead>
                    <tr>
                      <th colSpan="10" className="table-title">学生一覧</th>
                    </tr>
                    <tr>
                      <th>選択</th>
                      <th>氏名</th>
                      <th>フリガナ</th>
                      <th>大学</th>
                      <th>説明会日時</th>
                      <th>一次面接日時</th>
                      <th>座談会日時</th>
                      <th>最終面接日時</th>
                      <th>当社を知ったきっかけ</th>
                      <th>学生状況</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((student) => (
                      <tr key={student.student_id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(student.student_id)}
                            onChange={() => handleCheckboxChange(student.student_id)}
                          />
                        </td>
                        <td
                          className="name"
                          onClick={() => handleRowClick(student.student_id)}
                          style={{ cursor: "pointer" }}
                        >
                          {student.name}
                        </td>

                        <td>{student.furigana}</td>
                        <td>{student.university}</td>
                        <td>{student.jobfair_id}</td>


                        <td>
                          {activeCalendar?.student_id === student.student_id &&
                            activeCalendar?.field === "interview_date" ? (
                            <input
                              type="datetime-local"
                              value={student.interview_date || ""}
                              onChange={(e) =>
                                handleDateChange(
                                  student.student_id,
                                  "interview_date",
                                  e.target.value
                                )
                              }
                              onBlur={(e) => {
                                setActiveCalendar(null);
                                setCalendar(
                                  student.student_id,
                                  3,
                                  e.target.value
                                )
                              }}
                              autoFocus
                            />
                          ) : (
                            <div
                              onClick={() => toggleCalendar(student.student_id, "interview_date")}
                              className="calendar-placeholder"
                            >
                              {student.interview_date
                                ? formatJapaneseDate(student.interview_date)
                                : ""}
                              <br></br>
                              {student.interview_date
                                ? formatJapaneseTime(student.interview_date)
                                : ""}
                            </div>
                          )}
                        </td>


                        <td>
                          {activeCalendar?.student_id === student.student_id &&
                            activeCalendar?.field === "roundtable_date" ? (
                            <input
                              type="datetime-local"
                              value={student.roundtable_date || ""}
                              onChange={(e) =>
                                handleDateChange(
                                  student.student_id,
                                  "roundtable_date",
                                  e.target.value
                                )
                              }
                              onBlur={(e) => {
                                setActiveCalendar(null);
                                setCalendar(
                                  student.student_id,
                                  4,
                                  e.target.value
                                )
                              }}
                              autoFocus
                            />
                          ) : (
                            <div
                              onClick={() => toggleCalendar(student.student_id, "roundtable_date")}
                              className="calendar-placeholder"
                            >
                              {student.roundtable_date
                                ? formatJapaneseDate(student.roundtable_date)
                                : ""}
                              <br></br>
                              {student.roundtable_date
                                ? formatJapaneseTime(student.roundtable_date)
                                : ""}
                            </div>
                          )}
                        </td>


                        <td>
                          {activeCalendar?.student_id === student.student_id &&
                            activeCalendar?.field === "final_date" ? (
                            <input
                              type="datetime-local"
                              value={student.final_date || ""}
                              onChange={(e) =>
                                handleDateChange(
                                  student.student_id,
                                  "final_date",
                                  e.target.value
                                )
                              }
                              onBlur={(e) => {
                                setActiveCalendar(null);
                                setCalendar(
                                  student.student_id,
                                  5,
                                  e.target.value
                                )
                              }}
                              autoFocus
                            />
                          ) : (
                            <div
                              onClick={() => toggleCalendar(student.student_id, "final_date")}
                              className="calendar-placeholder"
                            >
                              {student.final_date
                                ? formatJapaneseDate(student.final_date)
                                : ""}
                              <br></br>
                              {student.final_date
                                ? formatJapaneseTime(student.final_date)
                                : ""}
                            </div>
                          )}
                        </td>


                        <td>{student.know_opportunity}</td>
                        <td>
                          {(student.phase_num === 0) && (
                            <div>
                              <p className="Studentsituation-label">説明会</p>
                              <div className="Studentsituation">
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation === 0
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation", 0)
                                  }
                                >
                                  出席
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation === 1
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation", 1)
                                  }
                                >
                                  欠席
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation === 2
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation", 2)
                                  }
                                >
                                  キャンセル
                                </button>
                              </div>
                            </div>
                          )}

                          {(student.phase_num === 1 || student.phase_num === 2) && (
                            <div>
                              <p className="Studentsituation-label">履歴書</p>
                              <div className="Studentsituation1">
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation1 === 0
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation1", 0)
                                  }
                                >
                                  提出
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation1 === 1
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation1", 1)
                                  }
                                >
                                  未提出
                                </button>
                              </div>
                            </div>
                          )}



                          {(student.phase_num === 3) && (
                            <div>
                              <p className="Studentsituation-label">一次面接</p>
                              <div className="Studentsituation2">
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 0
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 0)
                                  }
                                >
                                  合格
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 1
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 1)
                                  }
                                >
                                  不合格
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 2
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 2)
                                  }
                                >
                                  未定
                                </button>
                              </div>
                            </div>
                          )}
                          {(student.phase_num === 4) && (
                            <div>
                              <p className="Studentsituation-label">座談会</p>
                              <div className="Studentsituation2">
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 0
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 0)
                                  }
                                >
                                  合格
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 1
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 1)
                                  }
                                >
                                  不合格
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 2
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 2)
                                  }
                                >
                                  未定
                                </button>
                              </div>
                            </div>
                          )}
                          {(student.phase_num === 5) && (
                            <div>
                              <p className="Studentsituation-label">最終面接</p>
                              <div className="Studentsituation2">
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 0
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 0)
                                  }
                                >
                                  合格
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 1
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 1)
                                  }
                                >
                                  不合格
                                </button>
                                <button
                                  className={
                                    selectedButtons[student.student_id]?.Studentsituation2 === 2
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleButtonClick(student.student_id, student.phase_num, "Studentsituation2", 2)
                                  }
                                >
                                  未定
                                </button>
                              </div>
                            </div>
                          )}

                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

              <div className="Pagination">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="page-button"
                >
                  &lt;
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                  >
                    {index + 1}
                  </button>
                ))}

                {totalPages > 5 && <span className="dots">...</span>}

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="page-button"
                >
                  &gt;
                </button>
              </div>

              <div className="Pagination1">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="page-button"
                >
                  &lt;
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                  >
                    {index + 1}
                  </button>
                ))}

                {totalPages > 5 && <span className="dots">...</span>}

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="page-button1"
                >
                  &gt;
                </button>
              </div>



            </main>

          </header>
        </div>
      </div>
    </div>

  );
}


export default App;
