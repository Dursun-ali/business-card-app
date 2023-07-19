import React from "react";
import "./UserDetails.css";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Person from "../components/Person";
import UserData from "./UserData";
import { Link, useParams } from "react-router-dom";
import DetailsUp from "../components/DetailsUp";
import DetailsDown from "../components/DetailsDown";
import DetailsDownData from "./DetailsDownData";

const UserDetails = () => {
    const params = useParams();
    console.log(params);
  return (
    <>
      <div className="UserContainer container-fluid">
        <div className="row">
          <div className="col-sm-2 sidebar-wrapper-container">
            <SideBar />
          </div>
          <div className="col-10 navbar-wrapper-container">
            <Navbar />
            <div className="row">
              <div className="col-12 p-0">
                <div className="user-wrapper">
                  <div className="user-details-box">
                    <div className="user-details-wrapper">
                      <div className="row">
                        <div className="col-12">
                          <div className="person-link-wrapper">
                            <Link>Personel Listesi </Link> -{" "}
                            <Link>Personel Kart Detayları</Link>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
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
