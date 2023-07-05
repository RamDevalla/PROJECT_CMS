import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../Item/Item";

const Main = ()=>{
    const [videogame, setVideogame] = useState([]);
    const [gear, setgear] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1337/api/video-games").then((gamedata)=>{
            
                setVideogame(gamedata.data.data)

            }).catch(()=>{

            }).finally(()=>{

            });

            axios.get("http://localhost:1337/api/fan-gear-accessories").then((geardata)=>{

                setgear(geardata.data.data)

            }).catch(()=>{

            }).finally(()=>{

            });

    },[]);
 

    
    return(
        <>
        <Header/>

        <section>
           
           <dt> <b> Video-Game </b> </dt>
           {videogame.map((item, key) => {
               return <Item item = {item.attributes} key={key} />
           })}
           

           <dt> <b> Gears and Accessories </b> </dt>
            {gear.map((item, key) => {
               return <Item item = {item.attributes} key={key} />
            })}

        </section>
        </>
    )
}

export default Main;