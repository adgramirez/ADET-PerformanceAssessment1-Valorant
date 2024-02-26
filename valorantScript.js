function redirectToAgentPage(agentName) {
    window.location.href = agentName + ".html";
}

function toggleDropdown() {
    var dropdown = document.querySelector('.role-dropdown');
    dropdown.classList.toggle('active');
}

function selectRole(role) {
    var dropdown = document.querySelector('.role-dropdown');
    dropdown.querySelector('.role-dropdown-select').textContent = 'Filter by Role: ' + role.charAt(0).toUpperCase() + role.slice(1);
    toggleDropdown();
    filterAgentsByRole();
}

function filterAgentsByRole() {
    var selectedRole = document.querySelector('.role-dropdown-select').textContent.toLowerCase().replace('filter by role: ', '');

    document.querySelectorAll('.agent-card').forEach(function (card) {
        var agentRole = card.querySelector('.agent-role').textContent.toLowerCase();

        console.log("Agent Role:", agentRole);

        if (selectedRole === 'all' || agentRole.includes(selectedRole)) {
            card.style.display = 'flex';
            console.log("Display:", 'flex');
        } else {
            card.style.display = 'none';
            console.log("Display:", 'none');
        }
    });
}

var brimstoneAbilityNames = ["STIM BEACON", "INCENDIARY","SKY SMOKE", "ORBITAL STRIKE"];
var brimstoneAbilityDescriptions = [
    "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.",
    "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
    "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
    "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area."
];

var phoenixAbilityNames = ["BLAZE", "CURvEBALL", "HOT HANDS", "RUN IT BACK"];
var phoenixAbilityDescriptions = [
    "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
    "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
    "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
    "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health."
];

var sageAbilityNames = ["BARRIER ORB", "SLOW ORB", "HEALING ORB", "RESURRECTION"];
var sageAbilityDescriptions = [
    "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.",
    "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
    "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
    "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health."
];

var sovaAbilityNames = ["OwL DRONE", "SHOCK BOLT", "RECON BOLT", "HUNTER'S FURY"];
var sovaAbilityDescriptions = [
    "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.",
    "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
    "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
    "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active."
];

var viperAbilityNames = ["SNAKE BITE", "POISON CLOUD", "TOXIC SCREEN", "VIPER’S PIT"];
var viperAbilityDescriptions = [
    "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.",
    "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
    "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
    "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it."
];

var cypherAbilityNames = ["TRAPwIRE", "CYBER CAGE", "SPYCAm", "NEURAL THEFT"];
var cypherAbilityDescriptions = [
    "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
    "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.",
    "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.",
    "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players."
];

var reynaAbilityNames = ["LEER", "DEvOUR", "DISMISS", "EMPRESS"];
var reynaAbilityDescriptions = [
    "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
    "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.",
    "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.",
    "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration."
];

var killjoyAbilityNames = ["NANOSwARm", "ALARMBOT", "TURRET", "LOCKDOwN"];
var killjoyAbilityDescriptions = [
    "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.",
    "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.",
    "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.",
    "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies."
];

var breachAbilityNames = ["AFTERSHOCK", "FLASHPOINT", "FAULT LINE", "ROLLING THUNDER"];
var breachAbilityDescriptions = [
    "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
    "EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to Blind all players looking at it.",
    "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, Concussing all players in its zone and in a line up to the zone.",
    "EQUIP a Seismic Charge. FIRE to send a cascading quake through all terrain in a large cone. The quake Concusses and knocks up anyone caught in it."
];

var omenAbilityNames = ["SHROUDED STEP", "PARANOIA", "DARK COvER", "FROM THE SHADOwS"];
var omenAbilityDescriptions = [
    "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
    "EQUIP a blinding orb. FIRE to throw it forward, briefly Nearsighting and Deafening all players it touches. This projectile can pass straight through walls.",
    "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.",
    "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport, or PRESS EQUIP for Omen to cancel his teleport."
];

var jettAbilityNames = ["CLOUDBURST", "UPDRAFT", "TAILwIND", "BLADE STORm"];
var jettAbilityDescriptions = [
    "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
    "INSTANTLY propel Jett high into the air.",
    "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
    "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill."
];

var razeAbilityNames = ["BOOm BOT", "BLAST PACK", "PAINT SHELLS", "SHOwSTOPPER"];
var razeAbilityDescriptions = [
    "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
    "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.",
    "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills.",
    "EQUIP a rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything."
];

var skyeAbilityNames = ["REGROwTH", "TRAILBLAZER", "GUIDING LIGHT", "SEEKERS"];
var skyeAbilityDescriptions = [
    "EQUIP a healing trinket. HOLD FIRE to channel, Healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
    "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a Concussive blast on impact and damaging directly hit enemies.",
    "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash. The flash reaches max potency after a short duration during the hawk's flight.",
    "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers."
];

var yoruAbilityNames = ["FAKEOUT", "BLINDSIDE", "GATECRASH", "DIMENSIONAL DRIFT"];
var yoruAbilityDescriptions = [
    "EQUIP an echo that transforms into a mirror image of Yoru when activated. FIRE to instantly activate the mirror image and send it forward. ALT FIRE to place an inactive echo. USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a Blinding Flash when destroyed by enemies.",
    "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface.",
    "EQUIP a rift tether. FIRE to send the tether forward. ALT FIRE to place a stationary tether. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport.",
    "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru's dimension early."
];

var astraAbilityNames = ["GRAvITY wELL", "NOvA PULSE", "NEBULa | DISSIPATE", "COSMIC DIvIDE"];
var astraAbilityDescriptions = [
    "ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside Vulnerable.",
    "ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, Concussing all players in its area.",
    "ACTIVATE a Stars Star to transform it into a Nebula (smoke). USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star's location before returning.",
    "When Cosmic Divide is charged, use ALT FIRE in Astral Form to begin aiming it, then FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and sound."
];

var kayoAbilityNames = ["FRAG | MENT", "FLASH | DRIvE", "ZERO | POINT", "NULL | CMD"];
var kayoAbilityDescriptions = [
    "EQUIP an explosive fragment. FIRE to throw. ALT FIRE to lob. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
    "EQUIP a flash grenade. FIRE to overhand throw. ALT FIRE to lob a weaker version that explodes quickly. The flash grenade explodes after a short fuse, Blinding anyone in line of sight.",
    "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and Suppresses anyone in the radius of the explosion. Enemies can destroy this blade.",
    "INSTANTLY Overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are Suppressed for a short duration. While overloaded, KAY/O gains Combat Stim and can be re-stabilized if downed."
];

var chamberAbilityNames = ["TRADEMARK", "HEADHUNTER", "RENDEZvOUS", "TOUR DE FORCE"];
var chamberAbilityDescriptions = [
    "EQUIP a trap that scans for enemies. FIRE to place it on the ground. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that Slows players caught inside of it. The trap can be picked up to be REDEPLOYED.",
    "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights",
    "EQUIP a teleport anchor. FIRE to place it on the ground. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED.",
    "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit to the upper body. ALT FIRE to aim down sights. Killing an enemy creates a lingering field that Slows players caught inside of it."
];

var neonAbilityNames = ["FAST LANE", "RELAY BOLT", "HIGH GEAR", "OvERDRIvE"];
var neonAbilityDescriptions = [
    "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.",
    "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.",
    "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.",
    "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill."
];

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('abilityVideo');
    var abilityName = document.getElementById('abilityName');
    var abilityDescription = document.getElementById('abilityDescription');
    var agentName = window.location.pathname.split('/').pop().replace('.html', '');
    var role = getAgentRole(agentName);

    switch (agentName) {
        case 'brimstone':
            loadAbilityData(brimstoneAbilityNames, brimstoneAbilityDescriptions);
            break;
        case 'phoenix':
            loadAbilityData(phoenixAbilityNames, phoenixAbilityDescriptions);
            break;
        case 'sage':
            loadAbilityData(sageAbilityNames, sageAbilityDescriptions);
            break;
        case 'sova':
            loadAbilityData(sovaAbilityNames, sovaAbilityDescriptions);
            break;
        case 'viper':
            loadAbilityData(viperAbilityNames, viperAbilityDescriptions);
            break;
        case 'cypher':
            loadAbilityData(cypherAbilityNames, cypherAbilityDescriptions);
            break;
        case 'reyna':
            loadAbilityData(reynaAbilityNames, reynaAbilityDescriptions);
            break;
        case 'killjoy':
            loadAbilityData(killjoyAbilityNames, killjoyAbilityDescriptions);
            break;
        case 'breach':
            loadAbilityData(breachAbilityNames, breachAbilityDescriptions);
            break;
        case 'omen':
            loadAbilityData(omenAbilityNames, omenAbilityDescriptions);
            break;
        case 'jett':
            loadAbilityData(jettAbilityNames, jettAbilityDescriptions);
            break;
        case 'raze':
            loadAbilityData(razeAbilityNames, razeAbilityDescriptions);
            break;
        case 'skye':
            loadAbilityData(skyeAbilityNames, skyeAbilityDescriptions);
            break;
        case 'yoru':
            loadAbilityData(yoruAbilityNames, yoruAbilityDescriptions);
            break;
        case 'astra':
            loadAbilityData(astraAbilityNames, astraAbilityDescriptions);
            break;
        case 'kayo':
            loadAbilityData(kayoAbilityNames, kayoAbilityDescriptions);
            break;
        case 'chamber':
            loadAbilityData(chamberAbilityNames, chamberAbilityDescriptions);
            break;
        case 'neon':
            loadAbilityData(neonAbilityNames, neonAbilityDescriptions);
            break;
        default:
            console.error('Unknown agent: ' + agentName);
    }

    function loadAbilityData(names, descriptions) {
        document.querySelectorAll('.ability-button').forEach(function (button, index) {
            button.addEventListener('click', function () {
                var videoSource = role + '/' + agentName + '/' + agentName + '-ability' + (index + 1) + '.mp4';

                fetch(videoSource)
                    .then(response => {
                        if (response.ok) {
                            video.src = videoSource;
                            video.load();
                            video.play();
                            document.querySelectorAll('.ability-button').forEach(function (btn) {
                                btn.classList.remove('chosen');
                            });
                            button.classList.add('chosen');
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

    function getAgentRole(agentName) {
        if (agentName === 'brimstone' || agentName === 'viper' || agentName === 'omen' || agentName === 'astra') {
            return 'controller';
        } else if (agentName === 'jett' || agentName === 'neon' || agentName === 'phoenix' || agentName === 'raze' || agentName === 'reyna' || agentName === 'yoru') {
            return 'duelist';
        } else if (agentName === 'breach' || agentName === 'kayo' || agentName === 'skye' || agentName === 'sova') {
            return 'initiator';
        } else if (agentName === 'chamber' || agentName === 'cypher' || agentName === 'killjoy' || agentName === 'sage') {
            return 'sentinel';
        }
    }
});



