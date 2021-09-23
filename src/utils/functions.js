export const fetchLocations = () => {
    return fetch('http://localhost:8000/kasaData')
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
}

export const fetchDetails = (idQuery) => {
    return fetch(`http://localhost:8000/kasaData/${idQuery}`)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
}