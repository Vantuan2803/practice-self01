import React from 'react';
import './App.css';

// Tạo một functional component tên là PersonalInfo
function PersonalInfo(props) {
  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Họ và tên: {props.fullName}</p>
      <p>Tuổi: {props.age}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Ứng dụng ReactJS đầu tiên</h1>
      <img src="" alt="Ảnh" /> 
      <PersonalInfo fullName="Nguyễn Văn A" age={30} /> 
    </div>
  );
}

export default App;