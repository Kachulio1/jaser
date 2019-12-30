interface ISvg {
  splash: string;
  logo: string;
  search: string;
  addSmall: string;
  edit: string;
}

const svg = {
  splash: require('./splash.svg'),
  logo: require('./logo.svg'),
  search: require('./search.svg'),
  addSmall: require('./add-small.svg'),
  edit: require('./edit.svg'),
};

export default svg;
