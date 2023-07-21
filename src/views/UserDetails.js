import React from "react";
import "./UserDetails.css";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import DetailsUp from "../components/DetailsUp";
import DetailsDown from "../components/DetailsDown";
import DetailsDownData from "./DetailsDownData";

const UserDetails = () => {
  const params = useParams();

  return (
    <>
      <div className="UserContainer container-fluid">
        <div className="row">
          <div className=" col-lg-3 col-xl-2 sidebar-wrapper-container">
            <SideBar />
          </div>
          <div className=" col-lg-9 col-xl-10  navbar-details-wrapper-container">
            <Navbar />
            <div className="row">
              <div className="col-12 p-0">
                <div className="user-details-wrapper-container">
                    <div className="user-details-wrapper">
                      <div className="row">
                        <div className="col-12">
                          <div className="person-link-wrapper">
                            <Link className="person-list" to="/">Personel Listesi </Link> <span> {">"} </span>
                            <Link style={{color:"#245C94",fontWeight:"600"}}>Personel Kart Detayları</Link>
                          </div>
                        </div>
                      </div>
                      <div className="userDeatails-responsive">
                      <div className="row">
                        <div className="col-12 p-0">
                          <DetailsUp />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="user-details-down ">
                            {DetailsDownData.map((oItem, oIndex) => {
                              return (
                                <DetailsDown oItem={oItem} oIndex={oIndex} />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      </div>

                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
