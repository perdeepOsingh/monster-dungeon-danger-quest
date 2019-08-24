import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import GameInfo from './GameInfo/GameInfo';
import PlayerInfo from './Player/PlayerInfo';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            player: new PlayerInfo(),
            enterInDungeon: null,
            isPlayerAlive: true,
            currentMonster: undefined,
            currentlyFighting: false,
            steps: [
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
                    message: ({previousValue}) => {
                        this.setState({ player: { name: previousValue }});
                        return `Greetings ${previousValue}. We are so happy you have come to help us. The dungeon awaits you, who knows what lurks in the darkness...`
                    },
                    trigger: `enter-dungeon`
                },
                {
                    id: `enter-dungeon`,
                    message: `Ready to enter in dungeon?`,
                    trigger: `hero-courage-test`
                },
                {
                    id: `hero-courage-test`,
                    options: [
                        { value: true, label: 'Yes', trigger: 'enter-quest-decision' },
                        { value: false, label: 'No', trigger: 'enter-quest-decision' }
                    ]
                },
                {
                    id: `enter-quest-decision`,
                    message: ({previousValue}) => {
                        if (previousValue) {
                            this.setState({player: {name: `${this.state.player.name} the brave`}, enterInDungeon: true});
                            return `Good Luck`
                        }

                        this.setState({player: {name: `${this.state.player.name} Chicken`}, enterInDungeon: false});
                        return `Disappointing...`
                    },
                    trigger: () => {
                        if (this.state.enterInDungeon) {
                            return `welcome-to-dungeon`
                        }
                        return `end-quest`
                    }
                },
                {
                    id: `welcome-to-dungeon`,
                    component: (
                        <div>coming soon....</div>
                    ),
                    end: true,
                },
                {
                    id: `end-quest`,
                    component: (
                        <div>Monster won</div>
                    ),
                    end: true,
                }
            ]
        }
    }

    render() {
        const {score, player} = this.state
        return (
            <React.Fragment>
            <GameInfo score={score} player={player} />
            <ChatBot
                width={`600px`}
                steps={this.state.steps}
                />
            </React.Fragment>
        )
    }

}

export default Game;
