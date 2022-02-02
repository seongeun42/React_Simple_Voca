import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";
import PageMove from "./PageMove";
import Word from "./Word";

// 해당 Day에 있는 단어 리스트
function Day() {
	const day = useParams().day;
	const words = useFetch(`http://localhost:3001/words?day=${day}`);
	const navigate = useNavigate();

	function del()
	{
		if (words.length)
		{
			window.alert("단어가 존재해서 Day를 삭제할 수 없습니다.");
		}
		else if (window.confirm('삭제 하시겠습니까?'))
		{
			fetch(`http://localhost:3001/days/${day}`,
			{ method: 'DELETE', })
			.then(res => {
				if (res.ok) { navigate(`/`); }
			});
		}
	}

	return (
		<>
		<div className="header">
			<h2>Day {day}</h2>
			<div className="menu">
				<button className="btn_del" onClick={del}>삭제</button>
			</div>
		</div>
		{ words.length === 0 &&  <span>Loading...</span> }
		<table>
			<tbody>
				{words.map(word => (
					<Word word={word} key={word.id} />
				))}
			</tbody>
		</table>
		<PageMove day={day}/>
		</>
	);
}

export default Day;