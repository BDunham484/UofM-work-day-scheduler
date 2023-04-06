let currentDayEl = $('#currentDay');
let containerEl = $('#container');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    let hour;
    let militaryHour;
    for (i = 0; i < 9; i++) {
        if ((i + 9) < 12) {
            hour = i + 9
            amPm = 'AM'
            militaryHour = i + 9;
        } else if ((i + 9) === 12) {
            hour = 12
            amPm = 'PM'
            militaryHour = i + 9;
        } else {
            hour = i - 3
            amPm = 'PM'
            militaryHour = i + 9;
        }
        
        let timeBlockRow = $('<div>')
            .attr('id', 'hour-' + hour)
            .attr('class', 'row time-block');

        let timeOfDay = $('<div>')
            .attr('class', 'col-2 col-md-1 hour text-center')
            .text(hour + amPm);

        let textArea = $('<textarea>')
            .attr('class', 'col-8 col-md-10 description')
            .attr('rows', '3');

        let saveButton = $('<button>')
            .attr('class', 'btn saveBtn col-2 col-md-1')
            .attr('aria-label', 'save');

        let icon = $('<i>')
            .attr('class', 'fas fa-save')
            .attr('aria-hidden', 'true');


        timeBlockRow.append(timeOfDay);
        timeBlockRow.append(textArea);
        timeBlockRow.append(saveButton);
        saveButton.append(icon);
        containerEl.append(timeBlockRow);


        let currentHour = dayjs().hour()

        if (currentHour > militaryHour) {
            textArea.addClass('past')
        } else if (currentHour === militaryHour) {
            textArea.addClass('present');
        } else {
            textArea.addClass('future');
        }

    }
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    currentDayEl.text(dayjs().format('MMM D, YYYY'))

    // let interval = ((1000 * 60) * 60)
    // const getToday = () => {
    //     currentDayEl.text(dayjs().format('MMM D, YYYY'))
    // }
    // setInterval(getToday, interval);
});
