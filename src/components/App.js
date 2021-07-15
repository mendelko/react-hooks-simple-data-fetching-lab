import React, {useEffect, useState} from "react";

function App(){


    let [dog, setDog] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then((data) => {
            setDog(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        <div className="App">
            <img src={dog} alt="A Random Dog" />
        </div>
    )


}

export default App;