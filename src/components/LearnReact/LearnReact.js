import React from 'react';

// class LearnReact extends React.Component{

//     constructor(){
//         super();
//         console.log('Learn React 생성자 호출');
//     }
//     componentWillMount(){
//         console.log('Learn React 컴포넌트 윌마운트 호출')
//     }
//     componentDidMount(){
//         console.log('Learn React 컴포넌트 did마운트 호출')
//     }
//     myData;

//     render(){
//         console.log('Learn React 렌더함수 호출됨')
//         return (
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//         );
//     }
    
// }

function LearnReact({href, title}){
    return (
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
        {title}
        </a>
    )
}

export default LearnReact