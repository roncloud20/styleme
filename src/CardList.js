import React from "react";
import Card from "./Card";
const CardList = ({ styles }) => {
    return (
      <div>
        {
            styles.map((style, i) =>{
                return (
                    <Card 
                        key={i} 
                        id={styles[i].id} 
                        styleName={styles[i].styleName} 
                        category={styles[i].category} 
                        likes={styles[i].likes} 
                        imageUrl={styles[i].imageUrl} 
                    />
                );
            })
        }
      </div>  
    );
}

export default CardList;