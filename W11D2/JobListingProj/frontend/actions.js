export function selectLocation(city, jobs) {
    return {
        type: "SWITCH_LOCATION", 
        city,
        jobs
    }
}


 