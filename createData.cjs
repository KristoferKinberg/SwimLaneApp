const fs = require('fs');
const {generateID} = require("./src/utils/utils");

const API_URL = "https://randomuser.me/api/"
const API_RESULTS = 10
const API_SEED = "3c3b1938e7a5f2f0"
const INCLUDED_FIELDS = [
  'name',
  'dob',
  'picture',
  'email',
  'location'
];

const dataAddition = {
  processStage: [
    "contact",
    "dialog",
    "interview",
    "offer",
    "finished"
  ]
};

const concatFields = () => INCLUDED_FIELDS.reduce((concatedFields, field, index) => {
  return `${concatedFields}${field}${INCLUDED_FIELDS.length !== (index + 1) ? ',' : ''}`;
}, '&inc=');

async function fetchAPIPersons() {
  return fetch(`${API_URL}?results=${API_RESULTS}&seed=${API_SEED}${concatFields()}`)
    .then(x => x.json())
    .then(x => x.results)
}

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const createData = async () => {
  const res = await fetchAPIPersons()
  const data = res.map((user, index) => {
    const randomNumber = getRandomNumber(dataAddition.processStage.length);
    const userRecruitmentStage = dataAddition.processStage[getRandomNumber(dataAddition.processStage.length-1)];

    return {
      ...user,
      id: generateID(),
      processStage: userRecruitmentStage
    }
  })

  const cleanedData = data.map(({ id, name, dob, picture, email, adress, processStage, location }) => ({
    id,
    title: name.title,
    firstname: name.first,
    lastname: name.last,
    picture: picture.thumbnail,
    email,
    processStage,
    dob: dob.date,
    address: `${location.street.name} ${location.street.number}`,
  }));

  fs.writeFile('./src/data.json', JSON.stringify(cleanedData), err => {
    if (err) {
      console.error(err);
    }
  });
};

createData();
