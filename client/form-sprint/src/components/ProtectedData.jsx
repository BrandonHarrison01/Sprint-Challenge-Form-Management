import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosWithAuth'

function ProtectedData() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/restricted/data')
            .then(res => {
                console.log(res)
                setMeals(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            {meals.map(meal => 
                <div key={meal.name}>
                    <h3>Meal: {meal.name}</h3>
                    <h4>Course: {meal.course}</h4>
                    <h4>Technique: {meal.technique}</h4>
                </div>    
            )}

        </div>
    )
}

export default ProtectedData