import React from 'react';

//리액트에서 반복 시킬때 무조건 map이란 함수를 넣는다
//map은 파라미터로 함수가 하나 들어감
//맵은 데이터의 갯수만큼 함수를 실행시켜준다
function TodoList({data}){
    return(
        <ul>
            {/* 둘다 됨 */}
            {data.map((item)=><li>{item}</li>)}

            {/* {data.map(function (item){
                return <li>{item}</li>
            })} */}
        </ul>
    );
}

export default TodoList