import React from "react";
import { FaCloudSun, FaCloud, FaSun } from "react-icons/fa";

export default function Quotes({icon}) {


 function selectQuote(icon){

    switch (icon){

            case "01d":
              return (
                <>
                  <span> 
         "The sun just touched the morning; The morning, happy thing,
        Supposed that he had come to dwell, And life would be all spring."
        - Emily Dickinson
                    </span>
                </>
              );
            case "01n":
              return (
                <>
                  <span> "I often think that the night is more alive and 
                    more richly colored than the day." - Vincent van Gogh</span>
                </>
              );
            case "02d":
              return (
                <>
                  <FaCloudSun />
                  <span> "I cannot pretend to feel impartial about colors. 
                    I rejoice with the brilliant ones and am genuinely 
                     for the poor browns." - Winston Churchill</span>
                </>
              );
            case "02n":
              return (
                <>
            
                  <span> "Clouds come floating into my life, 
                        no longer to carry rain or usher storm,
                     but to add color to my sunset sky." - Rabindranath Tagore</span>
                </>
              );
            case "03d":
            case "03n":
              return (
                <>
                  <span> "Clouds come floating into my life, 
                        no longer to carry rain or usher storm,
                     but to add color to my sunset sky." - Rabindranath Tagore</span>
                </>
              );
            case "04d":
            case "04n":
              return (
                <>
                  <span>
                  "Clouds come floating into my life, 
                  no longer to carry rain or usher storm, but to add color to my sunset sky."
                   - Rabindranath Tagore

                  </span>
                </>
              );
            case "09d":
            case "09n":
              return (
                <>
                  <span> "Let the rain kiss you. Let the rain beat upon your head with silver liquid drops.
                     Let the rain sing you a lullaby." - Langston Hughes</span>
                </> 
              );
            case "10d":
            case "10n":
              return (
                <>
    
                  <span>"The best thing one can do when it's raining is to let it rain." -
                     Henry Wadsworth Longfellows</span>
                </>
              );
            case "11d":
            case "11n":
              return (
                <>
    
                  <span> "The sky is low, the clouds are mean, 
                    a travelling flake of snow across a barn or through a 
                    rut debates if it will go." - Emily Dickinson</span>
                </>
              );
            case "13d":
            case "13n":
              return (
                <>
                  <FaCloud />
                  <span> "Snowflakes falling on your nose
                        A chill wind nipping at your toes
                        Winter’s here, the snow is near
                        A time for peace, a time to cheer." - Frost</span>
                </>
              );
            case "50d":
            case "50n":
              return (
                <>
                  <span>"The mist was all around us, 
                     As we walked that path alone" - Emily Bronte</span>
                </>
              );
            default:
              return (
                <>
                  
                  <span> </span>
                </>
              );
        
              }}

             
              


              return (<>
              <div className="quote">

             { selectQuote(icon) }
             </div>

  </>)
}
