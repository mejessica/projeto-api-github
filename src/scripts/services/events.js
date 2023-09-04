import {baseUrl, maxItems} from '../variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItems}`)
    const events = await response.json()
    return events.filter(event => event.type == 'CreateEvent'|| event.type=='PushEvent')
   
}

export{getEvents}