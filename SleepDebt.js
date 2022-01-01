function getSleepHours(day){
    let hrSlept = 0;
  
    switch (day){
      case 'monday':
        hrSlept = 2;
        break;
      case 'tuesday':
        hrSlept = 4;
        break;
      case 'wednesday':
        hrSlept = 5;
        break;
      case 'thursday':
        hrSlept = 4;
        break;
      case 'friday':
        hrSlept = 4;
        break;
      case 'saturday':
        hrSlept = 3.5;
        break;
      case 'sunday':
        hrSlept = 3;
        break;
      default:
        return "Wrong day entry - try again."
    }
  
    return hrSlept;
  }
  
  function getActualSleepHours(){
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let sumHrs = 0; 
    for (let i = 0; i < 7; i++){    
      sumHrs = sumHrs + getSleepHours(days[i]);    
    }
    return sumHrs;
  }
  
  const getIdealSleepHours = (idealHours) => idealHours * 7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(4);
    if (actualSleepHours === idealSleepHours) {
      return "You got the perfect amount of sleep last week."
    }
    if (actualSleepHours > idealSleepHours) {
      let diff = actualSleepHours - idealSleepHours;
      return `You got ${diff} more hours of sleep than needed last week.`
    }
    if (actualSleepHours < idealSleepHours) {
      let diff = idealSleepHours - actualSleepHours;
      return `You need ${diff} extra hours of sleep this week. Get some rest.`
    }
  }
  
  console.log(calculateSleepDebt());
  