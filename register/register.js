
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

// Initial number of participants
let numberOfParticipants = 1;

const addParticipantButton = document.getElementById("add");

addParticipantButton.addEventListener("click", function() {
    // Increase participant count
    numberOfParticipants++;

    // Create a new participant section from the template
    const newParticipantSection = document.createElement("section");
    newParticipantSection.innerHTML = participantTemplate(numberOfParticipants);

    // Insert the new participant section into the fieldset
    addParticipantButton.parentNode.insertBefore(newParticipantSection, addParticipantButton);
});
