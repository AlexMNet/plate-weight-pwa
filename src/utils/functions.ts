export const getPlateComponentData = (
  weight: string | number,
  thirtyFive = false,
  barWeight = 45
) => {
  const plates = [];
  const plateNumbers: any = {};

  weight = Number(weight) - barWeight;

  while (weight >= 90) {
    //45lb Plates
    plates.push({ color: '#0F52BA', width: 15, height: 65 });
    plateNumbers['fortyFive'] = plateNumbers['fortyFive'] + 1 || 1;
    weight = weight - 90;
  }

  if (thirtyFive) {
    while (weight >= 70) {
      plates.push({ color: '#FCF55F', width: 15, height: 65 });
      plateNumbers['thirtyFive'] = plateNumbers['thirtyFive'] + 1 || 1;
      weight = weight - 70;
    }
  }

  while (weight >= 50) {
    //25lb Plates
    plates.push({ color: '#009E60', width: 15, height: 65 });
    plateNumbers['twentyFive'] = plateNumbers['twentyFive'] + 1 || 1;
    weight = weight - 50;
  }

  while (weight >= 20) {
    //10lb plates
    plates.push({ color: '#FAF9F6', width: 9, height: 43 });
    plateNumbers['ten'] = plateNumbers['ten'] + 1 || 1;
    weight = weight - 20;
  }

  while (weight >= 10) {
    //5lb plates
    plates.push({ color: '#880808', width: 9, height: 33 });
    plateNumbers['five'] = plateNumbers['five'] + 1 || 1;
    weight = weight - 10;
  }

  while (weight >= 5) {
    //2.5lb plates
    plates.push({ color: 'black', width: 6, height: 25 });
    plateNumbers['twoPointFive'] = plateNumbers['twoPointFive'] + 1 || 1;
    weight = weight - 5;
  }

  //Add plate numbers to an object at the end of the array
  plates.push(plateNumbers);

  //Add an object of plate colors for badges in the object created above
  plates[plates.length - 1]['colors'] = {
    blue: '#0F52BA',
    yellow: '#FCF55F',
    green: '#009E60',
    white: '#FAF9F6',
    red: '#880808',
    black: '#000000',
  };

  return plates;
};

export const percentageOfInputWeight = (
  inputWeight: string,
  percentage: string
): number => {
  let finalWeight = Math.floor(
    Number(inputWeight) * (Number(percentage) / 100)
  );

  if (finalWeight % 10 < 5 && finalWeight % 10 > 0) {
    finalWeight = finalWeight - (finalWeight % 10);
  }

  if (finalWeight % 10 > 5 && finalWeight % 10 < 10) {
    finalWeight = finalWeight - ((finalWeight % 10) - 5);
  }
  return finalWeight;
};

export const getDataFromInput = (
  inputWeight: string,
  percentage: string,
  thirtyFive?: boolean,
  barWeight?: number
) => {
  const finalWeight = percentageOfInputWeight(inputWeight, percentage);

  const plateData = getPlateComponentData(finalWeight);

  return {
    finalWeight,
    plateData,
  };
};
