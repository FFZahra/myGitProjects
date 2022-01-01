const team = {
    _players: [
      {
        firstName: 'Okocha',
        lastName: 'Kanu',
        age: 54
      }, 
      {
        firstName: 'Ronaldo',
        lastName: 'Dino',
        age: 48
      }, 
      {
        firstName: 'Peter',
        lastName: 'Drogba',
        age: 45
      }
      ],
    _games: [
      {
        opponent: 'Man U',
        teamPoints: 92,
        opponentPoints: 90
      },
      {
        opponent: 'Liverpool',
        teamPoints: 70,
        opponentPoints: 55
      },
      {
        opponent: 'Arsenal',
        teamPoints: 50,
        opponentPoints: 45
      }
    ],
  
    get players() {
      return this._players;
    },
  
    get playerNames() {
      let allNames = [];
      for (let itm of this._players) {
        allNames.push(`${itm.firstName} ${itm.lastName}`);
      }
      return allNames;    
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      let newPlayer = {
        firstName,
        lastName,
        age
      };
      this._players.push(newPlayer);
    },
  
    addGame(opponent, teamPoints, opponentPoints) {
      let newGame = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this._games.push(newGame);
    }
  };
  
  console.log('Previous list of players:');
  console.log(team.players);
  team.addPlayer('Stephen', 'Curry', 28);
  team.addPlayer('Pele', 'Liman', 76);
  team.addPlayer('Bugs', 'Bunny', 44);
  console.log(`    `);
  console.log('Updated list of players:');
  console.log(team.playerNames);
  
  console.log(`    `);
  console.log('Previous games list:');
  console.log(team.games);
  console.log(`    `);
  team.addGame('Man City', 65, 63);
  team.addGame('Aston Villa', 53, 60);
  team.addGame('West Ham U', 70, 45);
  console.log('Current games list:');
  console.log(team.games);
  