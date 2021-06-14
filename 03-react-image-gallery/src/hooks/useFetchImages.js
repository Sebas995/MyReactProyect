import { useState, useEffect, useCallback } from 'react';

export const useFetchImages = () => {

    const [images, setImages] = useState([{
        id: 2133,
        urls: {
            regular: "ahre"
        }
    }]);
    const [input, setInput] = useState("");    
    const [loading, setLoading] = useState(true); 
    
    const peticion = useCallback(
        async () => {
            const key = "client_id=cIWV9te0YZ-OqbSid4yLnmP9gkNL78ttu7CDXwiM39I";
            let route = `https://api.unsplash.com/photos?${key}`; //Estos cositos se llaman backtics 
    
            if (input !== "") 
                route = `https://api.unsplash.com/search/photos?query=${encodeURI(input)}&${key}`;

            setLoading(true);
    
            const res = await fetch(route);
            const data = await res.json();
            
            //Los sets son asyncronos
            if (data.results)  setImages(data.results); else setImages(data);
            setLoading(false);
        },
        [input],
    );

    useEffect(() => {
        peticion(); 
    }, [peticion]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        let text = e.target[0].value;
        setInput(text);
        e.target[0].value = "";
    };

    return [images, loading, handleSubmit];
}
