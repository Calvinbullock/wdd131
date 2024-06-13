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
function participantTemplate(count) {
    return `<section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity" />
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee" />
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date" />
        </div>
        <div class="item">
            <p>Grade</p>
            <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    </section>`
}

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
function successesTemplate(data) {
    return `
        <div id="successesDiv">
            <h1>Submisstion Details</h1>
            <p>Thank you ${data.adult_name} for registering.</p>
            <p>You have registered ${data.participent_count} participants and</p>
            <p>owe $ ${data.total_fees} in Fees.</p>
        </div>
        `
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




