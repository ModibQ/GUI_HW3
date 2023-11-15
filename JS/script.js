/* File: ~/script.js
  Homework 3: Creating an Interactive Dynamic Table
  Modib Qadir, UMass Lowell Computer Science, Modib_qadir@student.uml.edu
  Copyright (c) 2023 by Modib Qadir. All rights reserved. May be freely copied or
  excerpted for educational purposes with credit to the author.
  Updated by MQ on November 13th, 2023.
 */

document.addEventListener('DOMContentLoaded', function () {
    
    //Generate the Table
    function generateTable() {
        const startHorizontal = parseInt(document.getElementById('startHorizontal').value);
        const endHorizontal = parseInt(document.getElementById('endHorizontal').value);
        const startVertical = parseInt(document.getElementById('startVertical').value);
        const endVertical = parseInt(document.getElementById('endVertical').value);

        clearResults();

        if (
            isNaN(startHorizontal) || isNaN(endHorizontal) ||
            isNaN(startVertical) || isNaN(endVertical) ||
            startHorizontal < -50 || startHorizontal > 50 ||
            endHorizontal < -50 || endHorizontal > 50 ||
            startVertical < -50 || startVertical > 50 ||
            endVertical < -50 || endVertical > 50
        ) {
            displayError("Please enter valid numbers between -50 and 50 for all fields.");
            return;
        }
        
        if (isNaN(startHorizontal) || isNaN(endHorizontal) || isNaN(startVertical) || isNaN(endVertical)) {
            displayError("Please enter valid numbers for all fields.");
            return;
        }

        if (startHorizontal > endHorizontal || startVertical > endVertical) {
            displayError("Start values must be less than or equal to end values.");
            return;
        }

        const table = document.getElementById('multiplicationTable');
        const tableHTML = buildTableHTML(startHorizontal, endHorizontal, startVertical, endVertical);
        table.innerHTML = tableHTML;
    }

    // Function to display an error message to the user
    function displayError(message) {
        const output = document.getElementById('output');
        output.innerHTML = `<p>${message}</p>`;
        output.style.display = 'block'; 
    }

    // Function to clear previous results and errors
    function clearResults() {
        const output = document.getElementById('output');
        const table = document.getElementById('multiplicationTable');

        output.innerHTML = '';
        table.innerHTML = '';

        output.style.display = 'none'; 
    }

    function buildTableHTML(startHorizontal, endHorizontal, startVertical, endVertical) {
        let tableHTML = '<table>';

        // Create the header row with horizontal values
        tableHTML += '<tr><th></th>';
        for (let i = startHorizontal; i <= endHorizontal; i++) {
            tableHTML += `<th>${i}</th>`;
        }
        tableHTML += '</tr>';

        // Populate the table with multiplication values
        for (let i = startVertical; i <= endVertical; i++) {
            tableHTML += '<tr>';
            tableHTML += `<th>${i}</th>`;
            for (let j = startHorizontal; j <= endHorizontal; j++) {
                tableHTML += `<td>${i * j}</td>`;
            }
            tableHTML += '</tr>';
        }

        tableHTML += '</table>';
        return tableHTML;
    }

    const generateButton = document.querySelector('button');
    generateButton.addEventListener('click', generateTable);
});
