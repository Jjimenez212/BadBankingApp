document.body.style.backgroundImage = "url ('bank.jpg')";
function Home(){
  return (
    <Card
      txtcolor="Black"
      header="Bad Bank"
      title="Banking Application, Give me all your money"
      text="Welcome to Bad Bank "
      body={(<img src="cyberbank.jpg" className="img-fluid" alt="Responsive image" />)}
      
    />    
    
  ); 
}

