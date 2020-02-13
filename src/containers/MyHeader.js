import React from 'react';
import LogoImage from '../components/LogoImage/LogoImage';
import Info from '../components/Info/Info';
import LearnReact from '../components/LearnReact/LearnReact';
import TodoList from '../components/TodoList/TodoList'
import './MyHeader.css'
import logo from '../logo.svg';

// function MyHeader(){

//     const imgSrc = logo;
//     const file = '파일네임';
//     const href = 'http://naver.com';
//     const title= ' learn 리액트'

//     const myData ={
//         imgSrc : logo,
//         file: '파일네임'
//     }
//     return (
//         <div className='App-header'>
//             {/* tag에 props형태로 소스를 넘겨준거.. src란 이름으로 받으면 된다 */}
//             <LogoImage src={myData.imgSrc}/> 
//             <Info file_name={file}/>
//             <LearnReact href={href} title={title}/>
//         </div>
//     );
// }

class MyHeader extends React.Component{

    constructor(){
        super();
        this.state = {
            albumId: 1,
            id: 3,
            title: '',
            url: '',
            thumbnailUrl: ''
        }
    }

    async componentDidMount(){
        //렌더후 콜백
        //여기서 데이터를 주로 초기 세팅함
        //어떻게?? 백엔드에서 json형태로 데이터를 가져옴
        //스테이트 값을 바꾸는건 금지..

        //요건 프라미스
        // fetch('http://jsonplaceholder.typicode.com/photos/3')
        // .then(function(res){
        //     return res.json()

        // })
        // .then(function(json){
        //     console.log(json.id)
        //     this.setState(json)//여기서 말하는 this는 didMount 디스 .. 그래서 안됨
        // })
        // .catch(function(err){
        //     console.log('에러가났어여')
        // });
        // //요기까지 프라미스

        const data= await fetch('http://jsonplaceholder.typicode.com/photos/3');
        const json = await data.json();
        this.setState(json);



        // this.setState({
        //     imgSrc : logo,
        //     file: '파일네임',
        //     href : 'http://naver.com',
        //     title: ' learn 리액트'
        // });//setState에서 일부만 바꿀수도 있음... file만 바꾸고 싶으면 file 만 씀
    }
    render(){
        const { albumId, id,title,url,thumbnailUrl } = this.state
        const fakeData=['fdsfadsfds','222222222222','33333333333333','444444444444']
        return (
            // <div className='App-header'>
            //     {/* tag에 props형태로 소스를 넘겨준거.. src란 이름으로 받으면 된다 */}
            //     <LogoImage src={this.state.imgSrc}/> 
            //     <Info file_name={this.state.file}/>
            //     <LearnReact href={this.state.href} title={this.state.title}/>
            // </div>

            <div className='App-header'>
                {/* tag에 props형태로 소스를 넘겨준거.. src란 이름으로 받으면 된다 */}
                <LogoImage src={url }/> 
                <Info file_name={title}/>
                <LearnReact href={albumId} title={id}/>
                <TodoList data={fakeData}/>
            </div>
        );
    }
}

export default MyHeader