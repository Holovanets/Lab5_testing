import axios from 'axios';
export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const maskSensitiveInfo = (cardNumber: string) => {
    return cardNumber.replace(/\d{12}(\d{4})$/, '************$1');
};


export const fetchWeather = async (city: string) => {
    const apiKey = 'f29e221e729cfb24373c3249e08b4c56'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(url);
    return response.data.weather[0].description;
};

