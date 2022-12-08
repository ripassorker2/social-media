import React from "react";
import "./PostCard.css";
import { BsThreeDots, BsFillShareFill, BsFillPencilFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Rectangle1 from "../../../assets/Rectangle1.png";
import Rectangle2 from "../../../assets/Rectangle2.png";
import Rectangle3 from "../../../assets/Rectangle3.png";

const PostCard = () => {
  return (
    <div>
      {/* frist card  */}
      <div class="card mb-4">
        <img class="card-img-top" src={Rectangle1} alt="" />
        <div class="card-body p-3">
          <p className="fw-bold">✍️ Article</p>
          <div className="d-flex justify-content-between">
            <h5 class="card-title p-0 w-75 fw-bold">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </h5>
            <p className="fw-bold fs-4 text-black">
              <BsThreeDots />
            </p>
          </div>

          <p class="card-text ">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </div>
        <div className="d-flex footer-info justify-content-between px-3 py-1">
          <div className="d-flex  align-items-center">
            <img className="" src={Rectangle2} alt="" />
            <h4 className="ms-3">Sarthak Kamra</h4>
          </div>
          <div className="d-flex align-items-center justify-content-center align-content-center">
            <p className="w-100 me-4 pt-3">
              {" "}
              <AiOutlineEye /> 1.4K views
            </p>
            <button className="d-d-inline-block ">
              <BsFillShareFill />
            </button>
          </div>
        </div>
      </div>
      {/* Second Card  */}
      <div class="card mb-4">
        <img class="card-img-top" src={Rectangle2} alt="" />
        <div class="card-body p-3">
          <p className="fw-bold">🔬️ Education</p>
          <div className="d-flex justify-content-between">
            <h5 class="card-title fw-bold w-75">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h5>
            <p className="fw-bold fs-4 text-black">
              <BsThreeDots />
            </p>
          </div>

          <p class="card-text ">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </div>
        <div className="d-flex footer-info justify-content-between px-3 py-1">
          <div className="d-flex  align-items-center">
            <img className="" src={Rectangle3} alt="" />
            <h4 className="ms-3">Sarah West</h4>
          </div>
          <div className="d-flex align-items-center justify-content-center align-content-center">
            <p className="w-100 me-4 pt-3">
              {" "}
              <AiOutlineEye /> 1.4K views
            </p>
            <button className="d-d-inline-block ">
              <BsFillShareFill />
            </button>
          </div>
        </div>
      </div>
      {/* Third Card  */}
      <div class="card mb-4">
        <img class="card-img-top" src={Rectangle3} alt="" />
        <div class="card-body p-3">
          <p className="fw-bold">🗓️ Meetup</p>
          <div className="d-flex  align-items-center justify-content-between">
            <h5 class="card-title fw-bold w-75">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h5>
            <p className="fw-bold fs-4 text-black">
              <BsThreeDots />
            </p>
          </div>

          <div className="d-flex">
            <p className="fw-semibold text-black me-5">
              <span className="fw-bold fs-5">
                <MdDateRange /> {""}
              </span>
              Fri, 08 Dec, 2022
            </p>
            <p className="fw-semibold text-black ms-5">
              <span className="fw-bold fs-5">
                <HiOutlineLocationMarker /> {""}
              </span>
              Noida, India
            </p>
          </div>
          <div>
            <button className="btn btn-outline border-2 border w-100 text-center text-danger fw-semibold d-inline-block">
              Visit Website
            </button>
          </div>
        </div>
        <div className="d-flex footer-info justify-content-between px-3 py-1">
          <div className="d-flex  align-items-center">
            <img className="" src={Rectangle1} alt="" />
            <h4 className="ms-3">Ripas Sorker Rifat</h4>
          </div>
          <div className="d-flex align-items-center justify-content-center align-content-center">
            <p className="w-100 me-4 pt-3">
              {" "}
              <AiOutlineEye /> 1.4K views
            </p>
            <button className="d-d-inline-block ">
              <BsFillShareFill />
            </button>
          </div>
        </div>
      </div>
      {/* Four Card  */}
      <div class="card mb-4">
        <div class="card-body p-3">
          <p className="fw-bold">🗓️ Meetup</p>
          <div className="d-flex align-items-center justify-content-between">
            <h5 class="card-title py-0 fw-bold w-75">Software Developer</h5>
            <p className="fw-bold fs-4 text-black">
              <BsThreeDots />
            </p>
          </div>

          <div className="d-flex">
            <p className="fw-semibold text-black me-5">
              <span className="fw-bold fs-5">
                <MdDateRange /> {""}
              </span>
              Innovaccer Analytics Private Ltd.
            </p>
            <p className="fw-semibold text-black ms-5">
              <span className="fw-bold fs-5">
                <HiOutlineLocationMarker /> {""}
              </span>
              Noida, India
            </p>
          </div>
          <div>
            <button className="btn btn-outline border-2 border w-100 text-center text-success fw-semibold d-inline-block">
              Apply on Timesjobs
            </button>
          </div>
        </div>
        <div className="d-flex footer-info justify-content-between px-3 py-1">
          <div className="d-flex  align-items-center">
            <img className="" src={Rectangle2} alt="" />
            <h4 className="ms-3">Joseph Gray</h4>
          </div>
          <div className="d-flex align-items-center justify-content-center align-content-center">
            <p className="w-100 me-4 pt-3">
              {" "}
              <AiOutlineEye /> 1.4K views
            </p>
            <button className="d-d-inline-block ">
              <BsFillShareFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
