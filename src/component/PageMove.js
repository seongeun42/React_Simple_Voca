import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";

function PageMove({ day }) {
	const days = useFetch('http://localhost:3001/days');
	const dayRef = useRef(null);
	const [ selected, setSelected ] = useState(day);
	
	function handleSelect(e) {
		setSelected(e.target.value);
	}

	function changePrev(e) {
		setSelected(Number(day) - 1);
	}

	function changeNext(e) {
		setSelected(Number(day) + 1);
	}

	return (
		<div className="next_prev">
			<form>
				<select name="day" ref={dayRef} value={selected} onChange={handleSelect}>
					{ days.map(d => <option key={d.id} value={d.day}>{d.day}</option>) }
				</select>
			</form>
			<Link to={`/day/${Number(selected)}`} className="go">Go</Link>
			<Link to={Number(day) === 1 ? "" : `/day/${Number(day) - 1}`} className="prev" onClick={changePrev}>Prev</Link>
			<Link to={Number(day) === days.length ? "" : `/day/${Number(day) + 1}`} className="next" onClick={changeNext}>Next</Link>
		</div>
	);
}

export default PageMove;