import React, { useState } from 'react'
import Slots from './components/Slots';
import Specialisations from './components/Specialisations';
import Price from './components/Price';
import Locations from './components/Locations';
import './style.css';
import DashboardHeader from '../../components/DashboardHeader';

/**
* @author
* @function Configuration
**/

const Configuration = (props) => {

  return (
    <>
      <div className="configuration_page page_padding"> {/* config 1  page start */}
        {/* section1 starts */}
        <section className="section1 pb-5 ">
        <DashboardHeader 
          title='Configuration'
        />
          <div className="container-fluid">
            <div className="content1 position-relative ">
              <div className="nav w-100 d-flex justify-content-center">
                <div className="bg_yellow rounded-3 p-3 mx-1 active" id="pills_slot_tab" data-bs-toggle="pill" data-bs-target="#pills_slot" role="tab" aria-controls="pills_slot" aria-selected="true">
                  <h6 className="m-0 position-relative text-white"><strong>SLOTS</strong></h6>
                </div>
                <div className="bg_yellow rounded-3 p-3 mx-1" id="pills_issue_tab" data-bs-toggle="pill" data-bs-target="#pills_issue" role="tab" aria-controls="pills_issue" aria-selected="false">
                  <h6 className="m-0 position-relative text-white"><strong>SPECIALISATIONS</strong></h6>
                </div>
                <div className="bg_yellow rounded-3 p-3 mx-1" id="pills_price_tab" data-bs-toggle="pill" data-bs-target="#pills_price" role="tab" aria-controls="pills_price" aria-selected="false">
                  <h6 className="m-0 position-relative text-white"><strong>PRICE</strong></h6>
                </div>
                <div className="bg_yellow rounded-3 p-3 mx-1" id="pills_location_tab" data-bs-toggle="pill" data-bs-target="#pills_location" role="tab" aria-controls="pills_location" aria-selected="false">
                  <h6 className="m-0 position-relative text-white"><strong>Location</strong></h6>
                </div>
              </div>
            </div>
            <div className="content2 position-relative p-3 bg-white shadow tab-content my-5 text-center rounded-3">
              
                
                <Specialisations />
                <Slots />
                <Price />
                <Locations />
             
            </div>
          </div>
        </section>
        {/* section1 end */}
        <hr />
      </div> 

 
    </>
  )

}

export default Configuration