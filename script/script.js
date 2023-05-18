    const getData = async () => {
        const res = await fetch('https://api.adviceslip.com/advice', {
            cache: "no-store"
        });
        const data = await res.json();
        return data;
    }

    const displayData = async () => {

        const data = await getData();
        
        document.querySelector('p').innerHTML = `Advice #${data.slip.id}`
        document.querySelector('h2').innerHTML = `"${data.slip.advice}"`

    }

    displayData();
    
    const button = document.getElementsByClassName('button')[0]
     
    button.addEventListener("click", displayData)