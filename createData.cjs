const fs = require('fs');

const API_URL = "https://randomuser.me/api/"
const API_RESULTS = 50
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

const generateID = () => Math.floor(Math.random() * Date.now());

const concatFields = () => INCLUDED_FIELDS.reduce((concatedFields, field, index) => {
  return `${concatedFields}${field}${INCLUDED_FIELDS.length !== (index + 1) ? ',' : ''}`;
}, '&inc=');

async function fetchAPIPersons() {
  return fetch(`${API_URL}?results=${API_RESULTS}&seed=${API_SEED}${concatFields()}`)
    .then(x => x.json())
    .then(x => x.results)
}

const getRandomNumber = ({ min = 0, max }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createData = async () => {
  const lastTwo = [
    "offer",
    "finished"
  ];
  const lastOne = ["finished"];

  const isInStages = (stage, stages) => stages.includes(stage);

  const res = await fetchAPIPersons()
  const data = res.map((user, index) => {
    const randomNumber = getRandomNumber({ max: dataAddition.processStage.length - 1});
    const userRecruitmentStage = dataAddition.processStage[randomNumber];

    return {
      ...user,
      id: generateID(),
      processStage: userRecruitmentStage
    }
  });

  const cleanedData = data.map(({ id, name, picture, email, adress, processStage, location }) => ({
    id,
    firstname: name.first,
    lastname: name.last,
    picture: picture.thumbnail,
    email,
    processStage,
    address: `${location.street.name} ${location.street.number}`,
    ...isInStages(processStage, lastTwo) && { offer: getRandomNumber({ min: 22000, max: 85000 })},
    ...isInStages(processStage, lastOne) && { hired: getRandomNumber({ min: 0, max: 1 })}
  }));

  fs.writeFile('./src/data.json', JSON.stringify(cleanedData), err => {
    if (err) {
      console.error(err);
    }
  });
};

createData();
