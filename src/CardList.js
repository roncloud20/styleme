import React from "react";
import Card from "./Card";
// import Images from "src/images ";

const CardList = ({ styles }) => {
    return (
      <div className="Main">
        {
            styles.map((style, i) =>{
                return (
                    <Card 
                        key={i} 
                        id={styles[i].id} 
                        stylename={styles[i].stylename} 
                        category={styles[i].category} 
                        likes={styles[i].likes} 
                        shares={styles[i].shares} 
                        imageUrl={styles[i].imageUrl} 
                    />
                );
            })
        }
      </div>  
    );
}

export default CardList;