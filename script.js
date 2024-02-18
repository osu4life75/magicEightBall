let userName = '';

function generateRandomQuestion() {
  const questions = [
    'Will I win a million dollars?',
    'Should I pursue my dreams?',
    'Am I going to have a good day?',
    'Will I meet someone special?',
    'Should I take a risk?',
    'Is it a good time to start a new project?'
  ];

  const responses = [
    'It is certain',
    'It is decidedly so',
    'Reply hazy, try again',
    'You will be promoted',
    'Ask again later',
    'Yes, winning looks good for you',
    'Outlook not so good',
    'Signs point to yes'
  ];

  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  const randomResponse = responses[randomIndex];
  
  document.getElementById('question').textContent = randomQuestion;
  document.getElementById('response').textContent = randomResponse;
}

generateRandomQuestion();
