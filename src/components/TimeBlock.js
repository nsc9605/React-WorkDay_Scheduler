// import Header from "./components/Header";
// import './App.css';
// import { DateTime } from "luxon";
// import { useEffect, useState } from 'react'


// function App() {
// 	const [hoursOfDay, setHoursOfDay] = useState([]);
// 	const [currentTime] = useState(DateTime.now());
//     const [inputSave, setInputSave] = useState("")


// 	useEffect(() => {
// 		console.log('hello');
// 		var hoursOfDay = []
// 		for (let i = 8; i < 18; i++) {
// 			hoursOfDay.push(DateTime.now().set({ hour: i, minutes: 0 }))
// 		}
// 		setHoursOfDay(hoursOfDay)
// 		console.log(currentTime);
// 	}, [currentTime])

//     useEffect(() => {
//         var inputSave = ''
//         for (let i = 0; i <= 9; i++) {
//             let storeNewTask = localStorage.getItem(`${i}`);
//             if (storeNewTask !== null) {
//                 document.getElementById(`${i}`).value = storeNewTask;
//               } 
//               setInputSave(inputSave)
//               console.log(i)
//         }
//     }, [inputSave])

// 	const determinePastPresentFuture = (each) => {
// 		if(currentTime.hour === each.hour){
// 			return 'present'
// 		}
// 		if(currentTime.hour < each.hour){
//             return 'past'
// 		}
// 		else{
//             return 'future'
// 		}
// 	}
// 	return (
// 		<div className="App">
// 			<h1>Current Day and Time: {currentTime.toLocaleString(DateTime.DATETIME_MED)} </h1>
// 			{hoursOfDay.map((each, index) => {
// 				return (
// 					<div key={index} className={determinePastPresentFuture(each)}>
// 						<p>{each.toLocaleString(DateTime.TIME_SIMPLE)}</p>
// 					</div>
// 				)
// 			})}
// 		</div>
// 	);
// }
// export default App;