function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  const storyText = "It was 94 [fahrenheit] outside, so [:insertx:] went for a walk. When they got to [:inserty:], they stared in horror for a few moments, then [:insertz:]. [Bob] saw the whole thing, but was not surprised — [:insertx:] weighs 300 [pounds], and it was a hot day.";
  const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const insertY = ["the soup kitchen", "Disneyland", "the White House"];
  const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


  const customName = "Bob the builder";
  const ukchecked = false;
  function result() {
    let newStory = storyText;

    console.log(
        `Placeholder story:
                 ${newStory}
         `
        );
         
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory
                .replaceAll(":insertx:", xItem)
                .replace(":inserty:", yItem)
                .replace(":insertz:,",zItem);

    if(customName !== '') {
      const name = customName;
      newStory = newStory.replace("Bob", name);

}

if(ukchecked ===true) {
    const weight = `${Math.round(300 / 14)}
    stone`;
    const temperature =  `${Math.round((94 - 32) * 
    (5/9))} centigrade`;
    newStory = newStory
                .replace("300 pounds", weight)
                .replace("94 fahrenheit", temperature);

    return `New story: 
                ${newStory}`; 
}
console.log(result());
  }
