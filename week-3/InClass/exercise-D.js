function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }

  function uppercaseAndSortEverything(array) {
      return array
      .map(word => word.toUpperCase())
      .sort()
  }
  console.log(magician(uppercaseAndSortEverything))