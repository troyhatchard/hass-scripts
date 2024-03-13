// my-script.js

const trigger = {
  device_id: '1000',
  subtype: 'turn_on"'
}

const action  = (entity, action) => {
  // do an action
}

// trigger.device_id to entity_id map
const entityIds = {
  1000: 'light.office_lamp',
  2000: 'light.living_room_2'
}

// the trigger device id determines the entity to be controlled
const entity = entityIds[trigger.device_id]

// the trigger subtype determines the set of actions to perform

if (trigger.subtype === 'turn_on') {
  if (entity.state === 'on')
    action(entity, 'turn on 100%') // turn entity on with brightness 100%
  else action(entity, 'turn on')
}

if (trigger.subtype === 'turn_off') {
  if (entity.state === 'off')
    action(entity, 'turn on 1%')
  else action(entity, 'turn off')

}
