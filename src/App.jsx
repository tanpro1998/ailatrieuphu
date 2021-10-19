import { useState, useEffect, useMemo } from "react";
import "./app.scss";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [money, setMoney] = useState(`$ 0`);

  const data = [
    {
      id: 1,
      question: "Giải Grand Slam đầu tiên trong năm là giải nào?",
      answers: [
        {
          text: "Austrlia mở rộng",
          correct: true,
        },
        {
          text: "Wimbledon",
          correct: false,
        },
        {
          text: "Roland Garos",
          correct: false,
        },
        {
          text: " Mỹ mở rộng",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Hệ thống đô thị ở Việt Nam được phân thành mấy loại?",
      answers: [
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
        {
          text: "6",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Cầu thủ nào đạt danh hiệu Quả bóng vàng Việt Nam năm 2010?",
      answers: [
        {
          text: "Minh Phương",
          correct: true,
        },
        {
          text: "Vũ Phong",
          correct: false,
        },
        {
          text: "Tấn Trường",
          correct: false,
        },
        {
          text: "Trọng Hoàng",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "Trên mặt thoáng chất lỏng có hai quá trình ngược nhau, đó là sự bay hơi và gì?",
      answers: [
        {
          text: "Sự thăng hoa",
          correct: false,
        },
        {
          text: "Sự ngưng tụ",
          correct: true,
        },
        {
          text: "Sự đông đặc",
          correct: false,
        },
        {
          text: "Sự kết tủa",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "Tính đến năm 2012, thành phố nào 3 lần đăng cai Thế vận hội mùa hè?",
      answers: [
        {
          text: "London",
          correct: false,
        },
        {
          text: "Paris",
          correct: false,
        },
        {
          text: "Chicago",
          correct: false,
        },
        {
          text: "Tokyo",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question:
        "Cơ quan nào sau đây dự trữ tỉ lệ glycogen cao nhất so với tỉ trọng của nó?",
      answers: [
        {
          text: "Cơ",
          correct: false,
        },
        {
          text: "Não",
          correct: false,
        },
        {
          text: "Gan",
          correct: true,
        },
        {
          text: "Mô mỡ",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "“Thiếu nữ bên hoa sen”,”Hai thiếu nữ và em bé”,”Thiếu nữ ngồi bên tranh tam đa” là bức tranh nổi tiếng của ai?",
      answers: [
        {
          text: "Tô Ngọc Vân",
          correct: true,
        },
        {
          text: "Bùi Xuân Phái",
          correct: false,
        },
        {
          text: "Nguyễn Tư Nghiêm",
          correct: false,
        },
        {
          text: "Nguyễn Sáng",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Ca khúc nào đạt giải thưởng Bài hát Việt của năm 2010?",
      answers: [
        {
          text: "Việt Nam",
          correct: true,
        },
        {
          text: "Chênh vênh",
          correct: false,
        },
        {
          text: "Chuông gió",
          correct: false,
        },
        {
          text: "Đồng hồ treo tường",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Đột biến ở NST bao nhiêu gây ra bệnh Down?",
      answers: [
        {
          text: "20",
          correct: false,
        },
        {
          text: "21",
          correct: true,
        },
        {
          text: "22",
          correct: false,
        },
        {
          text: "23",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "AFC Asian Cup 2011 được tổ chức tại quốc gia nào?",
      answers: [
        {
          text: "Qatar",
          correct: true,
        },
        {
          text: "Hàn Quốc",
          correct: false,
        },
        {
          text: "Nhật Bản",
          correct: false,
        },
        {
          text: "Iraq",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "Đội nào lên ngôi vô địch AFC Asian Cup 2011 tổ chức tại Qatar?",
      answers: [
        {
          text: "Nhật Bản",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "Hàn Quốc",
          correct: false,
        },
        {
          text: "Uzbekistan",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 25000" },
        { id: 14, amount: "$ 50000" },
        { id: 15, amount: "$ 100000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setMoney(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endgame">Your Money: {money}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
