import React, { useState, useEffect } from 'react';
import './QuizFeed.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

function NewsFeed() {
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://hackyeah-2023-api-circle-edge.onrender.com/quiz', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setQuizData(data);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <section>
            <header class="section-header">
                <h1>Quizy</h1>
                <p className="coins">Twoje punkty: 125 <FontAwesomeIcon icon={faCoins} /></p>
                <p>Rozwiązuj quizy, aby zdobywać punkty. Punkty pozwalają na wyświetlanie użytkownikom atrakcyjniejszych ofert pracy!</p>
            </header>
            
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    {quizData.map((quiz, index) => (
                        <div className="quiz" key={index}>
                            <div className="quiz-header">
                                <div className="quiz-header-name">
                                    <h2>{quiz.title}</h2>
                                </div>
                                <div className="quiz-description">
                                    <p>{quiz.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default NewsFeed;
