import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
// import React, { Component } from 'react'
import '../../components/Order/CustomerInfo.css'
// import styled from "styled-components";
import male from "../../assets/img/icons8-male-48.png";
// import female from "assets/img/icons8-female-48.png";
import sillage from "../../assets/img/icons8-spa-flower-48.png";
import longative from "../../assets/img/icons8-time-48.png";
// import lai from "assets/img/download.jpg";
import perfume from "../../assets/img/nuoc-hoa.jpg";
// import note from "assets/img/ho-phach.jpg";
// import { blue } from "@material-ui/core/colors";
// import Autocomplete from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import { createMuiTheme } from '@material-ui/core';

//import phần search
// import { employeesList, employeesTasks } from 'components/Order/data.js';
// import DataSource from 'devextreme/data/data_source';
// import { Lookup, DropDownOptions } from 'devextreme-react/lookup';


const tittleArray = ['Name', 'Email', 'Address', 'Gender'];

// export const SearchOrderBar = () => {
//   return (
//     <div>
//       <Autocomplete

//         id="combo-box-demo"
//         options={top100Films}
//         getOptionLabel={(option) => option.title}
//         style={{ width: 300 ,fontSize:17}}
//         renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
//       />
//     </div>
//   );
// }

export const OrderList=()=>{
  return(

    <div style={{display:"flex",flexDirection:"column",marginTop:"20px",width:"320px"}}>
   <div style={{background:"#13A3AC",width:"fill-content",height:"max-content",padding:"5px",textAlign:"center"}}>
     {/* <div style={{borderRadius:"20px",background:"white",height:30}}> */}
       <form>
       <input type="search" placeholder="Search by Name or ID" style={{width:300,borderRadius:20,paddingLeft:15,border:0}}/>
       </form>
     {/* </div> */}
   </div>
   <table>
     <tr style={{background:"coral"}}>
    <th>OrderID</th>
    <th>Customer Name</th>
  </tr>
  <tr>
    <td>Nguyễn Khắc</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Nothign</td>
    <td>Maria Anders SOnajes</td>
  </tr>
     </table>
    </div>
  );

}


export const PerfumeItem=(argument)=>{
  return(

    <div className="perfume-note">

    {/* Sau này khi highlight note item, chỉ cần đổi background của class bottom-note-item */}
    <div className="perfume-note-item" style={{ width: "max-content" }}>
    <div className="perfume-order">
      <p style={{ margin: 0 }}>1</p>
    </div>
      <img src={argument.src} style={{ width: 50, height: 50, borderRadius: "50%",backgroundSize:"cover",objectFit:"cover" }} />
    <p style={{ fontWeight: "bold", margin: 0, marginLeft: 15 }}>{argument.value}</p>
    
      {/* <p style={{ fontWeight: "bold", margin: 0, marginLeft: 15 }}>Jasmin</p> */}
    </div>
  </div>
  );
}

export const NoteItem = (argument) => {
  return (
    <div className="bottom-note">

      {/* Sau này khi highlight note item, chỉ cần đổi background của class bottom-note-item */}
      <div className="bottom-note-item" style={{ width: "max-content" }}>
      <div className="note-order">
        <p style={{ margin: 0 }}>1</p>
      </div>
        <img src={argument.src} style={{ width: 50, height: 50, borderRadius: "50%",backgroundSize:"cover",objectFit:"cover" }} />
        {/* <p style={{ fontWeight: "bold", margin: 0, marginLeft: 15 }}>Jasmin</p> */}
      </div>
      <p style={{ fontWeight: "bold", margin: 0, marginLeft: 15 }}>{argument.value}</p>
    </div>
  );
}
export const Leftdiv = () => {
  return (
    <div style={{ margin: 20, boxShadow: "2px 2px 2px 2px lightgrey", paddingTop: 10, borderRadius: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", width: 200, height: "max-content", borderRadius: 20, alignItems: "center" }}>
        {/* <div className="div-flex-left"> */}
        <img src={perfume} style={{ height: 200, borderRadius: 20, width: 180 }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontWeight: "bold", color: "#EB5757" }}>Rating</p>
            <p style={{ fontWeight: "bold", color: "#EB5757" }}>Voter</p>

          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 15 }}>
            <p>4.5</p>
            <p>2930</p>
          </div>
        </div>
        <img src={male} style={{ width: "15%", height: "15%" }} />
      </div>
    </div>
  );
}
export const Longative = (argument) => {
  return (
    <div className="right-div">
      <img className="img-top-right" src={longative} />
      <p style={{ fontWeight: "bold", textAlign: "center", color: "#D63333" }}>Longevity</p>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontWeight: "bold" }}>poor</p>
          <p style={{ fontWeight: "bold" }}>Week</p>
          <p style={{ fontWeight: "bold" }}>Moderate</p>
          <p style={{ fontWeight: "bold" }}>Longlasting</p>
          <p style={{ fontWeight: "bold" }}>Verylonglasting</p>

        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 15 }}>
          <p>{argument.poor}</p>
          <p>{argument.week}</p>
          <p>{argument.moderate}</p>
          <p>{argument.longlasting}</p>
          <p>{argument.verylong}</p>
        </div>
      </div>
    </div>
  );
}
export const Sillage = (argument) => {
  return (
    <div className="right-div">
      <img className="img-top-right" src={sillage} />
      <p style={{ fontWeight: "bold", textAlign: "center", color: "#D63333" }}>Sillage</p>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontWeight: "bold" }}>Soft</p>
          <p style={{ fontWeight: "bold" }}>Heavy</p>
          <p style={{ fontWeight: "bold" }}>Moderate</p>
          <p style={{ fontWeight: "bold" }}>Enormous</p>
          <p style={{ fontWeight: "bold" }}>Enormous</p>

        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 15 }}>
          <p>{argument.poor}</p>
          <p>{argument.heavy}</p>
          <p>{argument.moderate}</p>
          <p>{argument.enormous}</p>
        </div>
      </div>
    </div>
  );
}

export const LineOnly = (name) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className="div-flex-order-id">
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          {name.title}
        </p>
      </div>
    </div>
  );
}
export const OrderLine = (name) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className="div-flex-order-id">
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          {name.title}
        </p>
      </div>
      <div className="div-flex-order-id-value"> <p style={{ margin: 0 }}></p>{name.value}</div>
    </div>
  );
}
export const Timeline = (name) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className="div-flex-order-time">
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          {name.title}
        </p>
      </div>
      <div className="div-flex-order-time-value"> <p style={{ margin: 0 }}></p>{name.value}</div>
    </div>
  );
}
export const DivCustomerInfo = (value) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <p style={{ marginRight: 8, fontWeight: 'bold' }}>{value.title}: </p>
      <p>{value.info}</p>
    </div>
  );

}
const Top = (argument) => {
  return (
    <div>
      <div className="div-flex">
        <img id="colem" src={'https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400'} />
        <div className="div-flex-info">
          <DivCustomerInfo
            title={'Name'}
            info={'Nguyễn Khắc Sâm'}
          />
          <DivCustomerInfo
            title={'Email'}
            info={'samxxx@gmail.com'}
          />
          <DivCustomerInfo
            title={'Địa chỉ'}
            info={'44 đường 12 @kakalk'}
          />
          <DivCustomerInfo
            title={'Giới tính'}
            info={'Male'}
          />
        </div>
      </div>
      <div className="div-order-info">
        <OrderLine value="#2412"
          title="Order ID"
        />
        <OrderLine value="03/12/2020"
          title="Order Date"
        />
        <div style={{ display: 'flex', flexDirection: "row" }}>
          <Timeline value="1:30" title="Time Start" />
          <Timeline value="2:30" title="Time End" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 30 }}>
          <LineOnly title="Customer Message" />
          <p style={{ marginLeft: 25, marginRight: 20, marginTop: 10 }}>
            Không nhớ vào một buổi sáng nào được bà ngoại cho ra đồng nhặt cỏ cùng với dì tôi nhưng đó là lần tôi ngạc nhiên quá đỗi. Bước chân ngắn của thằng bé là tôi cứ líu ríu níu váy bà để lên cho được con đê cao. Lần đầu tiên tôi đứng trên đê làng. Cả một cánh đồng bát ngát trải dài những lượn sóng xanh rập rờn đến những dãy núi xa vời. Những cánh cò đang lả cánh như những con diều trắng chấp chới bay về phía mặt trời. Phương Đông sáng hồng lên, những đám mây ngũ sắc cho tôi một ấn tượng thần tiên. Ôi, con đê làng! Một buổi bình minh. Vâng, một bình minh mãi mãi cho tôi nhớ về quê hương dù nay tôi đã ở chân trời góc bể.

          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
          <LineOnly title="Expert Message" />
          <p style={{ marginLeft: 25, marginRight: 20, marginTop: 10 }}>
            Không nhớ vào một buổi sáng nào được bà ngoại cho ra đồng nhặt cỏ cùng với dì tôi nhưng đó là lần tôi ngạc nhiên quá đỗi. Bước chân ngắn của thằng bé là tôi cứ líu ríu níu váy bà để lên cho được con đê cao. Lần đầu tiên tôi đứng trên đê làng. Cả một cánh đồng bát ngát trải dài những lượn sóng xanh rập rờn đến những dãy núi xa vời. Những cánh cò đang lả cánh như những con diều trắng chấp chới bay về phía mặt trời. Phương Đông sáng hồng lên, những đám mây ngũ sắc cho tôi một ấn tượng thần tiên. Ôi, con đê làng! Một buổi bình minh. Vâng, một bình minh mãi mãi cho tôi nhớ về quê hương dù nay tôi đã ở chân trời góc bể.

          </p>
        </div>
      </div>
      <div className="div-order-info">
        <p style={{ fontWeight: "bold", marginLeft: 20, marginTop: 20, marginBottom: 0, fontSize: 24, color: "#083CF3" }}>Deaiid Depaer Agrahhsm</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Leftdiv />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Sillage />
            <Longative />
          </div>
        </div>
        <NoteItem />
      </div>
    </div>
  );
}
// export {NoteItem,Top};
