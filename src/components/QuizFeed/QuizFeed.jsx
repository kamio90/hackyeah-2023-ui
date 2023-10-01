import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './QuizFeed.scss';

function NewsFeed() {
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/quiz', { method: 'GET' });
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
        <div>
            <h1>Quizy</h1>
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
        </div>
    );
}

export default NewsFeed;
