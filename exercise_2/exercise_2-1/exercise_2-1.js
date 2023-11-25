let number_array = [];
    for (let i = 0; i < 5; i++) {
      let number = Number(prompt(`Enter number ${i + 1}`));
      number_array.push(number);
    }
    for (let i = number_array.length - 1; i >= 0; i--) {
      console.log(number_array[i]);
    }