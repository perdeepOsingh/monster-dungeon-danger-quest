import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import GameInfo from './GameInfo/GameInfo';
import createMonster from './Monsters/MonsterCreate';
import PlayerInfo from './Player/PlayerInfo';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            player: new PlayerInfo(),
            isPlayerAlive: true,
            currentMonster: undefined,
            currentlyFighting: false
        }
    }

    render() {
        return (
            <>
                <GameInfo score={this.state.score} player={this.state.player} />
                <ChatBot
                    width={`600px`}
                    // speechSynthesis={{ enable: true, lang: 'en' }}
                    steps={
                        [
                            {
                              id: `game-start`,
                              message: `Welcome adventurer! Thank you for coming to save us from these terrible monsters. What is your name?`,
                              trigger: `player-create`
                            },
                            {
                              id: `player-create`,
                              user: true,
                              validator: (value) => {
                                if (value.length > 20) {
                                    return 'Name too long. Keep it to 20 characters or less.';
                                } else {
                                    return true;
                                }
                            },
                              trigger: `hello-hero`
                            },
                            {
                              id: `hello-hero`,
                              message: ({ previousValue }) => {
                                this.setState({ player: { name: previousValue }});
                                return `Greetings ${previousValue}. We are so happy you have come to help us. The dungeon awaits you, who knows what lurks in the darkness...`
                              },
                              trigger: `enter-dungeon`
                            },
                            {
                                id: `enter-dungeon`,
                                component: (
                                    <div> The Dungeon of Horrors </div>
                                ),
                                end: true
                            }
                          ]
                    }
                />
            </>
        )
    }

}

export default Game;
