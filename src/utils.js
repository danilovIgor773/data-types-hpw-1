const BOOLEAN = 'boolean';
const STRING = 'string';
const NUMBER = 'number';

const TYPES_COUNT = {
    [BOOLEAN]: 0,
    [STRING]: 0,
    [NUMBER]: 0
};

const _getRandomTypeOrValueOutOfArray = (initialArray) => {
    return initialArray[Math.floor(Math.random() * initialArray.length)];
};

const _getRandomValueOutOfDataType = (dataType) => {
    const STRING_VALUES_SAMPLE_ARRAY = ['hello', 'world', 'one', 'more', 'just a string'];

    function _getBooleanRandomValue() {
        return Math.random() >= 0.5;
    }
    function _getRandomNumberValue() {
        return  Math.floor(Math.random() * 100);
    }

    const RANDOM_VALUES = {
        [BOOLEAN]: _getBooleanRandomValue(),
        [STRING]: _getRandomTypeOrValueOutOfArray(STRING_VALUES_SAMPLE_ARRAY),
        [NUMBER]: _getRandomNumberValue()
    };
    return RANDOM_VALUES[dataType];
};

export function generateRandomArray(arrayLength) {
    const DATA_TYPES_ARRAY = ['boolean', 'string', 'number'];
    const result = [];

    for (let i = 0; i < arrayLength; i++) {
      const randomType = _getRandomTypeOrValueOutOfArray(DATA_TYPES_ARRAY);
      const randomValue = _getRandomValueOutOfDataType(randomType);
      result.push(randomValue);
      TYPES_COUNT[randomType]++;
    }

    return {
        generatedRandomArray: result,
        typeCount: TYPES_COUNT
    };
  }
