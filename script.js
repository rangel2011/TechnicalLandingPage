html,
body {
  min-width: 290px;
  color: #4d4e53;
  background-color: #ffffff;
  font-family: 'Open Sans', Arial, sans-serif;
  line-height: 1.5;
}

#navbar {
  position: fixed;
  min-width: 290px;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 100%;
  border-right: solid;
  border-color: rgba(0, 22, 22, 0.4);
}

header {
  color: black;
  margin: 10px;
  text-align: center;
  font-size: 1.8em;
  font-weight: thin;
}

#main-doc header {
  text-align: left;
  margin: 0px;
}

#navbar ul {
  height: 88%;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

#navbar li {
  color: #4d4e53;
  border-top: 1px solid;
  list-style: none;
  position: relative;
  width: 100%;
}

#navbar a {
  display: block;
  padding: 10px 30px;
  color: #4d4e53;
  text-decoration: none;
  cursor: pointer;
}

#main-doc {
  position: absolute;
  margin-left: 310px;
  padding: 20px;
  margin-bottom: 110px;
}

section article {
  color: #4d4e53;
  margin: 15px;
  font-size: 0.96em;
}

section li {
  margin: 15px 0px 0px 20px;
}

code {
  display: block;
  text-align: left;
  white-space: pre-line;
  position: relative;
  word-break: normal;
  word-wrap: normal;
  line-height: 2;
  background-color: #f7f7f7;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
}

@media only screen and (max-width: 815px) {
  /* For mobile phones: */
  #navbar ul {
    border: 1px solid;
    height: 207px;
  }

  #navbar {
    background-color: white;
    position: absolute;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    max-height: 275px;
    border: none;
    z-index: 1;
    border-bottom: 2px solid;
  }

  #main-doc {
    position: relative;
    margin-left: 0px;
    margin-top: 270px;
  }
}

@media only screen and (max-width: 400px) {
  #main-doc {
    margin-left: -10px;
  }

  code {
    margin-left: -20px;
    width: 100%;
    padding: 15px;
    padding-left: 10px;
    padding-right: 45px;
    min-width: 233px;
  }
}
