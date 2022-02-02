// 나만의 Custom Hook 만들기
import { useEffect, useState } from "react";

// 데이터 조회(GET)
export default function useFetch(url) {
	const [ data, setData ] = useState([]);
	
	useEffect(() => {
		fetch(url)
		.then(res => { return res.json(); })
		.then(data => { setData(data); });
	}, [url]);

	return data;
};