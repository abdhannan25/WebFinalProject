import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import pic2 from '../img/teacher.jpeg'
import pic1 from '../img/MAli.jpg'
import pic3 from '../img/akhzar.jpg'
import pic4 from '../img/hisham.jpg'
import pic5 from '../img/imran.jpg'
import './facultyCard.css';


const FacultyCard = ({ faculty }) => {
  console.log(faculty);
  const facultyData = faculty;
  console.log(facultyData);    

    return (
      <div>
        <div className="row">
        {facultyData.map((faculty) => {      
        return (
          <>
                <div className="col-md-4">                  
                    <div class="card mb-5">
                      
                      <div class="card-body heading text-light">
                        <h5 class="card-title "><strong>{faculty.name}</strong></h5>
                        
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item fw-bold">Course: {faculty.course}</li>
                      </ul>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item text-align-left ">{faculty.desc}</li>
                      </ul>
                      <div class="card-body">
                        <button type="button" className="btn btn-primary ms-2">View Details</button>
                      </div>
                    </div>
                    </div>
            </>
        )
      })
      }
      </div>
      </div>
        )
    }



export default FacultyCard; 




















































{/* <img src={data.img} class="card-img-top " style={{height:'500px'}} alt="..."/> */}

  // state = {
  //   data: [
  //       {
  //         t_id: 1,
  //         name:"Muhammad Ali Khan",
  //         img: pic1,
  //         course:"MERN Stack",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 1,
  //       },
  //       {
  //         t_id: 2,
  //         name:"Muhammad Ahmad",
  //         img: pic2,
  //         course:"MEAN Stack",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 2,
  //       },
  //       {
  //         t_id: 3,
  //         name:"Akhzar Nazir",
  //         img: pic3,
  //         course:"Mobile App Development",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 3,
  //       },
  //       {
  //         t_id: 4,
  //         name:"Muhammad Qasim",
  //         img: pic1,
  //         course:"UI/UX Designing",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 4,
  //       },
  //       {
  //         t_id: 5,
  //         name:"Abdul Ahad",
  //         img: pic1,
  //         course:"WordPress Website Development",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 5,
  //       },
  //       {
  //         t_id: 6,
  //         name:"Hisham Sarwar",
  //         img: pic4,
  //         course:"Graphics Designing",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 6,
  //       },
  //       {
  //         t_id: 7,
  //         name:"Imran Ali",
  //         img: pic5,
  //         course:"Video Editing",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 7,
  //       },          
  //     ],
   
  // };

  