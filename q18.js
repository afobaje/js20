function Filereader(reader) {
  let x = this.files[0];
  reader = new Filereader();
  reader.readAsText(x);
  let file=reader.result
  console.log(file);
  file.map(({id,score,averagescore,cgpa})=>{
      return (
          console.log(`student wit id no ${id}, your score is ${score} average score is ${averagescore} and cgpa is ${cgpa}`)
      )
   })
}
