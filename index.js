function scuberGreetingForFeet(feet) {
  if (feet > 2500) {
  return 'No can do.'
  } else if (feet > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (feet <= 400) {
    return 'This one is on me!';
  }
}
 
  


function ternaryCheckCity(city) {
  // Write your code here!
  const goToCity = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return goToCity;

}

function switchOnCharmFromTip(tips){
  // Write your code here!
  switch (tips) {
    case 'generous':
      return "Thank you so much.";
    
    case 'not as generous':
      return "Thank you.";
    
    default :
      return "Bye.";
     
  }
  
    
      
  }
