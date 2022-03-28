    var appointmentParsed = JSON.parse(localStorage.getItem('appointments'));
    for (var n of appointmentParsed) {
        var allAppointments = document.getElementById("allAppointments");
        var singleAppointment = document.createElement("div")
        singleAppointment.classList.add("singleAppointment")

        var dateIcon = document.createElement("i");
        dateIcon.classList.add("fas", "fa-regular", "fa-calendar-days");
        singleAppointment.appendChild(dateIcon);

        var dateInfo = document.createElement("h4");
        dateInfo.innerHTML = (n.date + " @ " + n.time)
        singleAppointment.appendChild(dateInfo);

        var typeIcon = document.createElement("i");
        typeIcon.classList.add("fas", "fa-solid", "fa-syringe");
        singleAppointment.appendChild(typeIcon);

        var typeInfo = document.createElement("h4");
        typeInfo.innerHTML = n.type
        singleAppointment.appendChild(typeInfo);

        var locationIcon = document.createElement("i");
        locationIcon.classList.add("fas", "fa-solid", "fa-location-dot");
        singleAppointment.appendChild(locationIcon);

        var locationInfo = document.createElement("h4");
        locationInfo.innerText = "TCS Hall";
        singleAppointment.appendChild(locationInfo);

        var downArrow = document.createElement("div");
        downArrow.classList.add("downArrow")

        var arrowCollapsible = document.createElement("i");
        arrowCollapsible.classList.add("fas", "fa-solid", "fa-caret-down");
        downArrow.appendChild(arrowCollapsible);

        singleAppointment.appendChild(downArrow);

        allAppointments.appendChild(singleAppointment)
        /*var lineBreak = document.createElement("br");
        singleAppointment.appendChild(lineBreak);*/
    }
