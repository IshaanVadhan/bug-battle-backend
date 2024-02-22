import React from 'react'
import './style/instructions.css';
import { useNavigate } from 'react-router-dom';
const BattleInstructions = () => {
    const navigate = useNavigate();
    const handleClick = (event) =>{
        event.preventDefault();
        navigate('/bugbattle');
    }
  return (
    <div className="container">
        <div className='main'>
            <h1>Welcome to Bug Battle!</h1>
            <h2>Instructions</h2>
            <p>Two teams will compete against each other in two rounds: Analysis and Debugging.</p>
            <p>In the Analysis round:</p>
            <ul>
                <li>Analyze the provided code thoroughly.</li>
                <li>Introduce intentional mistakes into the code within the designated timeframe.</li>
                <li>Code modifications will be automatically submitted after the time limit.</li>
            </ul>
            <p>In the Debugging round:</p>
            <ul>
                <li>Swap codes with the opposing team.</li>
                <li>Identify and fix the errors introduced by the opposing team.</li>
                <li>Teams must debug the code within a specified time frame.</li>
            </ul>
            <p>The team that successfully resolves the most errors or fixes the errors in the least amount of time wins the game.</p>
            <div className="button-container">
                <div className="button" onClick={handleClick}>Start Bug Battle</div>
            </div>
            </div>
        </div>
  )
}

export default BattleInstructions
