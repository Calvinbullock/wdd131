
import { participantTemplate, successesTemplate } from "./templates.js";

/* ==============================================
 * ----------------------------------------------
 *              Create Participant Form
 * ----------------------------------------------
 * ============================================ */

// Initial number of participants
let numberOfParticipants = 1;

const addParticipantButton = document.getElementById("add");
const submitButton = document.getElementById("submitButton");

/* ==============================================
 *
 * ============================================ */
addParticipantButton.addEventListener("click", function() {
    // Increase participant count
    numberOfParticipants++;

    // Create a new participant section from the template
    const newParticipantSection = document.createElement("section");
    newParticipantSection.innerHTML = participantTemplate(numberOfParticipants);

    // Insert the new participant section into the fieldset
    addParticipantButton.parentNode.insertBefore(newParticipantSection, addParticipantButton);
});


/* ==============================================
 * ----------------------------------------------
 *              Get / Display Form Data
 * ----------------------------------------------
 * ============================================ */

/* ==============================================
 *
 * ============================================ */
function totalFees() {
    // Get all elements with IDs starting with "fee"
    const feeElements = document.querySelectorAll("[id^=fee]");

    // Convert NodeList to Array using spread operator
    const feeValues = [...feeElements];

    // Reduce fees to a single total using reduce
    const totalFee = feeValues.reduce((accumulator, currentValue) => {
        // Parse the fee value from string to number using parseFloat
        const fee = parseFloat(currentValue.value);
        return accumulator + fee;
    }, 0);

    return totalFee;
}

/* ==============================================
 *
 * ============================================ */
function getData() {
    const adultName = document.getElementById("adult_name").value

    return {
        adult_name: adultName,
        participent_count: numberOfParticipants,
        total_fees: totalFees(),
    }
}

/* ==============================================
 *
 * ============================================ */
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    // hide the form
    const form = document.getElementById("formDiv");
    form.style.display = "none"

    const data = getData()

    // Create a new participant section from the template
    const successesView = document.createElement("div");
    successesView.innerHTML = successesTemplate(data)

    submitButton.parentNode.insertBefore(successesView, submitButton);
})




