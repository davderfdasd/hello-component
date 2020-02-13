//<img src={logo} className="App-logo" alt="logo" />
import React from 'react';
//import logo from '../../logo.svg'; // 이미지를 임포트해서 변수 같이 쓰는거

// const LogoImage = () =>{
//     return (
//         <img src={logo} className="App-logo" alt="logo" />
//     );
// };

// const LogoImage = () => <img src={logo} className="App-logo" alt="logo" />

function LogoImage  ({src}) {
    return (
        <img src={src} className="App-logo" alt="logo" />
    );
};

export default LogoImage