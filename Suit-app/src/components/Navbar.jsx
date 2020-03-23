import React from 'react';




function Navbar(){
  const header = {
    fontSize: "22px",
  }

  const menu = {
    fontSize: "24px",
    marghinLeft: "5px"
  }

  const h3 = {
    display: "inline-block",
    padding: "5px",
    textAlign: "center",
  }
  const divstyle = {
    marginLeft: "25%",
    fontSize: "12px",
    textAlign: 'center',
  }
  const navbar = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'rgba(0, 43, 201, 1)',
    width: "100vw",
    height: "52px",
    color: "white",
    marginLeft: "-8px",
    marginTop: '-10px',
    textAlign: 'center',
    paddingLeft: '10px',
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: "400",
  }

  const righth3 = {
    display: "inline-block",
    padding: '5px',
  }

  const menubars = {
    display: "inline-block",
    padding: '5px',
    margin: '10px',
    fontSize: '16px'
  }

  const rightsidenav = {
    display: "inline-block",
    marginLeft: '10vw'
  }
  const videostyle = {
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "-1",
    width: "100vw",
  }

  const h4 = {
    padding: "5px",
  }

  const line = {
    borderBottom: "1px solid white",
    marginLeft: "-25%",
    width: "120%",
    opacity: "50%",
  }

  const headerDivWrap={
    width: "100vw",
    height: "50vh"


  }



  return (
    <div>

    <div style={navbar}>

    <h1 style={header} className="headerClass">Wetsuit Main List</h1>

    <select style={menubars} id="sortBy" name="sortBy">
    <option value="In">In</option>
    <option value="Out">Out</option>
    <option value="Available">Available</option>
    <option value="Reserved">Reserved</option>
    </select>

    <div style={divstyle}>

    <style jsx>{`
      a{
        color: white;
      }
      a:visited {
        color:white
      }
      `}</style>

      </div>

      </div>
      </div>
    );
  }

  export default Navbar;
