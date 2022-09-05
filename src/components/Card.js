import React from 'react'
import { Link, useLocation, useParam } from 'react-router-dom'
import html2canvas from 'html2canvas'

import './Card.css';

import frontCard from '../img/front-thiep.jpg';
import backCard from '../img/bg-thiep.png';
import logo from '../img/logo-tmt.png';

const Card = () => {
  let location = useLocation();
  console.log(location);
  let query = new URLSearchParams(location.search);
  let name = query.get("name");
  let gender = query.get("gender") === "Nam" ? "Anh" : "Chị";

  //create image and download
  const handleDownload = () => {
    const screenshortTarget = document.getElementById('back-card');

    html2canvas(screenshortTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      var anchor = document.createElement('a');
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "thiep.png");
      anchor.click();
      anchor.remove();
    })
  }
  return (
    <>

      <div className="card" id="card" >
        {/* <div>{name} and {gender}</div>
      <Link to={"/"} >Come back home!</Link> */}


        <div className='front-card' id="front-card">
          <img className='front-bg-card' src={frontCard} alt="" />
        </div>

        <div className='back-card' id="back-card">
          <img className='background-card' src={backCard} alt='' />
          <div className='content-card'>
            <img className='logo-tmt' src={logo} alt="" />
            <p className=' font-mini mr-4 '>Trong tâm tình hân hoan mừng kính thánh</p>
            <p className=' font-mini mr-2'><strong>TÔMA TRẦN VĂN THIỆN</strong></p>
            <p className=' font-mini mr-8'><strong>BỔN MẠNG GIA ĐÌNH SINH VIÊN TÔMA THIỆN</strong></p>

            <p className=' font-mini mr-2' >Chúng con trân trọng kính mời</p>

            <h3 className='name-member mr-4'>{gender + ' ' + name}</h3>

            <p className=' font-mini mr-2'> Tới hiệp dâng thánh lễ mừng bổn mạng gia đình sinh viên</p>
            <p className=' font-mini mr-8'>Tôma Thiện và chương trình họp mặt Cựu sinh viên</p>

            <p className=' font-mini mr-0 place'><strong>Địa điểm:</strong> Nhà thờ Đồng Tiến</p>
            <p className=' font-mini mr-12 time-work'><strong>Thời gian:</strong> 8h00, Chúa nhật 18/09/2022</p>

            <div className="time-line">
              <h3 className='mr-4 '>CHƯƠNG TRÌNH CỤ THỂ</h3>
              <p className='font-mini mr-4'><strong>07h30 - 08h00:</strong>  Đón tiếp</p>
              <p className='font-mini mr-4'><strong>08h00 - 08h20:</strong>  Giới thiệu khai mạc</p>
              <p className='font-mini mr-4'><strong>08h20 - 09h50:</strong>  Talkshow: Tôma Thiện trong tôi là ...</p>
              <p className='font-mini mr-4'><strong>09h50 - 10h00:</strong>  Giải lao</p>
              <p className='font-mini mr-4'><strong>10h00 - 11h15:</strong>  Thánh lễ</p>
              <p className='font-mini mr-16'><strong>11h15 - ...........:</strong>  Cơm trưa, văn nghệ</p>
            </div>

            <p className=' font-mini mr-4'>Nguyện xin Thiên Chúa qua lời chuyển cầu của Mẹ Maria</p>
            <p className=' font-mini mr-12'>và thánh Tôma Trần Văn Thiện ban muôn ơn lành cho quý vị!</p>


            <table>
              <tr className='row1'>
                <th className=' font-mini '>Hợp thỉnh <br /> Cha Linh hướng</th>
                <th className=' font-mini '>Trưởng Ban đại diện</th>
              </tr>
              <tr className='row1' >
                <td className=' font-mini' >L.m Gioan Lê Quang Việt</td>
                <td className=' font-mini'>Tôma Hồ Hoàng Vĩ</td>
              </tr>
            </table>
          </div>

        </div>

        <button className='btn-download' onClick={handleDownload}>Download</button>
      </div >
    </>
  )
}

export default Card