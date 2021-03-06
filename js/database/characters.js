const CHARACTERS = [
  { key: 0, isKiller: false, legacy: true, release: "2016-06-14", name: "Dwight Fairfield" },
  { key: 1, isKiller: false, legacy: true, release: "2016-06-14", name: "Meg Thomas" },
  { key: 2, isKiller: false, legacy: true, release: "2016-06-14", name: "Claudette Morel" },
  { key: 3, isKiller: false, legacy: true, release: "2016-06-14", name: "Jake Park" },
  { key: 4, isKiller: false, legacy: true, release: "2016-06-14", name: "Nea Karlsson" },
  { key: 5, isKiller: false, legacy: false, release: "2016-10-25", name: "Laurie Strode" },
  { key: 6, isKiller: false, legacy: false, release: "2016-12-08", name: "Ace Visconti" },
  { key: 7, isKiller: false, legacy: false, release: "2017-03-08", name: "William Overbeck" },
  { key: 8, isKiller: false, legacy: false, release: "2017-05-11", name: "Feng Min" },
  { key: 9, isKiller: false, legacy: false, release: "2017-07-27", name: "David King" },
  { key: 10, isKiller: false, legacy: false, release: "2018-06-12", name: "Kate Denson" },
  { key: 11, isKiller: false, legacy: false, release: "2017-10-26", name: "Quentin Smith" },
  { key: 12, isKiller: false, legacy: false, release: "2018-01-23", name: "David Tapp" },
  { key: 13, isKiller: false, legacy: false, release: "2018-09-18", name: "Adam Francis" },
  { key: 14, isKiller: false, legacy: false, release: "2018-12-11", name: "Jeffrey Johansen" },
  { key: 15, isKiller: false, legacy: false, release: "2019-03-19", name: "Jane Romero" },
  { key: 16, isKiller: false, legacy: false, release: "2019-04-02", name: "Ashley Williams" },
  { key: 17, isKiller: false, legacy: false, release: "2019-09-17", removal: "2021-11-17", name: "Nancy Wheeler" },
  { key: 18, isKiller: false, legacy: false, release: "2019-09-17", removal: "2021-11-17", name: "Steve Harrington" },
  { key: 19, isKiller: false, legacy: false, release: "2019-12-03", name: "Yui Kimura" },
  { key: 20, isKiller: false, legacy: false, release: "2020-03-10", name: "Zarina Kassir" },
  { key: 21, isKiller: false, legacy: false, release: "2020-06-16", name: "Cheryl Mason" },
  { key: 22, isKiller: false, legacy: false, release: "2020-09-08", name: "Felix Richter" },
  { key: 23, isKiller: false, legacy: false, release: "2020-12-01", name: "Elodie Beaumont" },
  { key: 24, isKiller: false, legacy: false, release: "2021-03-30", name: "Yun-Jin Lee" },
  { key: 25, isKiller: false, legacy: false, release: "2021-06-15", name: "Jill Valentine" },
  { key: 26, isKiller: false, legacy: false, release: "2021-06-15", name: "Leon S. Kennedy" },
  { key: 27, isKiller: false, legacy: false, release: "2021-10-19", name: "Mikaela Reid" },
  { key: 28, isKiller: false, legacy: false, release: "2021-11-30", name: "Jonah Vasquez" },
  { key: 29, isKiller: false, legacy: false, release: "2022-03-08", name: "Yoichi Asakawa" },
  { key: 30, isKiller: false, legacy: false, release: "2022-06-07", name: "Haddie Kaur" },
  { key: 268435456, isKiller: true, legacy: true, release: "2016-06-14", name: "Trapper" },
  { key: 268435457, isKiller: true, legacy: true, release: "2016-06-14", name: "Wraith" },
  { key: 268435458, isKiller: true, legacy: true, release: "2016-06-14", name: "Hillbilly" },
  { key: 268435459, isKiller: true, legacy: true, release: "2016-06-14", name: "Nurse" },
  { key: 268435460, isKiller: true, legacy: false, release: "2016-12-08", name: "Hag" },
  { key: 268435461, isKiller: true, legacy: false, release: "2016-10-25", name: "Shape" },
  { key: 268435462, isKiller: true, legacy: false, release: "2017-04-11", name: "Doctor" },
  { key: 268435463, isKiller: true, legacy: false, release: "2017-07-27", name: "Huntress" },
  { key: 268435464, isKiller: true, legacy: false, release: "2017-09-14", name: "Cannibal" },
  { key: 268435465, isKiller: true, legacy: false, release: "2017-10-26", name: "Nightmare" },
  { key: 268435466, isKiller: true, legacy: false, release: "2018-01-23", name: "Pig" },
  { key: 268435467, isKiller: true, legacy: false, release: "2018-06-12", name: "Clown" },
  { key: 268435468, isKiller: true, legacy: false, release: "2018-09-18", name: "Spirit" },
  { key: 268435469, isKiller: true, legacy: false, release: "2018-12-11", name: "Legion" },
  { key: 268435470, isKiller: true, legacy: false, release: "2019-03-19", name: "Plague" },
  { key: 268435471, isKiller: true, legacy: false, release: "2019-06-18", name: "Ghost Face" },
  { key: 268435472, isKiller: true, legacy: false, release: "2019-09-17", removal: "2021-11-17", name: "Demogorgon" },
  { key: 268435473, isKiller: true, legacy: false, release: "2019-12-03", name: "Oni" },
  { key: 268435474, isKiller: true, legacy: false, release: "2020-03-10", name: "Deathslinger" },
  { key: 268435475, isKiller: true, legacy: false, release: "2020-06-16", name: "Executioner" },
  { key: 268435476, isKiller: true, legacy: false, release: "2020-09-08", name: "Blight" },
  { key: 268435477, isKiller: true, legacy: false, release: "2020-12-01", name: "Twins" },
  { key: 268435478, isKiller: true, legacy: false, release: "2021-03-30", name: "Trickster" },
  { key: 268435479, isKiller: true, legacy: false, release: "2021-06-15", name: "Nemesis" },
  { key: 268435480, isKiller: true, legacy: false, release: "2021-09-07", name: "Pinhead" },
  { key: 268435481, isKiller: true, legacy: false, release: "2021-11-30", name: "Artist" },
  { key: 268435482, isKiller: true, legacy: false, release: "2022-03-08", name: "Onryo" },
  { key: 268435483, isKiller: true, legacy: false, release: "2022-06-07", name: "Dredge" }
]
