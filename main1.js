function checkTypeButton() {
    var getSelectedValue = document.querySelector('input[name="schedulerbuttons"]:checked');
    if(getSelectedValue != null) {
      document.getElementById("categorytype").innerHTML = getSelectedValue.value;
    return true
    }
    else {
      return false
    }
}

function checkDateButton() {
    var getSelectedValue = document.querySelector('input[name="selectiondate"]:checked');
    if((getSelectedValue != null) && (checkTypeButton() == true)) {
      document.getElementById("categorydate").innerHTML = getSelectedValue.value;
      return true
    }
    else if((getSelectedValue != null) && (checkTypeButton() == false)) {
      alert("Please select an appointment type")
    }
    else {
      return false
    }
}

function checkTimeButton() {
    var getSelectedValue = document.querySelector('input[name="selectiontime"]:checked');
    if((getSelectedValue != null) && (checkDateButton() == true) && (checkTypeButton()==true)) {
      document.getElementById("categorytime").innerHTML = getSelectedValue.value;
      return true
    }
    else if((getSelectedValue != null) && (checkDateButton() == false) && (checkTypeButton()==true)) {
      alert("Please select a date")
    }
    else if((getSelectedValue != null) && (checkDateButton() == false) && (checkTypeButton()==false)) {
      alert("Please select an appointment type and date")
    }
    else {
      return false
    }
}

function formValidation() {
  if((checkTypeButton()==false) || (checkDateButton()==false)  || (checkTimeButton()==false)) {
    alert("Please fill out all fields");
  }
}

/*IGNORE FOR NOW: working on the code

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("backbutton").style.display = "none";
  } else {
    document.getElementById("backbutton").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("continuebutton").innerHTML = "Confirm Appointment";
  } else {
    document.getElementById("continuebutton").innerHTML = "Continue";
  }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}*/

/*function displayRadioValue() {
    var date = document.getElementsByName('selectiondate');
    for(var i = 0; i < date.length; i++) {
        if(date[i].checked)
          {
          document.getElementsByClassName("times").style.visibility = "visibile"
      }
  }
}*/

/*var type = document.getElementById("categorytype");
var date = document.getElementById("categorydate");
var time = document.getElementById("categorytime");*/