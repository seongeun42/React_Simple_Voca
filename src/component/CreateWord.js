import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
	const days = useFetch('http://localhost:3001/days');
	const [ isLoading, setIsLoading ] = useState(false);
	const navigate = useNavigate();

	// 저장 버튼 클릭 시 새로고침 방지
	function onSubmit(e) {
		e.preventDefault();

		if (!isLoading)
		{
			setIsLoading(true);
			fetch(`http://localhost:3001/words/`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', },
				body: JSON.stringify({
					day: dayRef.current.value,
					eng: engRef.current.value,
					kor: korRef.current.value,
					isDone: false
				}), })
			.then(res => {
				if (res.ok) {
					alert("단어 생성이 완료되었습니다!");
					navigate(`/day/${dayRef.current.value}`);
					setIsLoading(false);
				};
			});
		}
	}

	// input에 입력된 값을 얻음
	// useRef는 dom에 접근할 수 있도록 해줌
	const engRef = useRef(null);
	const korRef = useRef(null);
	const dayRef = useRef(null);

	return(
		<form onSubmit={onSubmit}>
			<div className="input_area">
				<label>English</label>
				<input type="text" placeholder="word" ref={engRef} />
			</div>
			<div className="input_area">
				<label>Korean</label>
				<input type="text" placeholder="단어" ref={korRef} />
			</div>
			<div className="input_area">
				<label>Day</label>
				<select ref={dayRef}>
					{ days.map( day => <option key={day.id} value={day.day}>{day.day}</option> ) }
				</select>
			</div>
			<button style={{opacity: isLoading ? 0.3 : 1}}>{isLoading ? "Saving..." : "저장"}</button>
		</form>
	);
};