import styles from '../../styles/meals.module.css';
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
//import mealData from './meal-data'
import {useState} from 'react'


export default function meals () {
    const [input, setInput] = useState('') //[input,setInput]:  is two situation //setInput change the value of input //useState is the null value so give it ('')
    const [mealData, setMealData] = useState([])

    const handleInput = (e) => {//e is to create an event
        setInput(e.target.value)

    }

    console.log(input)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .catch(error => console.error('Error', error))
        .then(res => {
            console.log(res)
            setMealData(res.meals)
        })
    }
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" /> 

            </Head>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title__main}>Meal Finder</h1>
                <div className={styles["flex-box"]}>
                    <form id="submit" className={styles["flex-box"]}>
                        <input type="text"
                        className={styles.input}
                        value={input}//According to line 8
                        placeholder="Search for meals or keywords"
                        className={styles.input}
                        onChange={handleInput}
                        //onChange is an event
                        //when the value of search space changing in website it will run handleInput and it will changing the value of input 
                        //(line 11) (that is the value of input(line 40) change )
                        />
                        <button className={styles.btn__search} type="submit" onClick={handleSubmit}>
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <button className={styles.btn__random} id="random">
                        <i className="fas fa-random"></i>
                    </button>
                </div>
                <div id="result-heading" className={styles.title__search}><h1>Search Results for ' {input} ' :</h1></div>
                <div id="meals" className={styles.gallery}>
                    {mealData.map((meal) => (
                        <Meal key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} />
                        
                    ))}
                </div>
            </div>  
            <Footer />
        </div>
    )
}

function Meal({id, name, image}){
    return(
        <div className={styles["gallery-card"]}>
            <img className={styles["gallery-card__img"]} src={image} alt={name} />
                 <div className={styles["gallery-card__details"]} data-mealid={id}> 
                        <h2>{name}</h2>
                 </div>
        </div>
    )
}