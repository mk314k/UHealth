export function logFrame(log:string='LogIn'){
    return `
        <div>
            <form id="accForm" class="input-form" action="" method="POST">
                <h1>${log}</h1>      
                <input id="unField" class="un-field" name="uname" type="text" placeholder="Username"></input>
                <input id="passField" class="pw-field" name="password" type="password" placeholder="Password"></input>
                <button id="logButton" class="signup-submit-btn">${log}</button>
            </form>
        </div>
    `
} 
export function navBar(buttonStack:string=''){
    return `
        <nav>
            <div class="logo">
                <img src="./image/plus.png" alt="logo" class="logo_image">
            </div>
            <div class="app_name">
                <h1>UHealth</h1>
            </div>
            <div id="buttonStack" class="button_stack">
                ${buttonStack}
            </div>
        </nav>
    `
}

export function navLogButton(log:string='LogIn'){ return `<button id="navLogButton">${log}</button>`;}

export const patientFrame = `<div class="container">
<div class="left-side">
    <div class="profile">
        <img src="image/profile.jpeg" width="100px" height="100px" class="rounded-circle">
    </div>
    <div class="patient-info">
        <ul>
            <li><b>Patient Name:</b> Yogesh Koirala</li>
            <li><b>Date of Birth:</b> 01/01/2001</li>
            <li><b>Patient Weight:</b> 125 lbs</li>
            <li><b>Patient Height:</b> 5' 7"</li>
            <li><b>Patient Address:</b> Cambridge, MA</li>
        </ul>
    </div>
</div>    
<div class="right-side">
    <div class="appointments">
        <div class="appointments-title">
            Upcoming Appointments
        </div>
        <div class="appointments-body">
            <ul>
                <li> None </li>
            </ul>
        </div>
    </div>

    <div class="medications">
        <div class="medications-title">
            Prescribed Medications
        </div>
        <div class="medications-body">
            None
        </div>
    </div>
</div>
</div>`