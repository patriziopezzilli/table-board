import React from "react";
import Poll from 'react-polls';

const pollAnswers = [
  { option: '1-0', votes: 4 },
  { option: '2-0', votes: 2 },
  { option: '2-1', votes: 2 },
  { option: '2-2', votes: 2 }
]
const pollStyle = {
  questionSeparator: false,
  align: 'center',
  theme: 'white',
  questionBold: true,
  questionColor: 'white'
}


class BoardPoll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'Which will be the result?',
      pollAnswers: [...pollAnswers]
    }
  }

  handleVote = voteAnswer => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }

  render() {
    return(
      <div>
        <p>
          <Poll question={this.state.question} customStyles={pollStyle} answers={pollAnswers} onVote={this.handleVote} />
        </p>
      </div>
    );
  }
}

export default BoardPoll;