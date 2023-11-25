const number = prompt('How many participants?');
    let participants = [];
    for (let i = 0; i < number; i++) {
      participants.push(prompt('Enter name'));
    }
    participants.sort();
    for (let name of participants) {
      document.querySelector('#list').appendChild(document.createElement('li')).textContent = name;
    }