import { Checkbox } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchProjectTask } from "../../actions/projecttasks";
import "./SearchResultProject.css";
import { useParams } from "react-router-dom";

const SearchResultProject = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const searchshit = params.searchshit;
  useEffect(() => {
    dispatch(searchProjectTask(searchshit));
  }, [dispatch, searchshit]);
  return (
    <div className="SearchResult">
      <div className="topbar">
        <p
          style={{
            color: "white",
            fontWeight: "bolder",
            fontSize: "24px",
            width: "400px",
          }}
        >
          Search Results
        </p>
      </div>
      <div style={{ marginLeft: "100px" }}>
        {/* {searchtasks
          ? searchtasks.map((task) => ( */}
        <div
          style={{
            cursor: "pointer",
            borderBottom: "1px solid gray",
            width: "900px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              width: "900px",
            }}
          >
            <Checkbox
              style={{
                color: "white",
                position: "relative",
                bottom: "10px",
              }}
            />
            <p
              style={{
                color: "white",
                fontWeight: "bolder",
                width: "800px",
              }}
            >
              Shit
            </p>
          </div>
          <p
            style={{
              color: "gray",
              fontWeight: "bolder",
              fontSize: "15px",
              position: "relative",
              left: "43px",
              bottom: "14px",
              width: "800px",
            }}
          >
            Bruhhh
          </p>
        </div>
        {/* )) : ""} */}
        {/* {searchtasks.length === 0 ? ( */}
        {/* <div style={{ marginLeft: "250px", marginTop: "40px" }}>
          <p style={{ color: "white", fontSize: "48px" }}>Nothing To Show :(</p>
          <p
            style={{
              color: "white",
              fontSize: "48px",
              marginLeft: "150px",
              marginTop: "20px",
            }}
          >
            Bruh
          </p>
        </div> */}
        {/* ) : ( "" )} */}
      </div>
    </div>
  );
};

export default SearchResultProject;
