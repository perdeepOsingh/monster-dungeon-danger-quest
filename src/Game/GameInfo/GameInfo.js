import React from 'react';

function GameInfo(props) {
    return (
        <>
            <div className="game-info">Monster Dungeon Danger Quest!</div>
            <div className="game-info">Score: {props.score}</div>
            <div className="game-info">Player Name: {props.player.name}</div>
        </>
    );
}

export default GameInfo;