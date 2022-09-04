import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

import desktop from '../img/left.png'
import mobile from '../img/bottom.png'
import logo from '../img/logo-tmt.png'

const Home = () => {
  let imageUrl;
  if (window.innerWidth < 740 || (window.innerWidth >= 740 && window.innerWidth < 1024)) {
    imageUrl = mobile;
  } else {
    imageUrl = desktop;
  }
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Nam");
  const handleOnChange = (e) => {
    setName(e.target.value);
  }

  
  const handleClickLick = () => {
    if(name === "") {
      alert("Anh chị vui lòng nhập tên vào khung bên dưới!");
    }
  }
  return (
    <div className='home'>
      <div className="img-div">
        <img src={desktop} alt="" />
      </div>
      <div className="content">

        <img src={logo} alt='logo' className='logo-tmt' />
        <h1 className="green">Thân mời</h1>

        <p className="content-text">Quý anh chị cựu sinh viên tham dự chương trình</p>
        
        <h2><strong>THÁNH LỄ MỪNG BỔN MẠNG </strong></h2> 
        <h2><strong>GIA ĐÌNH SINH VIÊN TÔMA THIỆN </strong></h2>
        <h2><strong>VÀ HỌC MẶT CỰU SINH VIÊN </strong></h2>

        <p className="green place"><strong>Địa điểm:</strong> Nhà thờ Đồng Tiến</p>
        <p className="green time"><strong>Thời gian:</strong> 8h00, Chúa nhật 18/09/2022</p>


        <p className="title-input"> Mời <strong>Anh/Chị</strong> nhập tên vào khung bên dưới:</p>
        <input type="text" placeholder="" required onChange={handleOnChange} />
        <select className="btn-gender"value={gender} onChange={e=>{setGender(e.target.value); console.log(gender)}}>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>

        <Link onClick={handleClickLick} className="btn-get-card" to={name === "" ? `/` : `/card?name=${name}&gender=${gender}`} style={{ textDecoration: 'none' }}><p className="btn-title">Xem Thiệp</p></Link>

      </div>
      <div className="img-div-bottom">
        <img src={mobile} alt="" />
      </div>
    </div>
  )
}

export default Home