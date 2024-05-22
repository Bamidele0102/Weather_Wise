const weatherdata = async (req, res) => {
    const { state, country } = req.body
    console.log(state, country);

    if (!state || !country) {
        return res.status(400).json({ message: "Please provide location" });
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state},${country}&APPID=b69b5316dba2b3b6424b8616e42bb148`);

    const data = await response.json();
    console.log(data);
    return res.status(200).json(data);


}

export { weatherdata }