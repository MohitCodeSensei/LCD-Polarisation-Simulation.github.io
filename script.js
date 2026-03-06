let isVoltageOn = false;

function toggleVoltage() {
    isVoltageOn = !isVoltageOn;
    const simBox = document.getElementById('simBox');
    const btn = document.getElementById('toggleBtn');
    const vStatus = document.getElementById('voltageStatus');
    const screenOutput = document.getElementById('screenOutput');
    const pixelState = screenOutput.querySelector('.pixel-state');
    const explanationText = document.getElementById('explanationText');

    if (isVoltageOn) {
        // TURN PIXEL OFF (Voltage ON)
        simBox.classList.add('voltage-on');

        btn.classList.remove('off-state');
        btn.classList.add('on-state');
        btn.querySelector('.btn-text').innerText = "REMOVE VOLTAGE";
        btn.querySelector('.btn-subtext').innerText = "Click to relax crystals & turn Pixel ON";

        vStatus.innerText = "Voltage: ON";
        vStatus.className = "status-on";

        pixelState.innerText = "OFF";

        explanationText.innerHTML = `
            <div class="state-badge on">Current State: Voltage ON</div>
            <p>The applied electric field suddenly forces all the liquid crystals to <strong>align straight</strong>, destroying their helix shape. The light passing through is NO LONGER twisted; it remains vertically polarized and crashes into the horizontal front polarizer, thoroughly <strong>blocked</strong>. The pixel goes dark!</p>
        `;
    } else {
        // TURN PIXEL ON (Voltage OFF)
        simBox.classList.remove('voltage-on');

        btn.classList.remove('on-state');
        btn.classList.add('off-state');
        btn.querySelector('.btn-text').innerText = "APPLY VOLTAGE";
        btn.querySelector('.btn-subtext').innerText = "Click to force crystals straight & turn Pixel OFF";

        vStatus.innerText = "Voltage: OFF";
        vStatus.className = "status-off";

        pixelState.innerText = "ON";

        explanationText.innerHTML = `
            <div class="state-badge off">Current State: Voltage OFF</div>
            <p>The liquid crystals are <strong>relaxed</strong> in their natural twisted helix structure. They guide and twist the vertically polarized light by exactly 90 degrees as it passes through. Because the light becomes horizontally polarized, it perfectly slips through the front horizontal polarizer and illuminates the pixel!</p>
        `;
    }
}
