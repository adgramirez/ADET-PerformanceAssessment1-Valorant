function redirectToAgentPage(agentName) {
    window.location.href = agentName + ".html";
}

var brimstoneAbilityNames = ["INCENDIARY", "SKY SMOKE", "STIM BEACON", "ORBITAL STRIKE"];
var brimstoneAbilityDescriptions = [
    "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
    "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
    "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.",
    "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area."
];

var phoenixAbilityNames = [
    "CURVEBALL",
    "HOT HANDS",
    "BLAZE",
    "RUN IT BACK"
];

var phoenixAbilityDescriptions = [
    "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
    "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
    "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
    "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health."
];

var sageAbilityNames = [
    "SLOW ORB",
    "HEALING ORB",
    "BARRIER ORB",
    "RESURRECTION"
];

var sageAbilityDescriptions = [
    "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
    "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
    "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.",
    "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health."
];

var sovaAbilityNames = [
    "SHOCK BOLT",
    "RECON BOLT",
    "OWL DRONE",
    "HUNTER'S FURY"
];

var sovaAbilityDescriptions = [
    "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
    "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
    "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.",
    "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active."
];


document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('abilityVideo');
    var abilityName = document.getElementById('abilityName');
    var abilityDescription = document.getElementById('abilityDescription');

    var agentName = window.location.pathname.split('/').pop().replace('.html', '');

    if (agentName === 'brimstone') {
        loadAbilityData(brimstoneAbilityNames, brimstoneAbilityDescriptions);
    }
    if (agentName === 'phoenix') {
        loadAbilityData(phoenixAbilityNames, phoenixAbilityDescriptions);
    }
    if (agentName === 'sage') {
        loadAbilityData(sageAbilityNames, sageAbilityDescriptions);
    }
    if (agentName === 'sova') {
        loadAbilityData(sovaAbilityNames, sageAbilityDescriptions);
    }

    function loadAbilityData(names, descriptions) {
        document.querySelectorAll('.ability-button').forEach(function (button, index) {
            button.addEventListener('click', function () {
                var videoSource = 'resources/' + agentName + '/' + agentName + '-ability' + (index + 1) + '.mp4';

                fetch(videoSource)
                    .then(response => {
                        if (response.ok) {
                            video.src = videoSource;
                            video.load();
                            video.play();
                        } else {
                            console.error('Video file not found:', videoSource);
                        }
                    })
                    .catch(error => console.error('Error fetching video:', error));

                abilityName.textContent = names[index];
                abilityDescription.textContent = descriptions[index];
            });
        });
    }
});