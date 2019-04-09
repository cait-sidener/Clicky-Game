import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import friends from "./friends.json";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import "./App.css";

function shuffleFriends(array) {
    for(var i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

class App extends Component {
    state = {
        friends,
        currentScore: 0,
        topScore: 0,
        winLose: "",
        clicked:[]
    };

    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
    };

    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            winLose: ""
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        } else if (newScore === 12) {
            this.setState({ winLose: "You win the Game of Thrones!" });
        }
        this.handleShuffle();
    };

    handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            winLose: "You lose the Game of Thrones!",
            clicked: []
        });
        this.handleShuffle();
    }

    handleShuffle = () => {
        let shuffledFriends = shuffleFriends(friends);
        this.setState({ friends: shuffledFriends });
      };

    render() {
        return (
            <Wrapper>
                <Nav
                title="Game of Queens Clicky Game"
                score={this.state.currentScore}
                topScore={this.state.topScore}
                winLose={this.state.winLose}
                />

                <Title>
                    Try to click on each killer woman but do not hit a duplicate
                     or Cersei will murder your family.
                </Title>

                <Container>
                    <Row>
                        {this.state.friends.map(friend => (
                            <Col size="md-3 sm-6">
                                <FriendCard
                                    key={friend.id}
                                    handleClick={this.handleClick}
                                    handleIncrement={this.handleIncrement}
                                    handleReset={this.handleReset}
                                    handleShuffle={this.handleShuffle}
                                    id={friend.id}
                                    image={friend.image}
                                    />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}

export default App;