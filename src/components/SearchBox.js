import React from "react"
import "./style.css";

function SearchBox(props) {

    return (
        <div className="container-fluid">


            <header className="z-depth-3 col s12" >
                <div className="row">

                    <div className="col s6">



                        <h3 className="right-align headerText">Merrill Lynch Wealth Managment</h3>

                    </div>
                    <div className="col s6 ">

                        <div className="col s6 inputAndButton right-align ">

                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className=" inputBox  "
                                placeholder="Search Employees by Name" />


                        </div>
                        <div className="col m4">


                            <button
                                type="submit"
                                value=""
                                className=" btn z-depth-2 waves-effect  searchBttn"
                                onClick={props.handleSearch} >Search our Employees!</button>
                        </div>






                    </div>
                    {/* </header > */}
                </div>
            </header>
        </div >
    )
}

export default SearchBox