body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#container {
  display: flex;
  height: 160%;
}

#menu {
  flex: 1;
  padding: 10px;
  background-color: #f9f9f9;
}

#map {
  flex: 2;
  height: 100%;
}

.group-header {
  cursor: pointer;
  font-weight: bold;
}

.group-content {
  display: none;
}

.group-content.active {
  display: block;
}

#search-container {
  margin-bottom: 10px;
}

#search-input {
  padding: 5px;
  width: calc(100% - 80px); /* 80px is the width of the button */
  margin-right: 5px;
}

#search-button {
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

footer p {
  margin: 0;
}
#checkbox-container {
  display: flex;
  flex-direction: column;
}

.checkbox-item {
  margin-bottom: 5px;
}

.checkbox-item label {
  margin-left: 5px;
}
