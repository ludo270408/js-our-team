//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite
 const team_members = [
    {
        name: 'Wayne Barnett';
        role: 'Founder & CEO';
        image: 'wayne-barnett-founder-ceo.jpg';
    }
    {
        name: 'Angela Caroll';
        role: 'Chief Editor';
        image: 'angela-caroll-chief-editor.jpg';
    }
    {
        name: 'Walter Gordon';
        role: 'Office Manager';
        image: 'walter-gordon-office-manager.jpg';
    }
    {
        name: 'Angela Lopez';
        role: 'Social Media Manager';
        image: 'angela-lopez-social-media-manager.jpg';
    }
    {
        name: 'Scott Estrada';
        role: 'Developer';
        image: 'scott-estrada-developer.jpg';
    }
    {
        name: 'Barbara Ramos';
        role: 'Graphic Designer';
        image: 'barbara-ramos-graphic-designer.jpg';
    }
 ];

 //MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
  for(let i=0; i<team_members.length; i++){
    console.log(team_members[i]);
  }

  //MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
  const cards = document.getElementById('cards');
  for(let i=0; i<team_members.length; i++){
    let member = team_members[i];
    const colonna = document.createElement('div');
    colonna.classList.add('col-4');
    const card = document.createElement('div');
    card.classList('card', 'bg-light', 'border', 'rounded-1', 'm-3');
    colonna.appendChild(card);
    let image = '<img class= "img-fluid" src="img/${team_members.image}"';
    let text = '<div class="p-3">${img}<h2>${team_members.name}</h2><p>${team_members.role}</p></div>';
    card.innerHTML = text;
    cards.appendChild(colonna);
  }