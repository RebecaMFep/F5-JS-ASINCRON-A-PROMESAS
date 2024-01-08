const printTitles = async () => {
  const response = await fetch('./archive.json');
  const data = await response.json();

  
  const titles = data.results.map(result => result.title);
  console.log(titles);
}
printTitles();



